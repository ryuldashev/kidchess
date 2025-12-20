#!/usr/bin/env python3
"""
KidChess Daily Stats — отправляет статистику из Umami в Telegram
Запускать через cron на Fly.io машине в 09:00
"""

import os
import requests
from datetime import datetime, timedelta
import json

# Конфигурация
UMAMI_URL = os.getenv('UMAMI_URL', 'https://kidchess-umami.fly.dev')
UMAMI_TOKEN = os.getenv('UMAMI_TOKEN')  # API token из Umami Settings (или получим через login)
UMAMI_USERNAME = os.getenv('UMAMI_USERNAME', 'admin')
UMAMI_PASSWORD = os.getenv('UMAMI_PASSWORD')  # Пароль для login если нет токена
WEBSITE_ID = os.getenv('UMAMI_WEBSITE_ID', '3af78e55-bbbb-4f55-aba0-0eb505508fcc')

TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN', '8362093606:AAH9NrQt66zR-0OhTac54zxbHn4LyQKVhVU')
TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID', '82493329')


def get_auth_token() -> str:
    """Получить токен авторизации (через API key или login)"""
    if UMAMI_TOKEN:
        return UMAMI_TOKEN

    if not UMAMI_PASSWORD:
        raise ValueError("Нужен UMAMI_TOKEN или UMAMI_PASSWORD")

    # Login для получения токена
    response = requests.post(
        f'{UMAMI_URL}/api/auth/login',
        json={'username': UMAMI_USERNAME, 'password': UMAMI_PASSWORD}
    )
    response.raise_for_status()
    return response.json()['token']


def get_umami_stats(start_at: int, end_at: int, token: str) -> dict:
    """Получить базовую статистику из Umami"""
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }

    url = f'{UMAMI_URL}/api/websites/{WEBSITE_ID}/stats'
    params = {
        'startAt': start_at,
        'endAt': end_at
    }

    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()


def get_event_metrics(start_at: int, end_at: int, token: str) -> list:
    """Получить метрики по событиям"""
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }

    url = f'{UMAMI_URL}/api/websites/{WEBSITE_ID}/metrics'
    params = {
        'startAt': start_at,
        'endAt': end_at,
        'type': 'event'
    }

    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()


def send_telegram(message: str):
    """Отправить сообщение в Telegram"""
    url = f'https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage'
    data = {
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
        'parse_mode': 'HTML'
    }

    response = requests.post(url, json=data)
    response.raise_for_status()
    return response.json()


def format_stats_message(stats: dict, events: list, date: str) -> str:
    """Форматировать сообщение со статистикой"""

    # Базовые метрики (Umami возвращает числа напрямую)
    pageviews = stats.get('pageviews', 0)
    visitors = stats.get('visitors', 0)
    visits = stats.get('visits', 0)
    bounces = stats.get('bounces', 0)
    total_time = stats.get('totaltime', 0)

    # Среднее время сессии
    avg_time = total_time / visits if visits > 0 else 0
    avg_time_min = int(avg_time // 60)
    avg_time_sec = int(avg_time % 60)

    # Bounce rate
    bounce_rate = (bounces / visits * 100) if visits > 0 else 0

    # События
    event_counts = {}
    for event in events:
        name = event.get('x', 'unknown')
        count = event.get('y', 0)
        event_counts[name] = event_counts.get(name, 0) + count

    # Ключевые события
    moves = event_counts.get('move', 0)
    puzzles_completed = event_counts.get('puzzle_completed', 0)
    puzzles_started = event_counts.get('load_puzzle', 0)
    hints_used = event_counts.get('hint_used', 0)
    wrong_moves = event_counts.get('wrong_move', 0)
    kids_started = event_counts.get('start_kids_mode', 0)
    ai_started = event_counts.get('start_ai_game', 0)

    # Формируем сообщение
    message = f"""<b>🎯 KidChess Stats — {date}</b>

<b>📊 Трафик</b>
👥 Посетители: <b>{visitors}</b>
🔄 Сессий: <b>{visits}</b>
📄 Просмотров: <b>{pageviews}</b>
⏱ Ср. время: <b>{avg_time_min}м {avg_time_sec}с</b>
📉 Bounce: <b>{bounce_rate:.1f}%</b>

<b>🎮 Игровая активность</b>
♟ Ходов сделано: <b>{moves}</b>
✅ Пазлов решено: <b>{puzzles_completed}</b>
📝 Пазлов начато: <b>{puzzles_started}</b>
💡 Подсказок: <b>{hints_used}</b>
❌ Неверных ходов: <b>{wrong_moves}</b>

<b>🎯 Режимы</b>
👶 Kids Mode: <b>{kids_started}</b>
🤖 AI Mode: <b>{ai_started}</b>
"""

    return message


def main():
    """Основная функция"""
    # Вчерашний день (09:00 → статистика за вчера)
    yesterday = datetime.now() - timedelta(days=1)
    start_of_day = yesterday.replace(hour=0, minute=0, second=0, microsecond=0)
    end_of_day = yesterday.replace(hour=23, minute=59, second=59, microsecond=999999)

    start_at = int(start_of_day.timestamp() * 1000)
    end_at = int(end_of_day.timestamp() * 1000)

    date_str = yesterday.strftime('%d.%m.%Y')

    print(f"Получаем статистику за {date_str}...")

    try:
        # Авторизация
        token = get_auth_token()
        print("✓ Авторизация успешна")

        # Получаем данные
        stats = get_umami_stats(start_at, end_at, token)
        events = get_event_metrics(start_at, end_at, token)

        # Форматируем и отправляем
        message = format_stats_message(stats, events, date_str)

        print("Отправляем в Telegram...")
        send_telegram(message)

        print("✅ Статистика отправлена!")

    except ValueError as e:
        print(f"ERROR: {e}")
        print("Установи UMAMI_TOKEN или UMAMI_PASSWORD")
    except requests.exceptions.HTTPError as e:
        error_msg = f"❌ KidChess Stats Error\n\n{e}\n\nResponse: {e.response.text if e.response else 'N/A'}"
        print(error_msg)
        try:
            send_telegram(f"⚠️ <b>KidChess Stats Error</b>\n\n<code>{str(e)}</code>")
        except:
            pass
    except Exception as e:
        print(f"ERROR: {e}")
        try:
            send_telegram(f"⚠️ <b>KidChess Stats Error</b>\n\n<code>{str(e)}</code>")
        except:
            pass


if __name__ == '__main__':
    main()

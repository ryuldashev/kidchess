# KidChess Scripts

## daily_stats.py

Ежедневная отправка статистики из Umami в Telegram.

### Настройка

1. **Создай API токен в Umami:**
   - Зайди на https://kidchess-umami.fly.dev
   - Settings → API Keys → Create
   - Скопируй токен

2. **Environment variables:**
   ```bash
   UMAMI_TOKEN=your_api_token_here
   # Остальное уже захардкожено, но можно переопределить:
   # UMAMI_URL=https://kidchess-umami.fly.dev
   # UMAMI_WEBSITE_ID=3af78e55-bbbb-4f55-aba0-0eb505508fcc
   # TELEGRAM_BOT_TOKEN=...
   # TELEGRAM_CHAT_ID=...
   ```

3. **Запуск на Fly (nomi cron машина):**
   ```bash
   # Добавить в crontab:
   0 9 * * * UMAMI_TOKEN=xxx /path/to/python3 /path/to/daily_stats.py
   ```

### Тестовый запуск

```bash
UMAMI_TOKEN=your_token python3 scripts/daily_stats.py
```

### Пример вывода в Telegram

```
🎯 KidChess Stats — 13.12.2024

📊 Трафик
👥 Посетители: 42
🔄 Сессий: 58
📄 Просмотров: 156
⏱ Ср. время: 4м 32с
📉 Bounce: 23.5%

🎮 Игровая активность
♟ Ходов сделано: 847
✅ Пазлов решено: 23
📝 Пазлов начато: 45
💡 Подсказок: 12
❌ Неверных ходов: 67

🎯 Режимы
👶 Kids Mode: 15
🤖 AI Mode: 8
```

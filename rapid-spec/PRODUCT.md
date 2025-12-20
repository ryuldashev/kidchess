# Product Scope

## TL;DR

**v1.0 LIVE:** PWA с паками шахматных задач, 🦊 AI-помощником, режимом игры против ИИ. Vanilla JS, zero dependencies кроме chess.js. Бесплатно, без регистрации. Фокус на спокойном обучении без стресса.

---

## Core Value

**Шахматы без стресса для малышей.** Нет таймеров, нет рейтингов, нет давления. Только задачки, подсказки от лисёнка, и удовольствие от решения.

---

## Current Features (v1.0)

| Feature | Status | Implementation |
|---------|--------|----------------|
| Puzzle Packs | Done | Тематические паки (мат в 1, мат в 2, etc) |
| Interactive Board | Done | SVG фигуры с градиентами, tap-to-move |
| Dynamic Board Size | Done | Авто-размер под позицию (4x4 до 8x8) |
| AI Hints (🦊) | Done | Preset подсказки на русском |
| Play vs AI | Done | Minimax с alpha-beta, 3 уровня |
| Progress Tracking | Done | localStorage по пакам |
| Sound Effects | Done | Move, capture, error, success |
| Color Themes | Done | Green, Blue, Red |
| Error Reporting | Done | Telegram bot |
| Analytics | Done | Umami self-hosted |

## Tech Stack (Current)

```
Frontend:   Vanilla JS + CSS (no React!)
Chess:      chess.js (logic only)
Board:      Custom SVG rendering
AI:         Local minimax (no API)
Storage:    localStorage
Deploy:     Cloudflare Pages
Analytics:  Umami (Fly.io)
Errors:     Telegram Bot API
```

**Почему Vanilla JS:** Быстрая загрузка, простота, нет build step. PWA работает offline.

---

## User Flow (Current)

```
1. Открыть приложение
2. Экран выбора паков (карточки с прогрессом)
3. Выбрать пак → первая нерешённая задача
4. Решать:
   - Tap фигура → показать возможные ходы
   - Tap целевую клетку → сделать ход
   - Правильно → анимация + звук + следующая
   - Неправильно → красная подсветка + можно снова
5. Подсказка: tap на 🦊 → текст + подсветка фигуры
6. Играть vs AI: отдельный пак "Игра с ИИ"
```

---

## Screens (Current Implementation)

### Screen 1: Pack Selection
- Grid карточек с emoji и названием
- Progress bar для каждого пака
- "Игра с ИИ" как отдельный пак

### Screen 2: Puzzle/Game
- Header: back, название, прогресс
- Board: динамический размер
- Hint block: 🦊 + текст подсказки
- Controls: skip, undo, report

### Screen 3: Menu Overlay
- Restart, Next, Prev, Random
- Change Pack, Reset Progress

### Screen 4: Report Modal
- Textarea для описания ошибки
- Отправка в Telegram

---

## NOT in v1.0 (Roadmap)

| Feature | Version | Priority |
|---------|---------|----------|
| Paywall/Subscription | v1.2 | High |
| Claude Haiku hints | v2.0 | Medium |
| Adaptive difficulty | v2.0 | Medium |
| Family mode | v3.0 | Low |
| 3D board | v4.0 | Low |
| Telegram bot | v4.0 | Low |

---

## Next Iteration Focus

**v1.1 — Polish:**
- [ ] Больше паков задач
- [ ] Улучшить onboarding
- [ ] Claymorphism UI refresh
- [ ] PWA manifest + icons

**v1.2 — Monetization:**
- [ ] Paywall после N бесплатных задач
- [ ] Stripe integration
- [ ] $3.99/мес или $29.99 lifetime

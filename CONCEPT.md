# KidChess (Tactile Chess)

> Single Source of Truth для проекта

## Identity

| Attribute | Value |
|-----------|-------|
| **Name** | KidChess |
| **Vision Name** | Tactile Chess (Clay Lab) |
| **Layer** | Growth (Clay Lab ecosystem) |
| **Tagline** | Шахматы для детей с AI-помощником |
| **Target** | Дети 3+ и их родители |

---

## Current State (v1.0)

**Live:** PWA на Cloudflare

### What Works Now

| Feature | Status | Notes |
|---------|--------|-------|
| Puzzle Packs | Done | Паки задач по темам (мат в 1, мат в 2, etc) |
| Interactive Board | Done | SVG фигуры, drag-less (tap-tap), динамический размер |
| AI Hints (🦊) | Done | Предгенерированные подсказки на русском |
| Play vs AI | Done | Minimax с alpha-beta, 3 уровня сложности |
| Progress Tracking | Done | localStorage, прогресс по пакам |
| Themes | Done | Green, Blue, Red |
| Analytics | Done | Umami self-hosted |
| Error Reporting | Done | Telegram bot |
| Sound Effects | Done | Move, capture, error, success |

### Tech Stack (Current)

```
Frontend: Vanilla JS + CSS (no framework)
Chess:    chess.js (logic)
AI:       Local minimax (no API calls)
Deploy:   Cloudflare Pages
Analytics: Umami (self-hosted on Fly.io)
```

### What's Missing vs Vision

| Vision (Tactile Chess) | Current | Gap |
|------------------------|---------|-----|
| AI объясняет метафорами | Preset hints | Need Claude Haiku integration |
| Семейный режим | - | Not started |
| 3D доска | 2D SVG | Not started |
| Subscription | Free | Need paywall |
| Calm/Zen feel | Basic | Need UI polish |
| Weekly "alive" agent | - | Not started |

---

## Vision (Tactile Chess - Clay Lab)

### DNA (from Clay Lab)

| Principle | Application |
|-----------|-------------|
| **TACTILE** | Красивая доска, приятные звуки, ощущение "настоящих" шахмат |
| **CALM** | Без таймеров, без стресса, никаких красных алертов |
| **MALLEABLE** | AI подстраивает сложность и стиль объяснений |
| **SOCIAL** | Семейные партии, папа vs сын |
| **ALIVE** | Еженедельно: "Нашёл интересную позицию для тебя!" |
| **TG-FIRST** | Telegram вход, уведомления |

### AI-Powered Features (Vision)

1. **Метафорические объяснения**
   - "Твой конь как путешественник в тумане"
   - Не "Qd7 +0.8", а человеческий язык

2. **Персональный тренер**
   - Находит слабые места
   - Подбирает задачи под уровень
   - Glicko-2 рейтинг под капотом

3. **Семейный режим**
   - История партий папа/сын
   - AI-комментатор для обоих
   - Реванши и мини-турниры

---

## Roadmap

### v1.1 - Polish (Current Focus)
- [ ] Улучшить UI/UX (Claymorphism style)
- [ ] Добавить больше паков задач
- [ ] Улучшить onboarding

### v1.2 - Monetization
- [ ] Paywall после N задач
- [ ] Stripe integration
- [ ] $3.99/мес или Lifetime

### v2.0 - AI Integration
- [ ] Claude Haiku для динамических подсказок
- [ ] Персонализированные объяснения
- [ ] Adaptive difficulty (Glicko-2)

### v3.0 - Social
- [ ] Семейный режим
- [ ] Мультиплеер
- [ ] Leaderboards

### v4.0 - Full Vision
- [ ] 3D доска
- [ ] Weekly "alive" agent
- [ ] Telegram bot integration
- [ ] Tactile Table (другие игры)

---

## Business Model

### Pricing (Planned)

| Tier | Price | Includes |
|------|-------|----------|
| Free | $0 | 5 задач/день, базовый AI |
| Premium | $3.99/мес | Все паки, полный AI, без рекламы |
| Lifetime | $29.99 | Всё навсегда |

### Economics (Target)

| Metric | Value |
|--------|-------|
| AI cost per user | ~$0.05/мес (Haiku) |
| Infra | ~$0.01/мес |
| Target margin | >90% |
| Break-even | ~100 paying users |

---

## Links

| Resource | Path |
|----------|------|
| Code | `/Users/ruslan/dev/kidchess/` |
| Rapid Spec | `./rapid-spec/` |
| Landing | `./rapid-spec/landing/` |
| Clay Lab Master | `/Users/ruslan/ttpweb/spec.md` |
| Tactile Chess Vision | `/Users/ruslan/ttpweb/apps/tactile-chess/spec.md` |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2024-12 | Vanilla JS (no React) | Faster load, simpler |
| 2024-12 | Local AI first | No API costs during validation |
| 2024-12 | Puzzle packs vs adaptive | Easier to curate quality |
| 2024-12 | 🦊 as mascot | Friendly, non-threatening |

---

*Last updated: 2024-12-10*
*Part of Clay Lab ecosystem by Tashkent Technology Partners*

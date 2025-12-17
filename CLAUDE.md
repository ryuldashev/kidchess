# KidChess → StickyChess

> ⚠️ **REBRANDING**: Приложение переименовывается в **StickyChess**. Документация будет обновлена позже.

> Шахматы для детей от 3 лет с AI-помощником 🦊

## Quick Links

| Resource | URL/Path |
|----------|----------|
| **Production** | https://stickchess.surge.sh |
| **Telegram Bot** | https://t.me/stickychessbot |
| **Landing** | https://stickchess.surge.sh/landing/ |
| **Pitch** | https://stickchess.surge.sh/pitch/ |
| **Research** | https://stickchess.surge.sh/research/#/ru/ |
| **Analytics** | https://kidchess-umami.fly.dev |
| **Concept** | `CONCEPT.md` — Single Source of Truth |

## Telegram Mini App

```
Bot: @stickychessbot
Token: 8446283214:AAHxeD3ln7GPfaPBIQ-296BqpiMNfCHkKpQ
```

Настройка через @BotFather:
- `/setmenubutton` → Web App → https://stickchess.surge.sh

## Current State

**v1.0 LIVE** на Surge.sh

### Features
- Puzzle Packs (тематические паки задач)
- Interactive Board (SVG, tap-to-move)
- AI Hints (🦊 preset подсказки)
- Play vs AI (minimax, 3 уровня)
- Progress (localStorage)
- Analytics (Umami)
- Error Reporting (Telegram)

### Tech Stack
```
Frontend:   Vanilla JS + CSS (no build!)
Chess:      chess.js
Deploy:     Surge.sh (primary), Cloudflare Pages (redirect)
Analytics:  Umami (Fly.io)
```

## Project Structure

```
kidchess/
├── CLAUDE.md           # This file
├── CONCEPT.md          # Vision + Current State + Roadmap
├── index.html          # App entry point
├── css/style.css       # Styles
├── js/
│   ├── game.js         # Main game logic
│   ├── ai.js           # Minimax AI
│   ├── puzzles.js      # Puzzle packs data
│   ├── sounds.js       # Sound effects
│   └── chess.min.js    # chess.js library
├── assets/             # Static assets
├── landing/            # Public landing page
├── pitch/              # Investor pitch
├── research/           # Docsify documentation (RU/EN)
├── rapid-spec/         # Short spec docs
└── umami/              # Analytics config
```

## Key Files

| File | Purpose |
|------|---------|
| `js/game.js` | Main Game object, UI, puzzle logic |
| `js/ai.js` | ChessAI with minimax + alpha-beta |
| `js/puzzles.js` | PUZZLE_PACKS data structure |
| `css/style.css` | All styles, themes (green/blue/red) |

## Commands

```bash
# Local dev (just open in browser, no build needed)
open index.html

# Deploy to production
surge . --domain stickchess.surge.sh

# View analytics
open https://kidchess-umami.fly.dev
```

## Notes for Claude

- **Vanilla JS** — no React, no build step, keep it simple
- **Mobile-first** — PWA, touch-friendly
- **Kid-friendly** — большие кнопки, яркие цвета, звуки
- **No stress** — без таймеров, без давления
- Персонаж: 🦊 лисёнок для подсказок
- Деплой через `surge . --domain stickchess.surge.sh`

## Ecosystem

Part of **Clay Lab** (Tashkent Technology Partners)
- Vision name: **Tactile Chess**
- Layer: Growth
- DNA: Tactile, Calm, Malleable, Social, Alive

See `CONCEPT.md` for full vision and roadmap.

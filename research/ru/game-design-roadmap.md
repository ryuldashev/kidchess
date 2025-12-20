# Game Design Roadmap

> KidChess (Tactile Chess) — Полная эволюция игрового дизайна

---

## Резюме

**KidChess** — это детское шахматное приложение с AI-помощником, разработанное для детей от 3 лет. Приложение следует философии **Tactile Chess** (Clay Lab DNA): без стресса, без таймеров, с тактильными ощущениями настоящих шахмат и умным AI, который объясняет ходы простым языком.

**Текущая версия:** v1.0 LIVE (PWA на Cloudflare Pages)
**Технологии:** Vanilla JS + CSS, chess.js, local minimax AI
**Монетизация:** Планируется v1.2 (Stripe subscription)
**Target audience:** Дети 3-10 лет + их родители

---

## Текущее состояние (v1.0)

### Реализованные фичи

| Фича | Статус | Детали |
|------|--------|--------|
| **Puzzle Packs** | ✅ Done | 3 детских пака (Первые шаги, Учимся думать, Почти мастер) |
| **Kids Mode** | ✅ Done | 3x3 и 4x4 доска, символьные подсказки [♖↑], противник с настройкой частоты ходов |
| **Interactive Board** | ✅ Done | SVG фигуры с градиентами, tap-to-move, динамический размер |
| **AI Hints (🦊)** | ✅ Done | Preset подсказки на русском для puzzle mode |
| **Play vs AI** | ✅ Done | Minimax с alpha-beta, 3 уровня сложности, полная 8x8 доска |
| **Progress Tracking** | ✅ Done | localStorage по пакам, отдельно для kids/puzzle режимов |
| **Sound Effects** | ✅ Done | Move, capture, error, success, select, undo, newgame |
| **Themes** | ✅ Done | Green (puzzle), Blue (AI), Red (kids), Kids (kids mode) |
| **Error Reporting** | ✅ Done | Telegram bot для репортов ошибок |
| **Analytics** | ✅ Done | Umami self-hosted, детальное отслеживание ходов |
| **Confetti Effect** | ✅ Done | Победная анимация в kids mode |
| **PRO Modal (Fake Door)** | ✅ Done | Для валидации готовности платить $3.99/мес |

### Архитектура

```
KidChess/
├── Game Modes:
│   ├── Kids Mode      → 3x3/4x4 доска, символьные подсказки, обучение
│   ├── Puzzle Mode    → Динамическая доска, тактические задачи
│   └── AI Mode        → Полная 8x8 доска, игра против minimax AI
│
├── Core Systems:
│   ├── Chess Logic    → chess.js (move validation, FEN parsing)
│   ├── Board Rendering → Custom SVG с градиентами
│   ├── AI Engine      → Local minimax (глубина 1-3 для разных уровней)
│   ├── Progress       → localStorage (completed puzzles/levels)
│   ├── Analytics      → Umami (события + детальные данные ходов)
│   └── Sound          → SoundManager (Web Audio API)
│
└── UI Components:
    ├── Pack Selection → Grid карточек с прогрессом
    ├── Game Screen   → Header + Board + Hint Block + Controls
    ├── Menu Overlay  → Навигация, рестарт, reset
    ├── Modals        → Report, Result (AI game), PRO (fake door)
    └── Hint System   → Speech bubbles (kids), text hints (puzzle/AI)
```

### Игровые механики (Kids Mode)

**Инновация:** Режим для детей 3-5 лет с упрощенными правилами.

| Параметр | Описание |
|----------|----------|
| **Доска** | 3x3 (Первые шаги), 4x4 (остальные паки) |
| **Цель** | Съесть все черные фигуры |
| **Подсказки** | Символьные: [фигура, направление, действие] |
| **Противник** | Настраиваемая частота ходов (0%, 33%, 66%) |
| **Прогрессия** | 9 уровней на пак, постепенное усложнение |
| **Обратная связь** | Конфетти при победе, перезапуск при проигрыше |

**Пример подсказки Kids Mode:**
```
[♖, ↑]       → "Ладья вверх"
[♘, ↗]       → "Конь прыгает направо-вверх"
[♕, ↖, 💥]   → "Ферзь налево-вверх, съесть!"
```

### Игровые механики (Puzzle Mode)

| Параметр | Описание |
|----------|----------|
| **Доска** | Динамическая (минимум 4x4, авто-центрирование на фигурах) |
| **Цель** | Выполнить решение (sequence of moves) |
| **Подсказки** | Текстовые от 🦊: "Твой ферзь видит слабость" |
| **Валидация** | Точное совпадение с solution UCI |
| **Прогрессия** | Tracked per pack, skip allowed |

### Игровые механики (AI Mode)

| Параметр | Описание |
|----------|----------|
| **Доска** | Полная 8x8 |
| **Цель** | Поставить мат ИИ |
| **AI Levels** | 1 (depth=1), 2 (depth=2), 3 (depth=3) |
| **Подсказки** | Анализ лучшего хода AI + подсветка фигуры |
| **Результаты** | Win/Lose/Draw с модалкой статистики |

### Технические характеристики

| Метрика | Значение |
|---------|----------|
| **Build size** | ~150KB (gzipped) |
| **Load time** | < 1s (PWA cache) |
| **Dependencies** | chess.js (40KB) |
| **Browser support** | Modern browsers (ES6+) |
| **Offline** | Full (PWA) |
| **Analytics latency** | < 100ms (self-hosted) |

---

## v1.1 — Polish & Onboarding

**Цель:** Улучшить UX, добавить контента, подготовиться к монетизации.

**Timeline:** 2-3 недели
**Priority:** High

### Новые фичи

#### 1. Onboarding Flow

**Проблема:** Новые пользователи не понимают, как играть.

**Решение:**

```
First Launch:
┌────────────────────────────────┐
│  🎉 Привет! Я лисёнок 🦊       │
│                                │
│  Давай научимся играть в       │
│  шахматы вместе!               │
│                                │
│  [Начать обучение]             │
└────────────────────────────────┘

Step 1: Interactive Tutorial
- Подсветка фигуры
- "Нажми на ладью"
- "А теперь нажми туда, куда хочешь пойти"
- Победа → конфетти

Step 2: First Real Level
- Автоматически загружается Pack 1, Level 1
- Hint bubble активен
```

**Хранение:** `localStorage.getItem('onboardingCompleted')`

#### 2. Больше Puzzle Packs

**Новые паки (Kids Mode):**

| Pack ID | Название | Доска | Уровней | Тема |
|---------|----------|-------|---------|------|
| **pack4** | Шах и мат | 4x4 | 9 | Обучение шаху и мату |
| **pack5** | Супергерои | 5x5 | 12 | Сложные комбинации |

**Новые паки (Puzzle Mode):**

| Pack ID | Название | Puzzles | Тема |
|---------|----------|---------|------|
| **tactics1** | Вилки и связки | 20 | Тактические мотивы |
| **tactics2** | Открытые линии | 20 | Позиционная игра |

#### 3. UI Polish (Claymorphism)

**Claymorphism стиль** (в соответствии с Clay Lab DNA):

```css
/* Soft shadows, rounded corners, subtle gradients */
.pack-card {
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 24px;
  box-shadow:
    8px 8px 16px rgba(0,0,0,0.1),
    -8px -8px 16px rgba(255,255,255,0.7);
  transition: all 0.3s ease;
}

.pack-card:hover {
  transform: translateY(-4px);
  box-shadow:
    12px 12px 24px rgba(0,0,0,0.15),
    -12px -12px 24px rgba(255,255,255,0.8);
}

.hint-block {
  background: linear-gradient(135deg, #fff9e6, #fff3cc);
  border-radius: 20px;
  box-shadow:
    inset 2px 2px 4px rgba(0,0,0,0.05),
    4px 4px 12px rgba(0,0,0,0.1);
}
```

**Обновления:**
- Мягкие тени вместо плоских
- Больше rounded corners
- Subtle animations (ease-in-out)
- Gradient backgrounds для hint block
- Улучшенная типографика (возможно, custom font)

#### 4. PWA Improvements

```json
// manifest.json
{
  "name": "KidChess — Шахматы для детей",
  "short_name": "KidChess",
  "description": "Шахматы без стресса с AI-помощником 🦊",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#4a7c59",
  "theme_color": "#4a7c59",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Service Worker:** Offline-first strategy с cache для assets.

#### 5. Улучшенные звуки

**Новые звуки:**
- `check.mp3` — при шахе
- `promotion.mp3` — при превращении пешки
- `levelUp.mp3` — при завершении пака

**Реализация:** Web Audio API с volume control в меню.

### UX Improvements

| Улучшение | Описание |
|-----------|----------|
| **Hint Animation** | Smooth expand/collapse с easing |
| **Victory Celebration** | Больше конфетти, лучшая анимация |
| **Loading States** | Skeleton screens вместо пустых экранов |
| **Gestures** | Swipe left/right для next/prev puzzle |
| **Haptics** | Vibration на мобильных (navigator.vibrate) |

### Технические требования (v1.1)

| Задача | Детали |
|--------|---------|
| **Icons** | Создать 192x192 и 512x512 PNG icons |
| **Service Worker** | Workbox или custom SW |
| **Fonts** | Google Fonts (Fredoka One для заголовков?) |
| **Sounds** | Добавить 3 новых звука |
| **CSS Refactor** | Claymorphism variables в :root |

---

## v1.2 — Monetization

**Цель:** Запустить paywall и начать зарабатывать.

**Timeline:** 2 недели после v1.1
**Priority:** Critical

### Paywall Strategy

**Freemium модель:**

| Tier | Доступ | Цена |
|------|--------|------|
| **Free** | Pack 1 (9 levels) + 3 AI games | $0 |
| **Premium Monthly** | Все паки + unlimited AI | $3.99/мес |
| **Lifetime** | Все навсегда | $29.99 one-time |

**Fake Door результаты** → Отслеживаем клики на "Buy $3.99/мес" в PRO modal.

### Paywall Flow

```
User Completes Pack 1:
┌────────────────────────────────┐
│  🎉 Молодец! Ты прошёл         │
│  "Первые шаги"!                │
│                                │
│  Хочешь ещё задач?             │
│                                │
│  [Разблокировать все паки]     │
│  $3.99/мес или $29.99 навсегда │
│                                │
│  [Может позже]                 │
└────────────────────────────────┘

Click "Разблокировать":
→ Stripe Checkout (redirect)
→ Success → webhook → update Firebase/Supabase
→ Return to app → unlock all packs
```

### Stripe Integration

**Setup:**

1. Stripe Products:
   - `monthly_subscription` — $3.99/мес (recurring)
   - `lifetime_access` — $29.99 one-time

2. Payment Flow:
```javascript
// client-side
async function handlePurchase(priceId) {
  const response = await fetch('/api/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, userId })
  });
  const { sessionId } = await response.json();

  const stripe = Stripe('pk_live_...');
  await stripe.redirectToCheckout({ sessionId });
}

// server-side (Cloudflare Worker)
async function createCheckoutSession(priceId, userId) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: priceId === 'price_monthly' ? 'subscription' : 'payment',
    success_url: 'https://kidchess.app/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://kidchess.app/cancel',
    metadata: { userId }
  });
  return session.id;
}
```

3. Webhook Handler:
```javascript
// /api/webhook (Cloudflare Worker)
async function handleStripeWebhook(event) {
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      await unlockPremium(session.metadata.userId);
      break;
    case 'customer.subscription.deleted':
      await revokePremium(event.data.object.metadata.userId);
      break;
  }
}
```

### Backend (Minimal)

**Опции:**

**A) Cloudflare Workers + KV (простейший вариант):**
```javascript
// KV Store:
// key: userId → value: { premium: true, expires: null }

async function isPremium(userId) {
  const data = await KV.get(`user:${userId}`, 'json');
  return data?.premium === true;
}
```

**B) Supabase (рекомендуется):**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  premium BOOLEAN DEFAULT false,
  stripe_customer_id TEXT,
  subscription_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

**Выбор:** Supabase (бесплатный tier + auth + realtime)

### User Auth

**Telegram Login Widget** (соответствует DNA: TG-first)

```html
<script async src="https://telegram.org/js/telegram-widget.js?22"
  data-telegram-login="kidchess_bot"
  data-size="large"
  data-auth-url="https://kidchess.app/auth/telegram"
  data-request-access="write">
</script>
```

**Flow:**
1. User clicks "Login via Telegram"
2. Telegram widget → auth callback with user data
3. Backend creates/updates user in Supabase
4. Frontend stores `userId` in localStorage
5. All API calls include `userId` for premium check

**Альтернатива (проще):** Email Magic Link (Supabase Auth)

### Analytics для монетизации

**Ключевые метрики:**

| Метрика | Событие | Цель |
|---------|---------|------|
| **Conversion Rate** | `pro_buy_clicked` / `paywall_shown` | > 5% |
| **ARPU** | Revenue / Active Users | > $0.50 |
| **LTV** | Average revenue per paying user | > $15 |
| **Churn** | Monthly cancellations / subscribers | < 10% |

**Umami события:**
```javascript
umami.track('paywall_shown', { trigger: 'pack_completed' });
umami.track('pro_buy_clicked', { tier: 'monthly', price: 3.99 });
umami.track('purchase_completed', { tier: 'monthly', revenue: 3.99 });
```

### Технические требования (v1.2)

| Задача | Инструмент | Стоимость |
|--------|-----------|-----------|
| **Payment** | Stripe | 2.9% + $0.30 |
| **Backend** | Supabase Free | $0 (до 50K users) |
| **Auth** | Telegram Widget | $0 |
| **Workers** | Cloudflare Workers | $0 (100K requests/day) |
| **Total** | | ~3% per transaction |

---

## v2.0 — AI Integration (Claude Haiku)

**Цель:** Динамические AI-подсказки вместо preset hints.

**Timeline:** 1-2 месяца после v1.2
**Priority:** Medium

### Claude Haiku для подсказок

**Проблема:** Preset hints ограничены, не адаптивны.

**Решение:** Claude Haiku генерирует персональные объяснения.

#### Пример взаимодействия

**Текущие hints (v1.0):**
```
🦊 "Твой ферзь видит слабость у чёрного короля!"
🦊 "Попробуй подойти ближе к королю"
```

**AI hints (v2.0):**
```
Prompt to Claude:
---
Ты добрый лисёнок-тренер. Объясни ребёнку 5 лет, какой ход сделать.

Позиция (FEN): rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2
Лучший ход: Nf3
Контекст: Ребёнок играет белыми, это его 2-й ход.

Требования:
- Максимум 2 предложения
- Простой язык
- Метафора или образ (если уместно)
- Эмодзи для настроения
---

Claude Response:
"🦊 Твой конь хочет выйти на прогулку! Поставь его на f3, и он сможет защищать центр доски 🛡️"
```

#### Система персонализации

**User Profile:**
```javascript
{
  userId: "uuid",
  age: 5,  // для подстройки сложности объяснений
  completedPuzzles: 45,
  averageHintsPerPuzzle: 1.2,
  preferredStyle: "metaphorical", // или "direct"
  glickoRating: 800,  // скрытый рейтинг
  weakPatterns: ["forks", "pins"]  // слабые места
}
```

**Adaptive Hints:**
```javascript
async function getPersonalizedHint(position, userId) {
  const profile = await getUserProfile(userId);

  const prompt = `
    Ты добрый лисёнок-тренер для ${profile.age}-летнего ребёнка.
    Рейтинг: ${profile.glickoRating} (внутренний).
    Слабые стороны: ${profile.weakPatterns.join(', ')}.

    Позиция: ${position.fen}
    Лучший ход: ${position.bestMove}

    Объясни ход простым языком, фокусируясь на паттерне "${detectPattern(position)}".
  `;

  const response = await anthropic.messages.create({
    model: "claude-haiku-3.5",
    max_tokens: 100,
    messages: [{ role: "user", content: prompt }]
  });

  return response.content[0].text;
}
```

### Glicko-2 Рейтинговая система

**Цель:** Скрытый рейтинг для adaptive difficulty.

**Реализация:**
```javascript
// Glicko-2 parameters
const INITIAL_RATING = 1500;
const INITIAL_RD = 350;  // Rating Deviation
const VOLATILITY = 0.06;

class GlickoProfile {
  constructor(userId) {
    this.userId = userId;
    this.rating = INITIAL_RATING;
    this.rd = INITIAL_RD;
    this.volatility = VOLATILITY;
  }

  updateAfterPuzzle(difficulty, solved, hintsUsed) {
    // Glicko-2 update formula
    const outcome = solved ? 1 : 0;
    const expectedScore = this.getExpectedScore(difficulty);

    // Update rating, RD, volatility
    this.rating = calculateNewRating(this.rating, this.rd, outcome, expectedScore);
    this.rd = calculateNewRD(this.rd, this.volatility);
  }

  getRecommendedDifficulty() {
    // Возвращает рейтинг задачи, подходящей для пользователя
    return this.rating + (this.rd * 0.5);
  }
}
```

**Использование:**
```javascript
// При выборе следующей задачи
const profile = await getGlickoProfile(userId);
const recommendedDifficulty = profile.getRecommendedDifficulty();

// Фильтруем задачи по сложности (±200 рейтинга)
const suitablePuzzles = allPuzzles.filter(p =>
  Math.abs(p.rating - recommendedDifficulty) < 200
);

// Выбираем следующую нерешённую
const nextPuzzle = suitablePuzzles.find(p => !completed.has(p.id));
```

### Weekly "Alive" Agent

**Концепция:** Еженедельный AI-агент находит персональные задачи.

**Flow:**
```
Every Monday 10am:
1. Claude Agent анализирует профиль пользователя
2. Генерирует 3 персональные задачи (на основе weak patterns)
3. Telegram notification: "🦊 Привет! Нашёл для тебя интересные задачки!"
4. Пользователь открывает app → видит "Задачи недели" pack
```

**Prompt для Claude:**
```
Ты Weekly Chess Coach Agent.

User Profile:
- Age: 6
- Rating: 950
- Weak patterns: pins (25% success), discovered attacks (40% success)
- Strong patterns: forks (90% success)

Task: Найди 3 шахматные позиции (FEN), которые помогут ребёнку улучшить weak patterns.

Требования:
- Сложность: 900-1000 rating
- Фокус: pins и discovered attacks
- Разнообразие: разные типы фигур
- Формат: JSON с FEN, solution, hint
```

**Response:**
```json
[
  {
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
    "solution": ["Bxf7+"],
    "hint": "Твой слон может сделать 'pin' — он прижмёт фигуру к королю!",
    "pattern": "pin",
    "difficulty": 950
  },
  ...
]
```

### AI Cost Optimization

**Claude Haiku pricing:** $0.25 / 1M input tokens, $1.25 / 1M output tokens

**Средний запрос:**
- Input: ~200 tokens (prompt + FEN)
- Output: ~50 tokens (hint)
- Cost per hint: ~$0.0001

**Projected usage:**
- 1000 active users
- 5 hints per user per week
- Monthly cost: 1000 × 5 × 4 × $0.0001 = $2/month

**Оптимизации:**
1. **Cache hints** для популярных позиций (Redis)
2. **Batch requests** для weekly agent
3. **Fallback** на preset hints если API недоступен

### Технические требования (v2.0)

| Компонент | Решение | Стоимость |
|-----------|---------|-----------|
| **AI API** | Claude Haiku | ~$5/мес (1K users) |
| **Cache** | Cloudflare KV | $0.50/мес |
| **Cron** | Cloudflare Workers Cron | $0 (included) |
| **Telegram Bot** | Bot API | $0 |
| **Total** | | ~$6/мес |

**ROI:** Если конверсия 10% и ARPU $3.99, revenue = $399/мес vs cost $6/мес → 66x ROI.

---

## v3.0 — Family Mode & Social

**Цель:** Превратить в семейное приложение.

**Timeline:** 2-3 месяца после v2.0
**Priority:** Low (зависит от traction)

### Family Mode

**Концепция:** Папа vs сын с AI-комментатором.

#### Feature Design

**1. Family Setup:**
```
First Time:
┌────────────────────────────────┐
│  👨‍👦 Семейный режим              │
│                                │
│  Кто играет?                   │
│  [Папа] vs [Сын]               │
│                                │
│  Имена:                        │
│  ┌────────────┐ ┌────────────┐ │
│  │ Андрей     │ │ Максим     │ │
│  └────────────┘ └────────────┘ │
│                                │
│  [Начать партию]               │
└────────────────────────────────┘
```

**2. Game Flow:**
```
Game Screen:
┌────────────────────────────────┐
│  ← Андрей vs Максим            │
├────────────────────────────────┤
│  🎮 Ходит: Максим (белые)      │
│                                │
│  [Доска 8x8]                   │
│                                │
│  💬 Лисёнок:                   │
│  "Максим, отличный ход!        │
│   Слон защищает центр 🛡️"     │
│                                │
│  [Подсказка для Максима]       │
└────────────────────────────────┘

After Move:
💬 Комментарий для обоих:
"Андрей может попробовать атаку ферзём. Максим, будь внимателен!"
```

**3. Post-Game Analysis:**
```
Game Over Screen:
┌────────────────────────────────┐
│  🎉 Победа Максима!            │
│                                │
│  📊 Статистика:                │
│  Ходов: 24                     │
│  Съеденных фигур Максим: 5     │
│  Съеденных фигур Андрей: 3     │
│                                │
│  🦊 Что вы оба узнали:         │
│  - Максим: отличная вилка на   │
│    15-м ходу!                  │
│  - Андрей: можно было лучше    │
│    защитить короля             │
│                                │
│  [Реванш] [Сохранить партию]   │
└────────────────────────────────┘
```

**4. Family Dashboard:**
```
History:
┌────────────────────────────────┐
│  📚 Наши партии                │
│                                │
│  14 дек — Максим победил 🎉    │
│  13 дек — Андрей победил       │
│  12 дек — Ничья 🤝             │
│                                │
│  Всего партий: 23              │
│  Победы Максима: 12            │
│  Победы Андрея: 9              │
│  Ничьих: 2                     │
│                                │
│  [Новая партия]                │
└────────────────────────────────┘
```

#### AI Комментатор (Claude)

**Prompt structure:**
```
You are a friendly fox chess coach commenting on a family game.

Players:
- Andrey (dad, 35, rating 1400)
- Maxim (son, 7, rating 600)

Current position: [FEN]
Last move: Maxim played Nf3

Task: Write a SHORT comment (1-2 sentences) that:
1. Praises Maxim's move (encourage him!)
2. Hints Andrey what to think about next
3. Uses simple language both can understand

Example: "Максим, отлично вывел коня! 🐴 Андрей, обрати внимание на центр — твой ферзь может помочь."
```

**Frequency:** Комментарий каждые 2-3 хода (не каждый ход, чтобы не надоедать).

### Multiplayer (Online)

**Phase 1: Local Multiplayer** (v3.0)
- Два игрока на одном устройстве
- Передача телефона друг другу
- Без AI (чистый PvP)

**Phase 2: Online Multiplayer** (v3.5+)
- WebRTC peer-to-peer
- Room codes: "Создать комнату" → код ABCD-1234
- Invite link: kidchess.app/play/ABCD-1234

**Tech Stack:**
```javascript
// WebRTC setup
const peer = new SimplePeer({ initiator: isHost });

peer.on('signal', data => {
  // Send offer/answer via Firebase/Supabase
  await sendSignal(roomId, data);
});

peer.on('data', data => {
  // Receive opponent's move
  const move = JSON.parse(data);
  game.chess.move(move);
  game.renderBoard();
});

// Make move
function makeMove(move) {
  peer.send(JSON.stringify(move));
}
```

**Signaling Server:** Supabase Realtime (вместо отдельного WebSocket сервера).

### Leaderboards

**Global Leaderboard:**
```
┌────────────────────────────────┐
│  🏆 Топ игроков                │
│                                │
│  1. 👑 Максим       1250 ⭐    │
│  2. 🥈 Саша         1180 ⭐    │
│  3. 🥉 Катя         1150 ⭐    │
│  ...                           │
│  47. Ты (Андрей)    950 ⭐     │
│                                │
│  [Мои друзья] [Все]            │
└────────────────────────────────┘
```

**Friends Leaderboard:**
- Telegram integration для друзей
- Или просто "Add friend by username"

**Data:**
```sql
CREATE TABLE leaderboard (
  user_id UUID PRIMARY KEY,
  username TEXT,
  rating INTEGER,
  puzzles_solved INTEGER,
  rank INTEGER,
  updated_at TIMESTAMPTZ
);

-- Materialized view с автообновлением каждый час
CREATE MATERIALIZED VIEW top_100 AS
  SELECT * FROM leaderboard
  ORDER BY rating DESC
  LIMIT 100;
```

### Технические требования (v3.0)

| Компонент | Решение | Сложность |
|-----------|---------|-----------|
| **Local Multiplayer** | Game state rotation | Low |
| **Family Profiles** | Supabase table | Low |
| **AI Commentary** | Claude Haiku batch | Medium |
| **Online Multiplayer** | WebRTC + Supabase | High |
| **Leaderboard** | Supabase views | Medium |

---

## v4.0 — Full Vision (Tactile Chess)

**Цель:** Реализовать полную концепцию Tactile Chess.

**Timeline:** 6+ месяцев после v3.0
**Priority:** Visionary

### 3D Board (Three.js)

**Концепция:** Красивая 3D доска с tactile ощущениями.

#### Visual Design

**Материалы:**
- Деревянная доска (wood texture)
- Глянцевые фигуры (PBR materials)
- Мягкие тени (shadow mapping)
- Ambient occlusion

**Camera:**
- Perspective view (45° angle)
- Smooth rotation (OrbitControls)
- Zoom in/out

**Interactions:**
- Hover highlight (outline shader)
- Pick and lift piece (translate Y)
- Drop animation (bounce)
- Particle effects на capture

#### Technical Implementation

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Board3D {
  constructor(container) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.setupLighting();
    this.loadAssets();
    this.setupControls();
  }

  setupLighting() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);

    // Directional light (sun)
    const sun = new THREE.DirectionalLight(0xffffff, 0.8);
    sun.position.set(5, 10, 5);
    sun.castShadow = true;
    this.scene.add(sun);
  }

  async loadAssets() {
    const loader = new GLTFLoader();

    // Load 3D models
    this.pieces = {
      wP: await loader.loadAsync('/models/pawn_white.glb'),
      wN: await loader.loadAsync('/models/knight_white.glb'),
      // ... etc
    };

    // Load board
    this.board = await loader.loadAsync('/models/board.glb');
    this.scene.add(this.board);
  }

  animateMove(from, to, onComplete) {
    const piece = this.getPieceAt(from);
    const fromPos = this.squareToPosition(from);
    const toPos = this.squareToPosition(to);

    // Lift piece
    gsap.to(piece.position, {
      y: 2,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        // Move horizontally
        gsap.to(piece.position, {
          x: toPos.x,
          z: toPos.z,
          duration: 0.5,
          ease: 'power1.inOut',
          onComplete: () => {
            // Drop piece
            gsap.to(piece.position, {
              y: 0,
              duration: 0.3,
              ease: 'bounce.out',
              onComplete
            });
          }
        });
      }
    });
  }
}
```

**Assets:**
- 3D models (Blender) для каждой фигуры
- PBR textures (diffuse, normal, roughness)
- Board model с detalями (wood grain)

**Performance:**
- Target: 60 FPS на mobile
- Optimization: Low-poly models (<1000 triangles per piece)
- LOD: Distant pieces → lower poly count

### Telegram Bot Integration

**Концепция:** Играть в шахматы прямо в Telegram.

#### Bot Commands

```
/start → Главное меню
/play → Новая игра
/puzzle → Случайная задача
/hint → Подсказка
/stats → Моя статистика
```

#### Inline Board

**Telegram не поддерживает интерактивные canvas**, поэтому:

**Решение A: Image Generation**
```javascript
// Generate board PNG on server
async function generateBoardImage(fen) {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');

  // Draw board
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const color = (row + col) % 2 === 0 ? '#f0d9b5' : '#b58863';
      ctx.fillStyle = color;
      ctx.fillRect(col * 50, row * 50, 50, 50);
    }
  }

  // Draw pieces
  const pieces = parseFEN(fen);
  for (const piece of pieces) {
    const img = await loadImage(`/pieces/${piece.type}.png`);
    ctx.drawImage(img, piece.col * 50, piece.row * 50, 50, 50);
  }

  return canvas.toBuffer();
}

// Send to user
bot.sendPhoto(chatId, await generateBoardImage(game.fen), {
  caption: "Твой ход!",
  reply_markup: {
    inline_keyboard: [
      [{ text: "♟ e2", callback_data: "select_e2" }, { text: "♞ g1", callback_data: "select_g1" }],
      [{ text: "Подсказка 🦊", callback_data: "hint" }]
    ]
  }
});
```

**Решение B: Web App Button**
```javascript
bot.sendMessage(chatId, "Давай сыграем!", {
  reply_markup: {
    inline_keyboard: [[
      { text: "🎮 Открыть доску", web_app: { url: "https://kidchess.app/tg" } }
    ]]
  }
});
```

#### Notifications

**Weekly puzzle:**
```javascript
// Cloudflare Worker Cron (every Monday 10am)
cron.schedule('0 10 * * 1', async () => {
  const users = await getTelegramUsers();

  for (const user of users) {
    const puzzle = await getWeeklyPuzzle(user.id);

    await bot.sendMessage(user.telegramId,
      `🦊 Привет! Новая задачка недели:\n\n${puzzle.description}`,
      {
        reply_markup: {
          inline_keyboard: [[
            { text: "Решить", web_app: { url: `https://kidchess.app/puzzle/${puzzle.id}` } }
          ]]
        }
      }
    );
  }
});
```

### Tactile Table (Platform)

**Vision:** KidChess — это первое приложение на платформе **Tactile Table**.

**Future games:**
- **Tactile Checkers** (шашки)
- **Tactile Go** (го)
- **Tactile Card Games** (карты)

**Shared Infrastructure:**
- User accounts (Telegram auth)
- Payment (Stripe subscription covers all games)
- AI Coach (Claude для всех игр)
- Family mode (общий профиль семьи)

**App Structure:**
```
Tactile Table Home:
┌────────────────────────────────┐
│  🎲 Tactile Table              │
│  Настольные игры для семьи     │
│                                │
│  [♟️ Шахматы] [⚫ Шашки]       │
│  [🀄 Маджонг] [🃏 Карты]      │
│                                │
│  Premium: $4.99/мес — все игры │
└────────────────────────────────┘
```

### Технические требования (v4.0)

| Компонент | Решение | Сложность | Стоимость |
|-----------|---------|-----------|-----------|
| **3D Engine** | Three.js | High | $0 |
| **3D Assets** | Blender + designer | High | $500-1000 |
| **Telegram Bot** | Bot API + Workers | Medium | $0 |
| **Image Generation** | Canvas on server | Medium | ~$1/мес |
| **Platform Backend** | Supabase Pro | Medium | $25/мес |

---

## Feature Prioritization Matrix

| Feature | Impact | Effort | Priority | Version |
|---------|--------|--------|----------|---------|
| **Onboarding** | High | Low | 🔥 Critical | v1.1 |
| **More Puzzle Packs** | High | Low | 🔥 Critical | v1.1 |
| **Claymorphism UI** | Medium | Medium | ⭐ High | v1.1 |
| **PWA Manifest** | Medium | Low | ⭐ High | v1.1 |
| **Paywall** | High | Medium | 🔥 Critical | v1.2 |
| **Stripe Integration** | High | Medium | 🔥 Critical | v1.2 |
| **Telegram Auth** | Medium | Medium | ⭐ High | v1.2 |
| **Claude Hints** | High | High | ⭐ High | v2.0 |
| **Glicko-2** | Medium | High | 💡 Medium | v2.0 |
| **Weekly Agent** | Medium | High | 💡 Medium | v2.0 |
| **Family Mode** | High | Medium | 💡 Medium | v3.0 |
| **Local Multiplayer** | Medium | Low | 💡 Medium | v3.0 |
| **Online Multiplayer** | Medium | High | 🔮 Low | v3.5 |
| **Leaderboards** | Low | Medium | 🔮 Low | v3.0 |
| **3D Board** | Low | Very High | 🔮 Low | v4.0 |
| **Telegram Bot** | Medium | High | 🔮 Low | v4.0 |
| **Tactile Table** | High | Very High | 🔮 Vision | v5.0 |

**Legend:**
- 🔥 Critical — Must have
- ⭐ High — Should have
- 💡 Medium — Nice to have
- 🔮 Low — Future vision

---

## UX/UI Evolution

### v1.0 → v1.1: Polish

**Current:**
- Flat UI, basic colors
- Standard shadows
- Simple transitions

**v1.1:**
- Claymorphism (soft shadows, gradients)
- Rounded corners (16px → 24px)
- Smooth animations (300ms ease-in-out)

### v1.2 → v2.0: Personality

**v1.2:**
- Premium badge на паках
- Stripe checkout flow
- Success/cancel screens

**v2.0:**
- AI avatar (анимированный 🦊)
- Speech bubbles с AI hints
- Personalized messages

### v3.0: Social

- Family avatars
- Game history timeline
- Leaderboard cards
- Achievement badges

### v4.0: Immersive

- 3D board с тенями
- Particle effects
- Ambient sounds (wood tapping)
- VR mode (опционально)

---

## Технические требования по версиям

### v1.1

| Требование | Детали |
|------------|--------|
| **Frontend** | Vanilla JS + CSS refactor |
| **Icons** | 192x192, 512x512 PNG |
| **Fonts** | Google Fonts API |
| **Service Worker** | Cache-first strategy |
| **Sounds** | 3 новых MP3 файла |
| **Build** | Cloudflare Pages |

### v1.2

| Требование | Детали |
|------------|--------|
| **Backend** | Cloudflare Workers + Supabase |
| **Auth** | Telegram Login Widget |
| **Payment** | Stripe Checkout |
| **Database** | Supabase (users, subscriptions) |
| **Webhooks** | Stripe → Cloudflare Worker |

### v2.0

| Требование | Детали |
|------------|--------|
| **AI** | Anthropic API (Claude Haiku) |
| **Cache** | Cloudflare KV (hints cache) |
| **Cron** | Cloudflare Workers Cron (weekly agent) |
| **Algorithms** | Glicko-2 implementation |
| **Analytics** | Extended Umami events |

### v3.0

| Требование | Детали |
|------------|--------|
| **Realtime** | Supabase Realtime (multiplayer signaling) |
| **WebRTC** | SimplePeer.js |
| **Storage** | Supabase (game history, family profiles) |
| **AI Commentary** | Claude Haiku batch requests |

### v4.0

| Требование | Детали |
|------------|--------|
| **3D** | Three.js + GLTF models |
| **Telegram** | Bot API + Canvas |
| **Assets** | Blender 3D models |
| **Performance** | WebGL optimization |

---

## Метрики успеха

### v1.1

| Метрика | Target | Measurement |
|---------|--------|-------------|
| **Onboarding completion** | > 80% | Umami funnel |
| **Average session time** | > 5 min | Umami |
| **Return rate (D7)** | > 40% | Cohort analysis |

### v1.2

| Метрика | Target | Measurement |
|---------|--------|-------------|
| **Conversion rate** | > 5% | Stripe events |
| **ARPU** | > $0.50 | Revenue / MAU |
| **Churn rate** | < 10% | Stripe cancellations |
| **LTV** | > $15 | Average revenue per paying user |

### v2.0

| Метрика | Target | Measurement |
|---------|--------|-------------|
| **AI hint usage** | > 60% of users | Umami events |
| **AI hint satisfaction** | > 4/5 | In-app rating |
| **Glicko accuracy** | 70% win prediction | Model validation |

### v3.0

| Метрика | Target | Measurement |
|---------|--------|-------------|
| **Family mode adoption** | > 20% of users | Feature usage |
| **Avg games per family** | > 3/week | Database query |
| **Online match completion** | > 80% | Multiplayer stats |

---

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Low conversion (v1.2)** | High | Medium | Extensive fake door testing, optimize pricing |
| **AI costs too high (v2.0)** | Medium | Low | Aggressive caching, fallback to presets |
| **3D performance issues (v4.0)** | Medium | High | Progressive enhancement, fallback to 2D |
| **Multiplayer complexity (v3.0)** | Medium | Medium | Start with local, delay online |
| **Competition** | High | Medium | Focus on unique value (AI + family + calm) |

---

## Заключение

**KidChess** эволюционирует от простого puzzle app (v1.0) к полноценной семейной платформе для настольных игр (v4.0+).

**Ключевые принципы:**
- **Calm first** — без стресса, без давления
- **AI-powered** — умный помощник, не заменитель
- **Family-focused** — вместе веселее
- **Tactile experience** — ощущение настоящих фигур

**Next steps:**
1. Ship v1.1 (onboarding + polish)
2. Validate monetization with v1.2
3. Scale with AI (v2.0) if economics work
4. Expand to family/social (v3.0+)

**Success metrics to watch:**
- Conversion rate > 5%
- LTV > $15
- D7 retention > 40%
- AI cost < 10% of revenue

---

*Last updated: 2024-12-14*
*Part of Clay Lab ecosystem by Tashkent Technology Partners*

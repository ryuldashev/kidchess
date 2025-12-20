# Game Design Roadmap

> KidChess (Tactile Chess) — Complete Game Design Evolution

---

## Executive Summary

**KidChess** is a chess learning app for children ages 3+ with an AI assistant, built following the **Tactile Chess** philosophy (Clay Lab DNA): stress-free, timer-free, with tactile feel of real chess and smart AI that explains moves in simple language.

**Current Version:** v1.0 LIVE (PWA on Cloudflare Pages)
**Tech Stack:** Vanilla JS + CSS, chess.js, local minimax AI
**Monetization:** Planned for v1.2 (Stripe subscription)
**Target Audience:** Children 3-10 years old + their parents

---

## Current State (v1.0)

### Implemented Features

| Feature | Status | Details |
|---------|--------|---------|
| **Puzzle Packs** | ✅ Done | 3 kids packs (First Steps, Learning to Think, Almost Master) |
| **Kids Mode** | ✅ Done | 3x3 and 4x4 board, symbol hints [♖↑], enemy with configurable move rate |
| **Interactive Board** | ✅ Done | SVG pieces with gradients, tap-to-move, dynamic sizing |
| **AI Hints (🦊)** | ✅ Done | Preset hints in Russian for puzzle mode |
| **Play vs AI** | ✅ Done | Minimax with alpha-beta, 3 difficulty levels, full 8x8 board |
| **Progress Tracking** | ✅ Done | localStorage per pack, separate for kids/puzzle modes |
| **Sound Effects** | ✅ Done | Move, capture, error, success, select, undo, newgame |
| **Themes** | ✅ Done | Green (puzzle), Blue (AI), Red (kids), Kids (kids mode) |
| **Error Reporting** | ✅ Done | Telegram bot for error reports |
| **Analytics** | ✅ Done | Umami self-hosted, detailed move tracking |
| **Confetti Effect** | ✅ Done | Victory animation in kids mode |
| **PRO Modal (Fake Door)** | ✅ Done | To validate willingness to pay $3.99/month |

### Architecture

```
KidChess/
├── Game Modes:
│   ├── Kids Mode      → 3x3/4x4 board, symbol hints, learning
│   ├── Puzzle Mode    → Dynamic board, tactical puzzles
│   └── AI Mode        → Full 8x8 board, play against minimax AI
│
├── Core Systems:
│   ├── Chess Logic    → chess.js (move validation, FEN parsing)
│   ├── Board Rendering → Custom SVG with gradients
│   ├── AI Engine      → Local minimax (depth 1-3 for different levels)
│   ├── Progress       → localStorage (completed puzzles/levels)
│   ├── Analytics      → Umami (events + detailed move data)
│   └── Sound          → SoundManager (Web Audio API)
│
└── UI Components:
    ├── Pack Selection → Grid of cards with progress
    ├── Game Screen   → Header + Board + Hint Block + Controls
    ├── Menu Overlay  → Navigation, restart, reset
    ├── Modals        → Report, Result (AI game), PRO (fake door)
    └── Hint System   → Speech bubbles (kids), text hints (puzzle/AI)
```

### Game Mechanics (Kids Mode)

**Innovation:** Mode for 3-5 year olds with simplified rules.

| Parameter | Description |
|-----------|-------------|
| **Board** | 3x3 (First Steps), 4x4 (other packs) |
| **Goal** | Capture all black pieces |
| **Hints** | Symbol-based: [piece, direction, action] |
| **Enemy** | Configurable move rate (0%, 33%, 66%) |
| **Progression** | 9 levels per pack, gradual difficulty increase |
| **Feedback** | Confetti on win, restart on loss |

**Kids Mode Hint Example:**
```
[♖, ↑]       → "Rook up"
[♘, ↗]       → "Knight jumps right-up"
[♕, ↖, 💥]   → "Queen left-up, capture!"
```

### Game Mechanics (Puzzle Mode)

| Parameter | Description |
|-----------|-------------|
| **Board** | Dynamic (minimum 4x4, auto-center on pieces) |
| **Goal** | Execute solution (sequence of moves) |
| **Hints** | Text from 🦊: "Your queen sees weakness" |
| **Validation** | Exact match with solution UCI |
| **Progression** | Tracked per pack, skip allowed |

### Game Mechanics (AI Mode)

| Parameter | Description |
|-----------|-------------|
| **Board** | Full 8x8 |
| **Goal** | Checkmate the AI |
| **AI Levels** | 1 (depth=1), 2 (depth=2), 3 (depth=3) |
| **Hints** | AI analyzes best move + highlights piece |
| **Results** | Win/Lose/Draw with stats modal |

### Technical Specs

| Metric | Value |
|--------|-------|
| **Build size** | ~150KB (gzipped) |
| **Load time** | < 1s (PWA cache) |
| **Dependencies** | chess.js (40KB) |
| **Browser support** | Modern browsers (ES6+) |
| **Offline** | Full (PWA) |
| **Analytics latency** | < 100ms (self-hosted) |

---

## v1.1 — Polish & Onboarding

**Goal:** Improve UX, add content, prepare for monetization.

**Timeline:** 2-3 weeks
**Priority:** High

### New Features

#### 1. Onboarding Flow

**Problem:** New users don't understand how to play.

**Solution:**

```
First Launch:
┌────────────────────────────────┐
│  🎉 Hi! I'm a fox 🦊           │
│                                │
│  Let's learn chess together!   │
│                                │
│  [Start Tutorial]              │
└────────────────────────────────┘

Step 1: Interactive Tutorial
- Highlight piece
- "Tap the rook"
- "Now tap where you want to move"
- Victory → confetti

Step 2: First Real Level
- Automatically loads Pack 1, Level 1
- Hint bubble active
```

**Storage:** `localStorage.getItem('onboardingCompleted')`

#### 2. More Puzzle Packs

**New Packs (Kids Mode):**

| Pack ID | Name | Board | Levels | Theme |
|---------|------|-------|--------|-------|
| **pack4** | Check & Mate | 4x4 | 9 | Teaching check and checkmate |
| **pack5** | Superheroes | 5x5 | 12 | Complex combinations |

**New Packs (Puzzle Mode):**

| Pack ID | Name | Puzzles | Theme |
|---------|------|---------|-------|
| **tactics1** | Forks & Pins | 20 | Tactical motifs |
| **tactics2** | Open Files | 20 | Positional play |

#### 3. UI Polish (Claymorphism)

**Claymorphism style** (aligned with Clay Lab DNA):

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

**Updates:**
- Soft shadows instead of flat
- More rounded corners
- Subtle animations (ease-in-out)
- Gradient backgrounds for hint block
- Improved typography (possibly custom font)

#### 4. PWA Improvements

```json
// manifest.json
{
  "name": "KidChess — Chess for Kids",
  "short_name": "KidChess",
  "description": "Stress-free chess with AI assistant 🦊",
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

**Service Worker:** Offline-first strategy with cache for assets.

#### 5. Improved Sounds

**New Sounds:**
- `check.mp3` — on check
- `promotion.mp3` — on pawn promotion
- `levelUp.mp3` — on pack completion

**Implementation:** Web Audio API with volume control in menu.

### UX Improvements

| Improvement | Description |
|-------------|-------------|
| **Hint Animation** | Smooth expand/collapse with easing |
| **Victory Celebration** | More confetti, better animation |
| **Loading States** | Skeleton screens instead of blank screens |
| **Gestures** | Swipe left/right for next/prev puzzle |
| **Haptics** | Vibration on mobile (navigator.vibrate) |

### Technical Requirements (v1.1)

| Task | Details |
|------|---------|
| **Icons** | Create 192x192 and 512x512 PNG icons |
| **Service Worker** | Workbox or custom SW |
| **Fonts** | Google Fonts (Fredoka One for headers?) |
| **Sounds** | Add 3 new sounds |
| **CSS Refactor** | Claymorphism variables in :root |

---

## v1.2 — Monetization

**Goal:** Launch paywall and start earning.

**Timeline:** 2 weeks after v1.1
**Priority:** Critical

### Paywall Strategy

**Freemium model:**

| Tier | Access | Price |
|------|--------|-------|
| **Free** | Pack 1 (9 levels) + 3 AI games | $0 |
| **Premium Monthly** | All packs + unlimited AI | $3.99/month |
| **Lifetime** | Everything forever | $29.99 one-time |

**Fake Door results** → Track clicks on "Buy $3.99/month" in PRO modal.

### Paywall Flow

```
User Completes Pack 1:
┌────────────────────────────────┐
│  🎉 Great! You completed       │
│  "First Steps"!                │
│                                │
│  Want more puzzles?            │
│                                │
│  [Unlock all packs]            │
│  $3.99/month or $29.99 forever │
│                                │
│  [Maybe later]                 │
└────────────────────────────────┘

Click "Unlock":
→ Stripe Checkout (redirect)
→ Success → webhook → update Firebase/Supabase
→ Return to app → unlock all packs
```

### Stripe Integration

**Setup:**

1. Stripe Products:
   - `monthly_subscription` — $3.99/month (recurring)
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

**Options:**

**A) Cloudflare Workers + KV (simplest):**
```javascript
// KV Store:
// key: userId → value: { premium: true, expires: null }

async function isPremium(userId) {
  const data = await KV.get(`user:${userId}`, 'json');
  return data?.premium === true;
}
```

**B) Supabase (recommended):**
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

**Choice:** Supabase (free tier + auth + realtime)

### User Auth

**Telegram Login Widget** (aligns with DNA: TG-first)

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

**Alternative (simpler):** Email Magic Link (Supabase Auth)

### Analytics for Monetization

**Key Metrics:**

| Metric | Event | Goal |
|--------|-------|------|
| **Conversion Rate** | `pro_buy_clicked` / `paywall_shown` | > 5% |
| **ARPU** | Revenue / Active Users | > $0.50 |
| **LTV** | Average revenue per paying user | > $15 |
| **Churn** | Monthly cancellations / subscribers | < 10% |

**Umami events:**
```javascript
umami.track('paywall_shown', { trigger: 'pack_completed' });
umami.track('pro_buy_clicked', { tier: 'monthly', price: 3.99 });
umami.track('purchase_completed', { tier: 'monthly', revenue: 3.99 });
```

### Technical Requirements (v1.2)

| Task | Tool | Cost |
|------|------|------|
| **Payment** | Stripe | 2.9% + $0.30 |
| **Backend** | Supabase Free | $0 (up to 50K users) |
| **Auth** | Telegram Widget | $0 |
| **Workers** | Cloudflare Workers | $0 (100K requests/day) |
| **Total** | | ~3% per transaction |

---

## v2.0 — AI Integration (Claude Haiku)

**Goal:** Dynamic AI hints instead of preset hints.

**Timeline:** 1-2 months after v1.2
**Priority:** Medium

### Claude Haiku for Hints

**Problem:** Preset hints are limited, not adaptive.

**Solution:** Claude Haiku generates personalized explanations.

#### Example Interaction

**Current hints (v1.0):**
```
🦊 "Your queen sees weakness at black's king!"
🦊 "Try moving closer to the king"
```

**AI hints (v2.0):**
```
Prompt to Claude:
---
You are a friendly fox chess coach. Explain to a 5-year-old what move to make.

Position (FEN): rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2
Best move: Nf3
Context: Child plays white, this is move 2.

Requirements:
- Maximum 2 sentences
- Simple language
- Metaphor or image (if appropriate)
- Emoji for mood
---

Claude Response:
"🦊 Your knight wants to go for a walk! Put it on f3, and it can help protect the center 🛡️"
```

#### Personalization System

**User Profile:**
```javascript
{
  userId: "uuid",
  age: 5,  // to adjust explanation complexity
  completedPuzzles: 45,
  averageHintsPerPuzzle: 1.2,
  preferredStyle: "metaphorical", // or "direct"
  glickoRating: 800,  // hidden rating
  weakPatterns: ["forks", "pins"]  // weak spots
}
```

**Adaptive Hints:**
```javascript
async function getPersonalizedHint(position, userId) {
  const profile = await getUserProfile(userId);

  const prompt = `
    You are a friendly fox coach for a ${profile.age}-year-old.
    Rating: ${profile.glickoRating} (internal).
    Weak areas: ${profile.weakPatterns.join(', ')}.

    Position: ${position.fen}
    Best move: ${position.bestMove}

    Explain the move in simple terms, focusing on pattern "${detectPattern(position)}".
  `;

  const response = await anthropic.messages.create({
    model: "claude-haiku-3.5",
    max_tokens: 100,
    messages: [{ role: "user", content: prompt }]
  });

  return response.content[0].text;
}
```

### Glicko-2 Rating System

**Goal:** Hidden rating for adaptive difficulty.

**Implementation:**
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
    // Returns puzzle rating suitable for user
    return this.rating + (this.rd * 0.5);
  }
}
```

**Usage:**
```javascript
// When selecting next puzzle
const profile = await getGlickoProfile(userId);
const recommendedDifficulty = profile.getRecommendedDifficulty();

// Filter puzzles by difficulty (±200 rating)
const suitablePuzzles = allPuzzles.filter(p =>
  Math.abs(p.rating - recommendedDifficulty) < 200
);

// Select next unsolved
const nextPuzzle = suitablePuzzles.find(p => !completed.has(p.id));
```

### Weekly "Alive" Agent

**Concept:** Weekly AI agent finds personalized puzzles.

**Flow:**
```
Every Monday 10am:
1. Claude Agent analyzes user profile
2. Generates 3 personalized puzzles (based on weak patterns)
3. Telegram notification: "🦊 Hi! Found interesting puzzles for you!"
4. User opens app → sees "Weekly Puzzles" pack
```

**Prompt for Claude:**
```
You are a Weekly Chess Coach Agent.

User Profile:
- Age: 6
- Rating: 950
- Weak patterns: pins (25% success), discovered attacks (40% success)
- Strong patterns: forks (90% success)

Task: Find 3 chess positions (FEN) to help child improve weak patterns.

Requirements:
- Difficulty: 900-1000 rating
- Focus: pins and discovered attacks
- Variety: different piece types
- Format: JSON with FEN, solution, hint
```

**Response:**
```json
[
  {
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
    "solution": ["Bxf7+"],
    "hint": "Your bishop can make a 'pin' — it will press the piece to the king!",
    "pattern": "pin",
    "difficulty": 950
  },
  ...
]
```

### AI Cost Optimization

**Claude Haiku pricing:** $0.25 / 1M input tokens, $1.25 / 1M output tokens

**Average request:**
- Input: ~200 tokens (prompt + FEN)
- Output: ~50 tokens (hint)
- Cost per hint: ~$0.0001

**Projected usage:**
- 1000 active users
- 5 hints per user per week
- Monthly cost: 1000 × 5 × 4 × $0.0001 = $2/month

**Optimizations:**
1. **Cache hints** for popular positions (Redis)
2. **Batch requests** for weekly agent
3. **Fallback** to preset hints if API unavailable

### Technical Requirements (v2.0)

| Component | Solution | Cost |
|-----------|----------|------|
| **AI API** | Claude Haiku | ~$5/month (1K users) |
| **Cache** | Cloudflare KV | $0.50/month |
| **Cron** | Cloudflare Workers Cron | $0 (included) |
| **Telegram Bot** | Bot API | $0 |
| **Total** | | ~$6/month |

**ROI:** If 10% conversion and ARPU $3.99, revenue = $399/month vs cost $6/month → 66x ROI.

---

## v3.0 — Family Mode & Social

**Goal:** Transform into family app.

**Timeline:** 2-3 months after v2.0
**Priority:** Low (depends on traction)

### Family Mode

**Concept:** Dad vs son with AI commentator.

#### Feature Design

**1. Family Setup:**
```
First Time:
┌────────────────────────────────┐
│  👨‍👦 Family Mode                │
│                                │
│  Who's playing?                │
│  [Dad] vs [Son]                │
│                                │
│  Names:                        │
│  ┌────────────┐ ┌────────────┐ │
│  │ Andrew     │ │ Max        │ │
│  └────────────┘ └────────────┘ │
│                                │
│  [Start Game]                  │
└────────────────────────────────┘
```

**2. Game Flow:**
```
Game Screen:
┌────────────────────────────────┐
│  ← Andrew vs Max               │
├────────────────────────────────┤
│  🎮 Turn: Max (white)           │
│                                │
│  [8x8 Board]                   │
│                                │
│  💬 Fox:                       │
│  "Max, great move!             │
│   Bishop protects center 🛡️"  │
│                                │
│  [Hint for Max]                │
└────────────────────────────────┘

After Move:
💬 Comment for both:
"Andrew can try queen attack. Max, be careful!"
```

**3. Post-Game Analysis:**
```
Game Over Screen:
┌────────────────────────────────┐
│  🎉 Max Wins!                  │
│                                │
│  📊 Stats:                     │
│  Moves: 24                     │
│  Captures Max: 5               │
│  Captures Andrew: 3            │
│                                │
│  🦊 What you both learned:     │
│  - Max: excellent fork on      │
│    move 15!                    │
│  - Andrew: could protect king  │
│    better                      │
│                                │
│  [Rematch] [Save Game]         │
└────────────────────────────────┘
```

**4. Family Dashboard:**
```
History:
┌────────────────────────────────┐
│  📚 Our Games                  │
│                                │
│  Dec 14 — Max won 🎉           │
│  Dec 13 — Andrew won           │
│  Dec 12 — Draw 🤝              │
│                                │
│  Total games: 23               │
│  Max wins: 12                  │
│  Andrew wins: 9                │
│  Draws: 2                      │
│                                │
│  [New Game]                    │
└────────────────────────────────┘
```

#### AI Commentator (Claude)

**Prompt structure:**
```
You are a friendly fox chess coach commenting on a family game.

Players:
- Andrew (dad, 35, rating 1400)
- Max (son, 7, rating 600)

Current position: [FEN]
Last move: Max played Nf3

Task: Write a SHORT comment (1-2 sentences) that:
1. Praises Max's move (encourage him!)
2. Hints Andrew what to think about next
3. Uses simple language both can understand

Example: "Max, great knight development! 🐴 Andrew, watch the center — your queen can help."
```

**Frequency:** Comment every 2-3 moves (not every move to avoid annoyance).

### Multiplayer (Online)

**Phase 1: Local Multiplayer** (v3.0)
- Two players on one device
- Pass phone between players
- No AI (pure PvP)

**Phase 2: Online Multiplayer** (v3.5+)
- WebRTC peer-to-peer
- Room codes: "Create room" → code ABCD-1234
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

**Signaling Server:** Supabase Realtime (instead of separate WebSocket server).

### Leaderboards

**Global Leaderboard:**
```
┌────────────────────────────────┐
│  🏆 Top Players                │
│                                │
│  1. 👑 Max          1250 ⭐    │
│  2. 🥈 Sarah        1180 ⭐    │
│  3. 🥉 Kate         1150 ⭐    │
│  ...                           │
│  47. You (Andrew)   950 ⭐     │
│                                │
│  [My Friends] [All]            │
└────────────────────────────────┘
```

**Friends Leaderboard:**
- Telegram integration for friends
- Or simply "Add friend by username"

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

-- Materialized view auto-updated every hour
CREATE MATERIALIZED VIEW top_100 AS
  SELECT * FROM leaderboard
  ORDER BY rating DESC
  LIMIT 100;
```

### Technical Requirements (v3.0)

| Component | Solution | Complexity |
|-----------|----------|------------|
| **Local Multiplayer** | Game state rotation | Low |
| **Family Profiles** | Supabase table | Low |
| **AI Commentary** | Claude Haiku batch | Medium |
| **Online Multiplayer** | WebRTC + Supabase | High |
| **Leaderboard** | Supabase views | Medium |

---

## v4.0 — Full Vision (Tactile Chess)

**Goal:** Realize full Tactile Chess concept.

**Timeline:** 6+ months after v3.0
**Priority:** Visionary

### 3D Board (Three.js)

**Concept:** Beautiful 3D board with tactile feel.

#### Visual Design

**Materials:**
- Wooden board (wood texture)
- Glossy pieces (PBR materials)
- Soft shadows (shadow mapping)
- Ambient occlusion

**Camera:**
- Perspective view (45° angle)
- Smooth rotation (OrbitControls)
- Zoom in/out

**Interactions:**
- Hover highlight (outline shader)
- Pick and lift piece (translate Y)
- Drop animation (bounce)
- Particle effects on capture

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
- 3D models (Blender) for each piece
- PBR textures (diffuse, normal, roughness)
- Board model with details (wood grain)

**Performance:**
- Target: 60 FPS on mobile
- Optimization: Low-poly models (<1000 triangles per piece)
- LOD: Distant pieces → lower poly count

### Telegram Bot Integration

**Concept:** Play chess directly in Telegram.

#### Bot Commands

```
/start → Main menu
/play → New game
/puzzle → Random puzzle
/hint → Hint
/stats → My stats
```

#### Inline Board

**Telegram doesn't support interactive canvas**, so:

**Solution A: Image Generation**
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
  caption: "Your turn!",
  reply_markup: {
    inline_keyboard: [
      [{ text: "♟ e2", callback_data: "select_e2" }, { text: "♞ g1", callback_data: "select_g1" }],
      [{ text: "Hint 🦊", callback_data: "hint" }]
    ]
  }
});
```

**Solution B: Web App Button**
```javascript
bot.sendMessage(chatId, "Let's play!", {
  reply_markup: {
    inline_keyboard: [[
      { text: "🎮 Open board", web_app: { url: "https://kidchess.app/tg" } }
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
      `🦊 Hi! New puzzle of the week:\n\n${puzzle.description}`,
      {
        reply_markup: {
          inline_keyboard: [[
            { text: "Solve", web_app: { url: `https://kidchess.app/puzzle/${puzzle.id}` } }
          ]]
        }
      }
    );
  }
});
```

### Tactile Table (Platform)

**Vision:** KidChess is the first app on **Tactile Table** platform.

**Future games:**
- **Tactile Checkers**
- **Tactile Go**
- **Tactile Card Games**

**Shared Infrastructure:**
- User accounts (Telegram auth)
- Payment (Stripe subscription covers all games)
- AI Coach (Claude for all games)
- Family mode (shared family profile)

**App Structure:**
```
Tactile Table Home:
┌────────────────────────────────┐
│  🎲 Tactile Table              │
│  Board games for family        │
│                                │
│  [♟️ Chess] [⚫ Checkers]      │
│  [🀄 Mahjong] [🃏 Cards]      │
│                                │
│  Premium: $4.99/mo — all games │
└────────────────────────────────┘
```

### Technical Requirements (v4.0)

| Component | Solution | Complexity | Cost |
|-----------|----------|------------|------|
| **3D Engine** | Three.js | High | $0 |
| **3D Assets** | Blender + designer | High | $500-1000 |
| **Telegram Bot** | Bot API + Workers | Medium | $0 |
| **Image Generation** | Canvas on server | Medium | ~$1/month |
| **Platform Backend** | Supabase Pro | Medium | $25/month |

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
- Premium badge on packs
- Stripe checkout flow
- Success/cancel screens

**v2.0:**
- AI avatar (animated 🦊)
- Speech bubbles with AI hints
- Personalized messages

### v3.0: Social

- Family avatars
- Game history timeline
- Leaderboard cards
- Achievement badges

### v4.0: Immersive

- 3D board with shadows
- Particle effects
- Ambient sounds (wood tapping)
- VR mode (optional)

---

## Technical Requirements by Version

### v1.1

| Requirement | Details |
|------------|---------|
| **Frontend** | Vanilla JS + CSS refactor |
| **Icons** | 192x192, 512x512 PNG |
| **Fonts** | Google Fonts API |
| **Service Worker** | Cache-first strategy |
| **Sounds** | 3 new MP3 files |
| **Build** | Cloudflare Pages |

### v1.2

| Requirement | Details |
|------------|---------|
| **Backend** | Cloudflare Workers + Supabase |
| **Auth** | Telegram Login Widget |
| **Payment** | Stripe Checkout |
| **Database** | Supabase (users, subscriptions) |
| **Webhooks** | Stripe → Cloudflare Worker |

### v2.0

| Requirement | Details |
|------------|---------|
| **AI** | Anthropic API (Claude Haiku) |
| **Cache** | Cloudflare KV (hints cache) |
| **Cron** | Cloudflare Workers Cron (weekly agent) |
| **Algorithms** | Glicko-2 implementation |
| **Analytics** | Extended Umami events |

### v3.0

| Requirement | Details |
|------------|---------|
| **Realtime** | Supabase Realtime (multiplayer signaling) |
| **WebRTC** | SimplePeer.js |
| **Storage** | Supabase (game history, family profiles) |
| **AI Commentary** | Claude Haiku batch requests |

### v4.0

| Requirement | Details |
|------------|---------|
| **3D** | Three.js + GLTF models |
| **Telegram** | Bot API + Canvas |
| **Assets** | Blender 3D models |
| **Performance** | WebGL optimization |

---

## Success Metrics

### v1.1

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Onboarding completion** | > 80% | Umami funnel |
| **Average session time** | > 5 min | Umami |
| **Return rate (D7)** | > 40% | Cohort analysis |

### v1.2

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Conversion rate** | > 5% | Stripe events |
| **ARPU** | > $0.50 | Revenue / MAU |
| **Churn rate** | < 10% | Stripe cancellations |
| **LTV** | > $15 | Average revenue per paying user |

### v2.0

| Metric | Target | Measurement |
|--------|--------|-------------|
| **AI hint usage** | > 60% of users | Umami events |
| **AI hint satisfaction** | > 4/5 | In-app rating |
| **Glicko accuracy** | 70% win prediction | Model validation |

### v3.0

| Metric | Target | Measurement |
|--------|--------|-------------|
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

## Conclusion

**KidChess** evolves from simple puzzle app (v1.0) to full-fledged family platform for board games (v4.0+).

**Key Principles:**
- **Calm first** — stress-free, no pressure
- **AI-powered** — smart assistant, not replacement
- **Family-focused** — better together
- **Tactile experience** — feel of real pieces

**Next Steps:**
1. Ship v1.1 (onboarding + polish)
2. Validate monetization with v1.2
3. Scale with AI (v2.0) if economics work
4. Expand to family/social (v3.0+)

**Success Metrics to Watch:**
- Conversion rate > 5%
- LTV > $15
- D7 retention > 40%
- AI cost < 10% of revenue

---

*Last updated: 2024-12-14*
*Part of Clay Lab ecosystem by Tashkent Technology Partners*

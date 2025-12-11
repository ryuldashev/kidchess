# KidChess Product Roadmap

> Strategic Product Plan & Feature Prioritization
> Version 1.0 | December 11, 2025

---

## Executive Summary

**Current State:** v1.0 LIVE with 35 puzzles, AI hints (preset), play vs AI, progress tracking
**Target:** $3.99/month freemium product with 150+ premium users (break-even) by Month 6
**North Star Metric:** Weekly Active Puzzles Solved (WAPS) - drives engagement, retention, and conversion

**Critical Path to Success:**
1. Ship freemium paywall (2 weeks) → validate WTP
2. Improve retention with onboarding (1 week) → reduce churn
3. Scale content to 150+ puzzles (2-3 weeks) → prevent content exhaustion
4. Build parent dashboard (3 weeks) → justify subscription

---

## 1. Feature Prioritization Matrix

### P0 Features (CRITICAL - Ship in v1.1-v1.2)

| Feature | Impact | Effort | Priority | Rationale |
|---------|--------|--------|----------|-----------|
| **Freemium Paywall** | 10 | 3 | **P0** | Monetization = survival. 5-8% conversion at $3.99/mo |
| **Onboarding Tutorial** | 9 | 2 | **P0** | D1 retention <40% likely due to confusion. Tutorial = +20% completion |
| **150+ New Puzzles** | 8 | 4 | **P0** | 35 puzzles = 2-3 sessions. Need 4-6 weeks content to hit paywall |
| **Visual Hint Arrows** | 7 | 3 | **P0** | Text hints poor for 3-5 yr olds. Arrows = -30% hint usage, +15% completion |

### P1 Features (HIGH - Ship in v1.3)

| Feature | Impact | Effort | Priority | Rationale |
|---------|--------|--------|----------|-----------|
| **Progress Dashboard (Parents)** | 9 | 5 | **P1** | Parents pay, not kids. Dashboard justifies $3.99/mo subscription |
| **Star Rating System** | 8 | 2 | **P1** | Gamification drives engagement. 3/2/1 stars based on hints used |
| **Daily Challenges** | 7 | 3 | **P1** | D7 retention booster. Daily streak = +30% D7 retention |
| **Voice Guidance** | 6 | 7 | **P1** | Differentiator for 3-5 age group. TTS API cheap ($0.001/request) |

### P2 Features (MEDIUM - Ship in v2.0)

| Feature | Impact | Effort | Priority | Rationale |
|---------|--------|--------|----------|-----------|
| **AI Dynamic Hints (Haiku)** | 10 | 6 | **P2** | 12-month moat vs ChessKid. $0.05/mo per user cost acceptable |
| **Push Notifications** | 7 | 4 | **P2** | D2-D7 retention boost. Needs PWA manifest update |
| **Weekly Email Reports** | 6 | 5 | **P2** | Parent engagement. "Misha solved 12 puzzles this week!" |
| **Russian Full Localization** | 8 | 4 | **P2** | CIS market focus. Currently 80% localized, need 100% |

### P3 Features (LOW - Ship in v2.5+)

| Feature | Impact | Effort | Priority | Rationale |
|---------|--------|--------|----------|-----------|
| **Parent-Child Co-Play Mode** | 9 | 8 | **P3** | Unique differentiator but complex. Save for PMF validation |
| **Telegram Bot Integration** | 7 | 6 | **P3** | Distribution channel. Wait until 500+ users |
| **Affiliate/Coach Dashboard** | 8 | 9 | **P3** | Growth channel (30% commission). Post-break-even |

---

## 2. Version Roadmap

### v1.1 Quick Wins (1-2 weeks) | RETENTION FOCUS

**Goal:** Fix D1 retention (target: 40%+ from current ~30%)

**Features:**
- [ ] Onboarding tutorial with fox mascot (3 screens, auto-play first puzzle)
- [ ] "Start Here" badge on "Mat in 1" pack
- [ ] Session analytics (session_start, session_end, puzzles/session)
- [ ] In-app quick feedback (emoji after 5th puzzle)
- [ ] Fix: Hint-block UX (make fox bounce, auto-hint after 2 errors)

**Why:** User research shows confusion at pack selection. A/B Test 3 showed 25% conversion lift with recommended pack highlight.

**Metrics to Track:**
- D1 Retention: >40%
- First puzzle completion: >90%
- Avg puzzles/session: >5

**Deployment:** Cloudflare Pages (instant)

---

### v1.2 Monetization (2-3 weeks) | PAYWALL LAUNCH

**Goal:** Validate willingness to pay, break-even at 144 premium users

**Features:**
- [ ] **Freemium Paywall:**
  - Free tier: 5 puzzles/day + "Mat in 1" pack fully free
  - Premium: $3.99/month (all packs, unlimited puzzles, no ads placeholder)
  - Trial: 7 days free trial on first premium upgrade
- [ ] Stripe integration (payment flow)
- [ ] Upgrade modal (triggered after 5th puzzle of day)
- [ ] Paywall analytics (conversion tracking)
- [ ] Pricing survey (in-app after 10 puzzles: "Would you pay for more?")

**Free Tier Limits (MVP Strategy):**
```
FREE:
- "Mat in 1" pack (20 puzzles) - FULLY FREE
- Other packs: 5 puzzles/day limit
- Preset AI hints
- Play vs AI (1 game/day)

PREMIUM ($3.99/mo):
- All packs unlocked (150+ puzzles)
- Unlimited puzzles/day
- Priority hint access
- Unlimited AI games
- Star ratings & achievements
- Weekly progress reports (future)
```

**Upgrade Triggers:**
1. 5th puzzle of day (soft paywall modal)
2. Click on locked pack
3. 3rd hint in single puzzle (soft prompt)

**Why:** Market analysis shows 5-8% freemium conversion in EdTech. $3.99/mo undercuts ChessKid ($4.17/mo) and covers costs ($0.06/user/mo).

**Metrics to Track:**
- Free-to-paid conversion: >5%
- Trial-to-paid: >40%
- Churn rate: <10%/month
- MRR growth

**Risk Mitigation:**
- A/B test free limits (15 vs 10 vs 5 puzzles/day)
- Offer annual plan $39.99 (17% discount)
- Lifetime option $49.99 (test with first 50 users)

---

### v1.3 Engagement & Retention (3-4 weeks) | PARENT VALUE

**Goal:** Prove value to parents (decision-makers), increase D30 retention to >15%

**Features:**
- [ ] **Parent Progress Dashboard:**
  - Total puzzles solved
  - Accuracy rate (first attempt success)
  - Time spent this week
  - Skill progression chart
  - Puzzle difficulty heat map
- [ ] **Star Rating System:**
  - 3 stars: solved without hints
  - 2 stars: 1-2 hints
  - 1 star: 3+ hints or skipped
  - Star collection & badges
- [ ] **Daily Challenge:**
  - 1 featured puzzle per day
  - Bonus stars for daily streak
  - Push notification: "New puzzle ready!"
- [ ] **Visual Hint Arrows:**
  - Replace text hints with animated arrows
  - Point from piece to target square
  - Pulse animation
- [ ] **150+ New Puzzles:**
  - Expand "Mat in 1": 20 → 50 puzzles
  - Expand "Mat in 2": 5 → 30 puzzles
  - Expand "Tactics": 5 → 40 puzzles
  - Expand "Classics": 5 → 30 puzzles
  - Total: 35 → 150 puzzles

**Content Creation Strategy:**
- Source from Lichess puzzle database (CC0 license)
- Manual curation for age-appropriateness
- Generate AI hints using Claude Haiku (batch process, $0.50 total)
- Playtest with beta testers (recruit 10 parents)

**Why:** Parents pay bills. Dashboard shows value. Star system gamifies for kids. 150 puzzles = 4-6 weeks of daily play before paywall.

**Metrics to Track:**
- D7 retention: >25%
- D30 retention: >15%
- Parent dashboard views/week
- Daily challenge participation: >30%
- Avg stars per puzzle: >2.0

---

### v2.0 Differentiation (6-8 weeks) | AI-POWERED MOAT

**Goal:** Build defensible moat vs ChessKid/Duolingo Chess

**Features:**
- [ ] **AI Dynamic Hints (Claude Haiku):**
  - Real-time hint generation based on position
  - Metaphorical explanations: "Knight jumps like a rabbit!"
  - Adaptive to child's language level
  - Context-aware: "You tried that before, try moving the castle!"
- [ ] **Adaptive Difficulty (Glicko-2):**
  - Track puzzle rating and child rating
  - Recommend puzzles ±100 ELO
  - Auto-adjust AI opponent strength
- [ ] **Voice Guidance (TTS):**
  - Read hints aloud for pre-readers (3-5 yr olds)
  - Toggle on/off
  - Web Speech API (free) or ElevenLabs ($0.30/1k chars)
- [ ] **Russian Full Localization:**
  - Translate all UI strings
  - Russian hint generation (Claude Haiku multilingual)
  - Cyrillic support in fonts
- [ ] **Telegram Bot:**
  - Daily puzzle delivery
  - Progress notifications to parent
  - Login via Telegram (social auth)
- [ ] **Weekly AI Coach:**
  - "Your child struggled with forks this week, here's a practice pack"
  - Personalized recommendations
  - Email digest to parent

**AI Cost Analysis:**
- Haiku API: ~$0.25/1M tokens
- Avg hint: ~200 tokens (input) + 100 tokens (output) = 300 tokens
- 20 hints/week = 6,000 tokens/month = $0.0018/month/user
- TTS: ~500 chars/hint * 20 = 10k chars/month = $0.003/month
- **Total AI cost: ~$0.005/user/month** (negligible vs $3.99 revenue)

**Why:** This is the 12-month moat. ChessKid has no AI personalization. Duolingo Chess is mobile-only and 8+. We own 3-7 age group with AI tutoring.

**Metrics to Track:**
- AI hint quality score (parent survey)
- Hint effectiveness (puzzle completion after hint)
- Voice usage rate
- Russian user growth
- Telegram bot MAU

**Competitive Differentiation Table:**

| Feature | KidChess v2.0 | ChessKid | Duolingo Chess | Magnus Trainer |
|---------|---------------|----------|----------------|----------------|
| Age Focus | 3-8 | 4-12 | 8+ | 12+ |
| AI Hints | ✅ Dynamic | ❌ Static | ❌ None | ❌ Video only |
| Voice Guide | ✅ TTS | ❌ | ❌ | ❌ |
| Price | $3.99/mo | $4.17/mo | FREE | $6.25/mo |
| Russian | ✅ Full | ❌ Partial | ❌ | ❌ |
| Telegram | ✅ | ❌ | ❌ | ❌ |
| Parent Dashboard | ✅ | ✅ | ❌ | ✅ |

**Unique Value Proposition:**
> "The only chess app that teaches your 3-year-old like a patient AI tutor, not a robot."

---

## 3. North Star Metric & Supporting Metrics

### North Star Metric: **Weekly Active Puzzles Solved (WAPS)**

**Why WAPS?**
- Captures engagement (active users)
- Measures retention (weekly)
- Correlates with conversion (more puzzles = more value seen)
- Actionable (we control puzzle quality and quantity)

**Target:**
- Month 1: 500 WAPS (100 users * 5 puzzles/week)
- Month 3: 2,000 WAPS (300 users * 6.7 puzzles/week)
- Month 6: 6,000 WAPS (800 users * 7.5 puzzles/week)

### Supporting Metrics (AARRR Framework)

**Acquisition:**
- Weekly new users
- CAC by channel
- Organic vs paid split

**Activation:**
- D1 retention: >40%
- First puzzle completion: >90%
- Onboarding completion: >80%

**Retention:**
- D7 retention: >25%
- D30 retention: >15%
- Weekly puzzle streak: >3 days

**Revenue:**
- Free-to-paid conversion: >5%
- MRR growth rate: >20%/month
- ARPU: >$0.20 (blended free+paid)
- LTV/CAC ratio: >3:1

**Referral:**
- Viral coefficient: >0.3
- Share rate: >10%
- Referred users: >20% of new users

### Dashboard (Umami + Google Sheets)

**Weekly Review Metrics:**
1. WAPS (North Star)
2. New users
3. D1/D7 retention
4. Free-to-paid conversion
5. MRR
6. Churn rate
7. NPS score

**Monthly Review Metrics:**
1. MAU (Monthly Active Users)
2. ARPU (Average Revenue Per User)
3. CAC by channel
4. LTV (Lifetime Value projection)
5. Feature adoption rates
6. Customer satisfaction (CSAT)

---

## 4. MVP Paywall Strategy

### Free Tier Design

**Philosophy:** "Generous free tier that proves value, premium for serious learners"

```
FREE TIER LIMITS:
├── Content Access
│   ├── "Mat in 1" pack: FULLY FREE (20 puzzles)
│   ├── Other packs: 5 puzzles/day (resets midnight)
│   └── Play vs AI: 1 game/day
├── Features
│   ├── Preset hints (not AI dynamic)
│   ├── Basic progress tracking
│   └── No star ratings
└── Upgrade Prompts
    ├── Soft modal after 5th puzzle
    ├── "Unlock all packs" CTA
    └── 7-day trial offer
```

**Premium Tier:**
```
PREMIUM ($3.99/mo or $39.99/yr):
├── Content
│   ├── All packs unlocked (150+ puzzles)
│   ├── Unlimited puzzles/day
│   └── Unlimited AI games
├── Features
│   ├── AI dynamic hints (v2.0)
│   ├── Star ratings & achievements
│   ├── Parent dashboard
│   ├── Daily challenges
│   ├── Voice guidance (v2.0)
│   └── Ad-free experience
└── Future Benefits
    ├── Weekly AI coach
    ├── Personalized practice packs
    └── Priority support
```

### Trial Flow (7-day Free Trial)

**User Journey:**
1. User hits paywall (5 puzzles/day limit)
2. Modal: "Want to solve more puzzles today?"
3. CTA: "Start 7-Day Free Trial" (no credit card required)
4. Trial activated → All premium features unlocked
5. Day 5: Email reminder "2 days left in trial"
6. Day 7: Payment prompt OR revert to free tier

**Conversion Optimization:**
- No credit card upfront → Lower friction
- 7 days → Enough to form habit (3-5 sessions)
- Email reminders → Prevent silent churn
- Downgrade gracefully → Retain free users

### A/B Test Plan (Week 1-2 after launch)

**Test 1: Free Puzzle Limit**
- Variant A: 20 puzzles/day (control)
- Variant B: 15 puzzles/day
- Variant C: 10 puzzles/day
- Variant D: 5 puzzles/day
- Metric: Conversion rate, churn rate
- Hypothesis: Lower limit = higher conversion but higher churn

**Test 2: Trial Length**
- Variant A: 7-day trial
- Variant B: 14-day trial
- Metric: Trial-to-paid conversion
- Hypothesis: Longer trial = higher conversion (more habit formation)

**Test 3: Pricing**
- Variant A: $3.99/mo
- Variant B: $4.99/mo
- Metric: Conversion, revenue
- Hypothesis: $4.99 still converts at >4% but +25% revenue

### Payment Integration (Stripe)

**Implementation:**
1. Stripe Elements for checkout
2. Webhook handling (subscription.created, subscription.canceled)
3. localStorage flag: `isPremium: true/false`
4. Server-side verification (Cloudflare Worker + KV store)

**Pricing Options:**
- Monthly: $3.99
- Annual: $39.99 (17% discount, 2 months free)
- Lifetime: $49.99 (offer to first 100 users, create urgency)

**Payment Methods:**
- Credit card (Stripe)
- Apple Pay / Google Pay (mobile)
- Future: Russian payment methods (YooMoney, Qiwi) for CIS market

---

## 5. Competitive Differentiation Strategy

### What We Can Build That Competitors Can't Copy Quickly

**1. AI Personalization for Toddlers (3-5 age group)**

**Moat Duration:** 12-18 months

**Why Hard to Copy:**
- ChessKid: Enterprise SaaS, slow to ship AI (legal concerns)
- Duolingo: Mobile-only, 8+ focus, no chess expertise
- Magnus: Celebrity brand, premium positioning ($6.25/mo), 12+ demo

**Our Advantage:**
- Small team = fast iteration
- Age 3-7 niche = no competition
- AI cost negligible at scale ($0.005/user/mo)
- Russian market expertise (Tashkent base)

**Example AI Hints (Metaphorical):**
- Standard: "Move Qh5 to attack f7"
- KidChess AI: "Your queen is a brave knight! She can jump to h5 and scare the little pawn at f7!"

**2. Telegram-First Distribution (CIS Market)**

**Moat Duration:** 6-12 months

**Why Hard to Copy:**
- Telegram dominant in CIS, ignored by US competitors
- Requires Russian localization + payment integration
- Cultural understanding (Russian chess tradition)

**Our Advantage:**
- Tashkent base = native Russian speakers
- Telegram bot = viral loop (parents share in groups)
- 15 Telegram channels identified (18K-89K subscribers)

**Launch Plan:**
1. Month 2: Basic Telegram bot (daily puzzle)
2. Month 3: Telegram login (social auth)
3. Month 4: Telegram payment (Stars API)
4. Month 6: Affiliate program for chess coaches (30% commission)

**3. Parent Dashboard (Value Proof)**

**Moat Duration:** 3-6 months

**Why Hard to Copy:**
- ChessKid has dashboard but complex (for 4-12 age group)
- Duolingo has no parent dashboard (kid-only)

**Our Advantage:**
- Simple, focused metrics for 3-7 age group
- "Share progress" feature (WhatsApp, Telegram)
- Weekly email digest to parent
- Real-time notifications: "Misha just solved first puzzle!"

**Dashboard MVP (v1.3):**
```
PARENT VIEW:
├── This Week
│   ├── 12 puzzles solved
│   ├── 85% accuracy
│   ├── 2h 15m total time
│   └── 3-day streak 🔥
├── Progress Chart
│   ├── Week-over-week growth
│   └── Skill level progression
├── Share Button
│   └── "Misha solved 12 chess puzzles this week! 🎉"
└── Achievements
    ├── "First Checkmate" badge
    └── "Week Warrior" (7-day streak)
```

**4. Voice Guidance (Pre-Readers)**

**Moat Duration:** 6-9 months

**Why Unique:**
- No competitor targets 3-5 pre-readers
- Requires TTS integration + kid-friendly language
- UI complexity (toggle on/off, playback controls)

**Our Advantage:**
- Web Speech API (free, browser-native)
- Fallback: ElevenLabs ($0.30/1k chars)
- Simple toggle: "Read hints aloud"

**Example Voice Flow:**
1. Kid taps fox for hint
2. Fox bounces, speaks: "Try moving the horsey to the star!"
3. Arrow appears pointing to correct square
4. Repeat button for replay

---

### Features Competitors CAN Copy (Don't Rely On)

- Basic puzzle packs → Commoditized
- Star ratings → Standard gamification
- Progress tracking → Table stakes
- Themes → Easy to copy

**Defense:** Speed. Ship AI personalization before they notice us.

---

## 6. Next 30 Days Action Plan

### Week 1 (Dec 12-18): Foundation & Quick Wins

**Day 1-2: Analytics Setup**
- [ ] Add session_start/end events to game.js
- [ ] Create Umami funnels (pack selection → puzzle complete)
- [ ] Set up Google Sheets dashboard (daily metrics)
- [ ] Deploy analytics updates

**Day 3-4: Onboarding Tutorial**
- [ ] Design 3-screen tutorial (Figma mockup)
- [ ] Implement fox animation (CSS keyframes)
- [ ] Auto-play first puzzle after tutorial
- [ ] A/B test setup (50% see tutorial)

**Day 5-7: Content Expansion (Phase 1)**
- [ ] Source 30 new "Mat in 1" puzzles from Lichess
- [ ] Manual curation for age-appropriateness
- [ ] Write AI hints for each (batch Claude Haiku)
- [ ] Add to puzzles.js

**Deliverable:** v1.1 deployed, D1 retention tracking started

---

### Week 2 (Dec 19-25): Monetization Prep

**Day 8-9: Stripe Integration**
- [ ] Create Stripe account
- [ ] Set up products (monthly, annual, lifetime)
- [ ] Integrate Stripe Elements (checkout.html)
- [ ] Test payment flow (sandbox)

**Day 10-11: Paywall UI**
- [ ] Design paywall modal (soft sell)
- [ ] Implement free tier limits (localStorage check)
- [ ] "Upgrade to Premium" CTA in pack selection
- [ ] Trial activation flow (7-day free)

**Day 12-14: Paywall Logic**
- [ ] Track puzzles solved today (localStorage)
- [ ] Show paywall modal after 5th puzzle
- [ ] Lock premium packs for free users
- [ ] Test edge cases (midnight reset, trial expiry)

**Deliverable:** v1.2 ready for soft launch (beta testers)

---

### Week 3 (Dec 26-Jan 1): Soft Launch & Feedback

**Day 15-16: Beta Testing**
- [ ] Recruit 20 beta testers (Reddit, Telegram)
- [ ] Send survey (pricing, features, UX)
- [ ] Monitor payment conversions
- [ ] Fix critical bugs

**Day 17-18: Content Expansion (Phase 2)**
- [ ] Add 40 more puzzles (total 105)
- [ ] Expand "Mat in 2" pack (5 → 15 puzzles)
- [ ] Add visual hint arrows (CSS animations)
- [ ] Test on mobile (iOS Safari, Android Chrome)

**Day 19-21: Iteration**
- [ ] Analyze beta feedback
- [ ] Adjust free tier limits (if needed)
- [ ] Polish paywall messaging
- [ ] Prepare launch announcement

**Deliverable:** v1.2 polished, ready for public launch

---

### Week 4 (Jan 2-8): Public Launch & Growth

**Day 22: Launch**
- [ ] Deploy v1.2 to production
- [ ] Announce on Product Hunt
- [ ] Post to r/chess, r/parenting, r/homeschool
- [ ] Share in 15 Telegram channels (paid posts)

**Day 23-25: Parent Dashboard (Start v1.3)**
- [ ] Design dashboard UI (mobile-first)
- [ ] Implement progress calculations
- [ ] Add weekly stats (puzzles, accuracy, time)
- [ ] "Share progress" button (Telegram, WhatsApp)

**Day 26-28: Star Rating System**
- [ ] Track hints used per puzzle
- [ ] Award stars (3/2/1 based on hints)
- [ ] Show star collection in UI
- [ ] Add achievements (badges)

**Day 29-30: Daily Challenge**
- [ ] Select daily puzzle algorithm (random from user's level)
- [ ] Push notification setup (PWA manifest)
- [ ] Daily streak tracking (localStorage)
- [ ] Bonus stars for streak

**Deliverable:** v1.3 in progress, first revenue data available

---

## 7. Success Criteria & Go/No-Go Decisions

### Month 1 (Post-Launch) Targets

| Metric | Fail | OK | Great | Action if Fail |
|--------|------|-----|-------|----------------|
| Total Users | <150 | 150-300 | >300 | Increase marketing budget |
| D1 Retention | <30% | 30-40% | >40% | Improve onboarding |
| D7 Retention | <15% | 15-25% | >25% | Add daily challenges |
| Free-to-Paid | <3% | 5-6% | >7% | Test lower price ($2.99) |
| MRR | <$100 | $100-200 | >$200 | Double down on growth |
| NPS Score | <20 | 20-40 | >40 | Gather qualitative feedback |

### Month 3 Targets

| Metric | Fail | OK | Great |
|--------|------|-----|-------|
| Total Users | <500 | 1,000-2,000 | >2,000 |
| Premium Users | <13 | 25-50 | >50 |
| MRR | <$52 | $100-200 | >$200 |
| D30 Retention | <10% | 12-18% | >18% |

### Month 6 Targets (Break-Even)

| Metric | Goal | Stretch Goal |
|--------|------|--------------|
| Total Users | 3,000 | 5,000 |
| Premium Users | 144 (break-even) | 200+ |
| MRR | $574 | $800+ |
| D30 Retention | 15% | 20% |
| Churn Rate | <10%/mo | <8%/mo |

### Go/No-Go Decision Tree

```
MONTH 1 REVIEW:
├── IF Users >300 AND D7 >20% AND Conversion >5%
│   └── GO: Continue current plan, invest $500 in ads
├── ELSE IF Users >200 AND D7 >15%
│   └── ITERATE: Improve UX, run more A/B tests
├── ELSE IF Users <150 OR D7 <10%
│   └── PIVOT OPTIONS:
│       ├── A) Focus B2B (schools, chess clubs)
│       ├── B) Age pivot (focus 6-8 instead of 3-7)
│       └── C) Family mode (parent-child co-play)
└── ELSE IF Conversion <3%
    └── PRICING PIVOT: Test $2.99/mo or freemium-to-ads

MONTH 3 REVIEW:
├── IF Premium >25 AND MRR >$100
│   └── GO: Build v2.0 (AI features), hire content creator
├── ELSE IF Premium >13
│   └── OPTIMIZE: Focus on conversion (better paywall, email drip)
└── ELSE IF Premium <10
    └── PIVOT: B2B school licenses ($50/classroom/mo)

MONTH 6 REVIEW:
├── IF Premium >144 (break-even)
│   └── SCALE: Invest $2K/mo in ads, hire part-time dev
├── ELSE IF Premium >70 AND trend positive
│   └── EXTEND: Continue lean, optimize until break-even
└── ELSE IF Premium <50
    └── DECISION: Shut down OR pivot to B2B
```

---

## 8. Risk Mitigation

### Risk 1: Low Conversion (<3%)

**Probability:** Medium (30%)
**Impact:** High (no revenue)

**Mitigation:**
- A/B test pricing ($2.99, $3.99, $4.99)
- Test free tier limits (5 vs 10 vs 15 puzzles/day)
- Add lifetime option ($29.99) for low-commitment users
- Parent testimonials on paywall modal
- "Share & unlock" viral mechanic (share = 3 free puzzles)

**Fallback Plan:**
- Ads (Google AdSense) for free tier
- B2B school licenses ($50/classroom/mo)

---

### Risk 2: High Churn (>15%/month)

**Probability:** Medium-High (40%)
**Impact:** High (growth stalls)

**Mitigation:**
- Daily challenges (habit formation)
- Push notifications (re-engagement)
- Weekly email to parents (show value)
- Content expansion (prevent exhaustion)
- Winback campaigns (email: "We miss you!")

**Early Warning Signs:**
- D7 retention <20%
- Avg session length <8 min
- Puzzles/session <5

---

### Risk 3: Duolingo Chess Expansion (Age 3-7)

**Probability:** Low-Medium (20%)
**Impact:** Very High (direct competitor)

**Mitigation:**
- Move fast (ship v2.0 AI features in 2 months)
- Build CIS market moat (Telegram, Russian localization)
- Parent dashboard (B2B angle they can't match)
- Affiliate program (coach network lock-in)

**Monitoring:**
- Track Duolingo Chess app store keywords
- Set Google Alert for "duolingo chess toddler"

---

### Risk 4: Content Exhaustion (Users finish all puzzles)

**Probability:** High (60%) if not addressed
**Impact:** Medium (retention drop)

**Mitigation:**
- Ship 150 puzzles by Week 4 (4-6 weeks content)
- Infinite AI games (always new content)
- User-generated puzzles (future, v3.0)
- Weekly new puzzle drops (FOMO)

**Math:**
- Active user solves 7 puzzles/week
- 150 puzzles = 21 weeks content
- Target: Add 10 new puzzles/week (stay ahead)

---

### Risk 5: AI Cost Blowup

**Probability:** Low (10%)
**Impact:** Medium (margins shrink)

**Mitigation:**
- Start with preset hints (v1.0-v1.3)
- Claude Haiku only (cheapest tier)
- Cache common hints (reduce API calls)
- Rate limit: 20 hints/user/day

**Cost Ceiling:**
- If AI cost >$0.50/user/mo → Revert to preset hints
- Breakpoint: 500 premium users * $0.50 = $250/mo cost

---

## 9. Marketing & Growth Strategy (First 30 Days)

### Channel Focus (Based on Market Analysis)

**Week 1: Organic (Zero Budget)**
1. Product Hunt launch (Day 22)
2. Reddit posts (r/chess, r/parenting, r/homeschool)
3. Telegram groups (join 20 parent groups, soft promo)
4. Personal network (Facebook, WhatsApp status)

**Target:** 100-150 users

---

**Week 2-3: Micro-Influencers ($200 budget)**
1. Instagram mom influencers (10K-30K followers)
   - @russian_moms_usa (Russian diaspora)
   - @montessori_at_home (educational toys)
   - Price: $50-100/post
2. Telegram channels (paid posts)
   - "Развивающие приложения" (18K) - $100
   - "Клуб мамочек" (30K) - $150

**Target:** +100-200 users

---

**Week 4: Content Marketing ($100 budget)**
1. Blog post: "Why 3-Year-Olds Should Learn Chess (Science-Backed)"
   - Post to Medium
   - Share on Hacker News, Reddit
2. YouTube video: "Chess App for Toddlers Demo"
   - Screen recording + voiceover
   - Post to r/chess, parent groups

**Target:** +50-100 users (SEO long-tail)

---

**Total Budget:** $300
**Expected CAC:** $1-2/user (150 users = $300)
**Break-Even CAC:** $15.96 (LTV @ 4 months avg subscription)

---

## 10. Long-Term Vision (v3.0-v4.0)

### v3.0 Social & Multiplayer (Month 9-12)

**Features:**
- Family mode (parent vs child, side-by-side)
- Multiplayer puzzles (solve together)
- Leaderboards (weekly top solvers)
- Chess club integration (B2B angle)

**Why:** Social features = viral growth + retention

---

### v4.0 Full Vision (Month 12-18)

**Features:**
- 3D board (Three.js, optional toggle)
- Weekly "alive" AI agent (personalized email)
- Adaptive curriculum (AI-generated practice packs)
- Voice chat with AI tutor (real-time coaching)
- Tactile Table expansion (checkers, go, other games)

**Why:** Transform from "chess app" to "AI learning platform for kids"

---

## Appendix: Detailed Feature Specs

### A. Onboarding Tutorial (v1.1)

**Flow:**
```
SCREEN 1:
├── Fox appears: "Привет! Я лисёнок 🦊"
├── Button: "Далее"
└── Duration: 3 sec

SCREEN 2:
├── Fox: "Я помогу учить шахматы!"
├── Fox: "Нажми на фигуру, чтобы походить"
├── Button: "Понятно!"
└── Duration: 5 sec

SCREEN 3:
├── Fox: "Если застрял, нажми на меня для подсказки!"
├── Fox bounces (animation)
├── Button: "Вперёд к задачам!"
└── Duration: 4 sec

AUTO-PLAY:
└── After tutorial → Auto-select "Mat in 1" pack → Load first puzzle
```

**A/B Test:**
- Variant A: No tutorial (control)
- Variant B: 3-screen tutorial (test)
- Metric: First puzzle completion rate

---

### B. Freemium Paywall Modal (v1.2)

**Trigger:** After 5th puzzle of day

**Design:**
```
┌─────────────────────────────────────┐
│  🎉 Отличная работа!                │
│                                     │
│  Ты решил 5 задач сегодня!          │
│  Хочешь решать больше?              │
│                                     │
│  [Попробовать Premium бесплатно]    │  ← Primary CTA
│  7 дней бесплатно, потом $3.99/мес │
│                                     │
│  Или вернись завтра 😊              │  ← Secondary CTA (close)
└─────────────────────────────────────┘
```

**Copy Variants (A/B Test):**
1. "Попробовать Premium" (neutral)
2. "Разблокировать всё!" (urgency)
3. "Продолжить обучение" (educational)

---

### C. Parent Dashboard (v1.3)

**URL:** `/parent-dashboard` (password-protected, set by parent)

**Sections:**
1. **This Week Summary**
   - Puzzles solved: 12
   - Accuracy: 85% (first attempt)
   - Time spent: 2h 15m
   - Longest streak: 3 days 🔥

2. **Progress Chart**
   - Line graph: puzzles/week (last 4 weeks)
   - Bar chart: accuracy by pack

3. **Skill Breakdown**
   - Mat in 1: ⭐⭐⭐ (Excellent)
   - Mat in 2: ⭐⭐ (Good)
   - Tactics: ⭐ (Learning)

4. **Share Button**
   - Generate image: "Misha solved 12 chess puzzles this week! 🎉"
   - Share to: Telegram, WhatsApp, Facebook

---

### D. AI Dynamic Hints (v2.0)

**API Flow:**
```javascript
async function getAIHint(fen, targetMove, childAge) {
  const prompt = `You are a patient chess tutor for a ${childAge}-year-old child.
  Position: ${fen}
  Correct move: ${targetMove}

  Explain the move using:
  - Simple language
  - Fun metaphors (knight = horsey, rook = castle)
  - Encouragement

  Keep it under 20 words.`;

  const response = await claudeHaiku.complete(prompt);
  return response.text;
}
```

**Example Outputs:**
- Standard: "Move the queen to h5"
- KidChess AI: "The queen can jump like a superhero to h5 and surprise the king! 🦸"

**Cost:**
- Input: ~150 tokens
- Output: ~50 tokens
- Cost per hint: $0.00005 (negligible)

---

## Conclusion

**KidChess has a clear path to product-market fit:**

1. **Immediate (30 days):** Ship freemium paywall, validate WTP
2. **Short-term (90 days):** Build parent value (dashboard), scale content
3. **Mid-term (6 months):** Reach break-even (144 premium users)
4. **Long-term (12 months):** Build AI moat, own 3-7 age group globally

**Critical Success Factors:**
- Speed > perfection (ship v1.2 in 2 weeks)
- Focus on 3-7 age group (avoid feature creep)
- Parent = customer, child = user (solve for both)
- CIS market = white space (Telegram-first)

**Next Immediate Actions:**
1. Implement analytics (Week 1, Day 1-2)
2. Build onboarding tutorial (Week 1, Day 3-4)
3. Set up Stripe (Week 2, Day 8-9)
4. Launch paywall beta (Week 3, Day 15-16)
5. Public launch (Week 4, Day 22)

**Go/No-Go Decision Point:** Month 1 review (Jan 22, 2026)
- IF conversion >5% AND D7 >20% → Full speed ahead
- ELSE → Iterate or pivot

---

*Roadmap compiled December 11, 2025*
*Product Manager: Claude (AI)*
*Next review: January 22, 2026*

# KidChess User Research Plan

> Plan for first 100 users and willingness to pay validation
> Version 1.0 | December 11, 2025

---

## Executive Summary

**Goals:**
1. Measure user engagement and retention patterns
2. Identify key drop-off points in user journey
3. Validate willingness to pay ($3.99/month)
4. Understand parent needs and pain points

**Timeline:** 4 weeks

---

## 1. Analytics Tracking Plan

### Current State
Umami installed (kidchess-umami.fly.dev), basic events tracked via `Analytics.track()`

### Events to Add

#### Core Journey Events

| Event | Trigger | Priority |
|-------|---------|----------|
| `session_start` | Page load | Critical |
| `session_end` | User leaves | Critical |
| `daily_streak` | Return next day | High |
| `pack_completed` | All puzzles done | Critical |

#### Implementation Code

```javascript
// Add to Game.init()
Game.sessionStart = Date.now();
Analytics.track('session_start', {
    returning: !!localStorage.getItem('kidChessProgress')
});

// Track session end
window.addEventListener('beforeunload', () => {
    Analytics.track('session_end', {
        duration: Math.floor((Date.now() - Game.sessionStart) / 1000),
        puzzlesCompleted: Game.sessionPuzzles || 0
    });
});

// Daily streak tracking
const lastVisit = localStorage.getItem('lastVisitDate');
const today = new Date().toDateString();
if (lastVisit !== today) {
    Analytics.track('daily_streak', { streak: calculateStreak() });
    localStorage.setItem('lastVisitDate', today);
}
```

### Umami Dashboards to Create

1. **Funnel Analysis**
   - view_pack_selection → select_pack → puzzle_completed
   - Target: 100% → 90% → 40%

2. **Retention Cohorts**
   - D1, D3, D7, D14
   - Target: D1 >40%, D7 >20%

3. **Pack Popularity**
   - Which packs selected most
   - Completion rates per pack

---

## 2. Parent Survey (7 Questions)

### When to Show
- After 3 completed puzzles
- Google Forms or in-app modal

### Questions (Russian)

**1. Сколько лет вашему ребёнку?**
- [ ] 3-4 года
- [ ] 5-6 лет
- [ ] 7-8 лет
- [ ] 9+ лет

**2. Какой опыт вашего ребёнка с шахматами?**
- [ ] Первый раз
- [ ] Знает, как ходят фигуры
- [ ] Умеет играть простые партии
- [ ] Занимается регулярно

**3. Что для вас самое важное? (до 3)**
- [ ] Простой интерфейс
- [ ] Объяснения на понятном языке
- [ ] Прогресс виден родителям
- [ ] Никакой рекламы
- [ ] Адаптация сложности
- [ ] Игра без интернета
- [ ] Весело, с наградами
- [ ] Семейный режим

**4. Сколько готовы платить?**
- [ ] Бесплатно (с рекламой)
- [ ] До 200 руб/мес ($2)
- [ ] До 400 руб/мес ($4)
- [ ] До 600 руб/мес ($6)
- [ ] Разовый платёж 3000 руб ($30)

**5. Что понравилось больше всего?**
*(свободный ответ)*

**6. Что нужно улучшить?**
*(свободный ответ)*

**7. Email для beta-тестирования (опционально)**

### Analysis Triggers

- If >50% choose "Разовый платёж" → Focus Lifetime pricing
- If "Семейный режим" in top 3 → Prioritize for v2.0
- If age skews 5-8 → Adjust marketing messaging

---

## 3. User Journey Map

### Stages

```
STAGE 1: DISCOVERY
└─ Landing page / Telegram post
   └─ Emotion: Curious, skeptical

STAGE 2: FIRST IMPRESSION (0-30 sec)
└─ Pack selection screen
   └─ DROP-OFF RISK: HIGH (no guidance)
   └─ Mitigation: Add "Новичкам сюда 👇"

STAGE 3: FIRST PUZZLE (30sec - 2min)
└─ Game screen with board
   └─ DROP-OFF RISK: MEDIUM (confusion)
   └─ Success: "Молодец!" sound

STAGE 4: FLOW STATE (2-10min)
└─ Puzzles 2, 3, 4...
   └─ Emotion: Engaged, proud

STAGE 5: SESSION END (10-20min)
└─ Parent says "enough"
   └─ RETENTION MOMENT #1

STAGE 6: RETURN (Day 2-3)
└─ App icon on device
   └─ DROP-OFF RISK: HIGH (forgot)

STAGE 7: PAYWALL (Future)
└─ "Хотите больше задач?"
   └─ Conversion factors:
      - Child asks "ещё!"
      - Visible progress
      - Trust in quality
```

### Drop-off Points

| Stage | Risk | Why | Mitigation |
|-------|------|-----|------------|
| Pack selection | HIGH | No guidance | "Начни здесь" badge |
| First puzzle | MEDIUM | Too hard | 3-sec tutorial |
| Day 2-3 | HIGH | Forgot | Push notifications |
| Paywall | HIGH | Price resistance | Show value |

---

## 4. A/B Test Hypotheses

### Test 1: Onboarding Flow

**Hypothesis:** 10-sec onboarding увеличит completion первого puzzle на 20%

**Variants:**
- A: Current (straight to pack selection)
- B: Short animation with fox:
  - "Привет! Я лисёнок 🦊"
  - "Я помогу учить шахматы!"
  - [Вперёд!] → auto-select "Мат в 1"

**Metrics:** First puzzle completion, D1 retention
**Duration:** 7 days, 100 users per variant

---

### Test 2: Hint Presentation

**Hypothesis:** Auto-hint after 2 wrong moves увеличит completion на 15%

**Variants:**
- A: Hint only on fox click
- B: Auto-hint after 2 errors + fox bounce animation

**Metrics:** Puzzle completion, hints per puzzle
**Duration:** 7 days

---

### Test 3: Pack Recommendation

**Hypothesis:** Highlight рекомендуемого пака увеличит conversion на 25%

**Variants:**
- A: All packs equal
- B: "Мат в 1 ход" has "Начни здесь! 👶" badge + pulse
- C: Modal on first launch recommending easiest pack

**Metrics:** % selecting "Мат в 1" first
**Duration:** 7 days

---

### Test 4: Paywall Placement (Future)

**Variants:**
- A: Free limit: 20 puzzles
- B: Free limit: 15 puzzles
- C: Free limit: 10 puzzles/day

**Metrics:** Conversion to paid, churn rate
**Duration:** 14 days

---

### Test 5: AI Mode CTA

**Variants:**
- A: "Обычные шахматы — Играть с ИИ"
- B: "Сразись с компьютером! 🤖"
- C: "Партия с ИИ-соперником 🎯"

**Metrics:** AI mode trial rate
**Duration:** 7 days

---

## 5. Feedback Collection

### 5.1 In-App Quick Feedback

After every 5th puzzle:
```
┌─────────────────────────────┐
│   Как тебе эта задача? 🦊   │
│   😊  👍  😐  👎  😢        │
└─────────────────────────────┘
```

### 5.2 Session End Survey

After 10+ minutes:
```
┌──────────────────────────────┐
│  Как прошла игра сегодня?    │
│  □ Ребёнку понравилось       │
│  □ Слишком сложно            │
│  □ Слишком легко             │
│  □ Хотим больше задач!       │
└──────────────────────────────┘
```
Frequency: Max 1 раз в 3 дня

### 5.3 NPS Measurement

After 7 days or 20+ puzzles:
```
Порекомендуете ли KidChess другим родителям?
0  1  2  3  4  5  6  7  8  9  10
```
Target NPS: >40

### 5.4 Parent Interviews

- Sample: 10-15 parents (after 100+ users)
- Duration: 15-20 min
- Incentive: 1 month Premium free

**Interview Questions:**
1. Расскажите про ребёнка
2. Как узнали про KidChess?
3. Как проходит игра обычно?
4. Были ли моменты расстройства?
5. Видите ли прогресс?
6. Пробовали другие приложения?
7. Готовы ли платить?
8. Какая цена справедлива?
9. Что должно быть в платной версии?

---

## 6. Research Timeline

### Week 1: Setup & Initial Data

| Day | Activities | Deliverables |
|-----|------------|--------------|
| Mon | Add analytics events | Updated game.js |
| Tue | Deploy, test tracking | Analytics verified |
| Wed | Share in Telegram chats | 30-50 users |
| Thu | Analyze D1 retention | Drop-off analysis |
| Fri | Send survey, Reddit posts | 80-100 users |

### Week 2: Deep Analysis & A/B Tests

| Day | Activities | Deliverables |
|-----|------------|--------------|
| Mon | Review data, design tests | A/B test specs |
| Tue | Implement Test 1 & 2 | Code deployed |
| Wed | Launch tests | 120+ users |
| Thu | Survey analysis | Top 3 features |
| Fri | Cohort analysis | Retention report |

### Week 3: Qualitative Research

| Day | Activities | Deliverables |
|-----|------------|--------------|
| Mon | A/B test results | UX improvements |
| Tue | Recruit 5 parents | Interview calendar |
| Wed-Fri | Conduct interviews | Personas |

### Week 4: Willingness to Pay

| Day | Activities | Deliverables |
|-----|------------|--------------|
| Mon | Pricing survey | Pricing insights |
| Tue | Paywall mockups | Prototypes |
| Wed | 3 more interviews | Payment drivers |
| Thu | Consolidate data | Research report |
| Fri | Go/No-Go decision | v1.2 spec |

---

## 7. Success Criteria

### Metrics Table

| Metric | Fail | OK | Great |
|--------|------|-----|-------|
| Total Users (4 wks) | <150 | 150-300 | >300 |
| Day 1 Retention | <30% | 30-40% | >40% |
| Day 7 Retention | <15% | 15-25% | >25% |
| Survey Response | <10% | 10-20% | >20% |
| Willingness to Pay | <30% | 30-50% | >50% |
| NPS Score | <20 | 20-40 | >40 |
| Puzzles/Session | <3 | 3-7 | >7 |

### Go/No-Go Decision Tree

```
IF users>300 AND d7>20% AND wtp>40%
  → GO: Ship v1.2 with paywall
  → Invest $200-500 in ads

ELSE IF users>200 AND d7>15%
  → ITERATE: Improve UX first
  → More A/B tests

ELSE IF users<150 OR d7<10%
  → PIVOT: PMF issue
  → Options: age pivot, B2B, family mode

ELSE IF wtp<20%
  → FREEMIUM: Love but won't pay
  → Consider ads or B2B
```

---

## 8. Tools

### Analytics
- **Umami**: Events, funnels, retention
- **Google Sheets**: Survey aggregation

### Surveys
- **Google Forms**: Parent surveys
- **Telegram Bot**: In-app feedback

### A/B Testing
```javascript
const variant = Math.random() < 0.5 ? 'A' : 'B';
localStorage.setItem('ab_onboarding', variant);
Analytics.track('ab_assigned', { test: 'onboarding', variant });
```

### Interviews
- **Zoom/Google Meet**: Remote
- **Otter.ai**: Transcription

---

## 9. Immediate Actions

### This Week
1. [ ] Add session_start/end events to game.js
2. [ ] Create Umami funnels
3. [ ] Set up Google Form survey
4. [ ] Share in 5 Telegram chats
5. [ ] Post to r/chess and r/parenting

### Week 2
6. [ ] Send survey to first 50 users
7. [ ] Implement A/B Test 1 (onboarding)
8. [ ] Analyze retention cohorts
9. [ ] Recruit 5 parents for interviews

### Week 3-4
10. [ ] Conduct parent interviews
11. [ ] Pricing validation survey
12. [ ] Synthesize all data
13. [ ] Go/No-Go decision

---

## Appendix: User Persona

### "Engaged Parent Elena"

**Demographics:**
- Age: 32
- Occupation: Marketing manager
- Child: Misha, 5 years old

**Psychographics:**
- Values: Education, screen time quality
- Uses: Duolingo, Khan Academy Kids
- Chess: Played as child, wants to teach son

**Behavior:**
- Uses KidChess 3-4x/week, 15-20 min
- Sits with child, explains hints
- Shared app with 2 other moms

**Pain Points:**
- "Hard to find chess for very young kids"
- "He gets frustrated when stuck"
- "No time to teach myself"

**Willingness to Pay:** High ($5/month)

**Quote:**
"I love that he's learning without me teaching every move. The fox makes it fun!"

---

*End of User Research Plan v1.0*

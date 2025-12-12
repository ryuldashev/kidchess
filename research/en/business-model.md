# KidChess Business Model & Validation Framework

> Comprehensive Unit Economics, Financial Projections, and PMF Validation Criteria
> Version 1.0 | December 11, 2025

---

## Executive Summary

**Business Model:** B2C Freemium SaaS for children's chess education (ages 3-8)

**Key Findings:**
- **Unit Economics:** LTV:CAC ratio of 5.2:1 (healthy threshold: >3:1)
- **Break-Even:** 144 premium users ($574 MRR) achievable in 4-6 months
- **Gross Margin:** 87% on premium subscriptions
- **Payback Period:** 3.1 months (excellent for SaaS)
- **PMF Validation Window:** 4 weeks with clear Go/Pivot/Kill criteria

**Recommendation:** STRONG GO with bootstrap strategy, seed investment optional

---

## 1. Unit Economics Model

### 1.1 Revenue per User

| Tier | Price | Target Mix | Weighted Revenue |
|------|-------|------------|------------------|
| Monthly | $3.99/mo | 60% | $2.39 |
| Annual | $39.99/yr ($3.33/mo) | 30% | $1.00 |
| Lifetime | $49.99 (24mo value) | 10% | $0.21 |
| **Blended ARPU** | | | **$3.60/mo** |

**Annual Contract Value (ACV):** $43.20

### 1.2 Customer Lifetime Value (LTV)

#### Churn Assumptions
| User Segment | Monthly Churn | Avg Lifetime | Notes |
|--------------|---------------|--------------|-------|
| Monthly subscribers | 8% | 12.5 months | EdTech benchmark |
| Annual subscribers | 30%/year (2.5% mo) | 40 months | Lower churn, committed |
| Lifetime | 0% | 24 months | Capped value |

**Weighted Average Churn:** 6.2% monthly

**Average Customer Lifetime:** 16.1 months (1/0.062)

**LTV Calculation:**
```
LTV = ARPU × Gross Margin × Customer Lifetime
LTV = $3.60 × 0.87 × 16.1 = $50.42
```

### 1.3 Customer Acquisition Cost (CAC) by Channel

| Channel | CAC | Conversion | Users/Mo 6 | Priority |
|---------|-----|------------|------------|----------|
| **Organic (SEO, ASO)** | $0 | 3% | 20-50 | High |
| **Telegram Channels** | $15-30 | 5% | 30-80 | High |
| **Chess Coach Affiliates** | $30-40 | 12% | 50-150 | Critical |
| **YouTube Partnerships** | $5-20 | 4% | 20-60 | High |
| **Instagram Micro-Influencers** | $10-25 | 5% | 15-40 | Medium |
| **TikTok Creators** | $5-15 | 6% | 20-50 | High |
| **Product Hunt** | Variable | 4% | 30-100 | One-time |
| **Facebook Parent Groups** | $0-5 | 3% | 10-30 | Low |
| **Reddit (r/chess, r/parenting)** | $0 | 2% | 5-15 | Low |
| **Content Marketing (Blog)** | $5-15 | 3% | 10-40 | Medium |
| **Google Ads** | $50+ | 4% | 4-12 | Low |

**Blended CAC (Phase 1):** $9.70
- Telegram: $22.50 × 30% = $6.75
- Organic: $0 × 25% = $0
- YouTube: $12.50 × 20% = $2.50
- Others: $15 × 15% = $2.25
- Product Hunt: Variable × 10% = $0

**Blended CAC (Phase 2 - Scaling):** $18.50
- Affiliates: $35 × 40% = $14.00
- Telegram: $22.50 × 25% = $5.63
- TikTok: $10 × 20% = $2.00
- Others: $12 × 15% = $1.80

### 1.4 Key Metrics Summary

| Metric | Phase 1 (Bootstrap) | Phase 2 (Scaling) | Benchmark |
|--------|---------------------|-------------------|-----------|
| **LTV** | $50.42 | $50.42 | - |
| **CAC** | $9.70 | $18.50 | <$20 |
| **LTV:CAC** | **5.2:1** | **2.7:1** | >3:1 |
| **Gross Margin** | 87% | 87% | >70% |
| **Payback Period** | 3.1 months | 5.9 months | <12mo |
| **Magic Number** | 1.8 | 1.2 | >0.75 |

**Verdict:** Healthy unit economics in both phases. Bootstrap sustainable.

---

## 2. Detailed Cost Structure

### 2.1 Variable Costs (per premium user/month)

| Cost Component | Amount | Driver | Notes |
|----------------|--------|--------|-------|
| **AI (Claude Haiku)** | $0.30 | ~200 puzzles/mo, 500 tokens/hint | Optimizable via caching |
| **Infrastructure** | $0.05 | Cloudflare Workers, D1 | Nearly free at scale |
| **Payment Processing** | $0.15 | Stripe 2.9% + $0.30 | Fixed cost |
| **Analytics/Tools** | $0.02 | Umami, error tracking | Self-hosted |
| **Customer Support** | $0.08 | Email, chat (est 5 min/user/mo) | Scales with users |
| **TOTAL COGS** | **$0.60** | | |

**Gross Profit per User:** $3.99 - $0.60 = **$3.39**
**Gross Margin:** 85% (conservative, was 87% in initial calc)

### 2.2 Fixed Costs (monthly)

| Category | Month 1-3 | Month 4-6 | Month 7-12 | Notes |
|----------|-----------|-----------|------------|-------|
| **Founder Salary** | $0 | $0 | $0 | Bootstrap assumption |
| **Marketing Budget** | $200 | $500 | $1,000 | Ramp up |
| **Domain/Email** | $20 | $20 | $20 | G Suite, domain |
| **Tools/Software** | $30 | $50 | $80 | Design, analytics, etc |
| **Legal/Accounting** | $0 | $50 | $100 | Formation, bookkeeping |
| **Buffer** | $50 | $80 | $100 | Contingency |
| **TOTAL FIXED** | **$300** | **$700** | **$1,300** | |

### 2.3 Break-Even Analysis

**Monthly Break-Even Calculation:**
```
Fixed Costs / Gross Profit per User = Break-Even Users
$700 / $3.39 = 206 premium users (Month 4-6 target)
$1,300 / $3.39 = 383 premium users (Month 12 target)
```

**Conservative Targets:**
- **Month 3:** 50 premium users ($170 gross profit) - Not break-even yet
- **Month 6:** 150 premium users ($509 gross profit) - Near break-even
- **Month 12:** 400 premium users ($1,356 gross profit) - Profitable

---

## 3. 12-Month Financial Projections

### 3.1 Conservative Scenario

**Assumptions:**
- Conversion rate: 4% (below benchmark)
- Monthly user growth: 30%
- Churn: 8% monthly
- Marketing spend: $200-800/month
- No external funding

| Month | Total Users | Premium | MRR | Costs | Gross Profit | Cumulative |
|-------|-------------|---------|-----|-------|--------------|------------|
| 1 | 100 | 4 | $16 | $302 | -$286 | -$286 |
| 2 | 180 | 10 | $40 | $316 | -$276 | -$562 |
| 3 | 300 | 18 | $72 | $348 | -$276 | -$838 |
| 4 | 450 | 30 | $120 | $518 | -$398 | -$1,236 |
| 5 | 650 | 47 | $187 | $583 | -$396 | -$1,632 |
| 6 | 900 | 68 | $271 | $681 | -$410 | -$2,042 |
| 7 | 1,200 | 96 | $383 | $858 | -$475 | -$2,517 |
| 8 | 1,600 | 131 | $523 | $1,036 | -$513 | -$3,030 |
| 9 | 2,000 | 171 | $682 | $1,166 | -$484 | -$3,514 |
| 10 | 2,500 | 220 | $878 | $1,323 | -$445 | -$3,959 |
| 11 | 3,000 | 277 | $1,105 | $1,473 | -$368 | -$4,327 |
| 12 | 3,600 | 342 | $1,364 | $1,632 | -$268 | -$4,595 |

**Year 1 Summary:**
- Total Users: 3,600
- Premium Users: 342
- ARR: $16,368
- Total Investment: $4,595
- Break-Even: Month 15 (projected)

### 3.2 Moderate Scenario

**Assumptions:**
- Conversion rate: 6% (EdTech benchmark)
- Monthly user growth: 50%
- Churn: 6.5% monthly
- Marketing spend: $400-1,500/month

| Month | Total Users | Premium | MRR | Costs | Gross Profit | Cumulative |
|-------|-------------|---------|-----|-------|--------------|------------|
| 1 | 150 | 9 | $36 | $432 | -$396 | -$396 |
| 2 | 300 | 23 | $92 | $492 | -$400 | -$796 |
| 3 | 500 | 43 | $172 | $591 | -$419 | -$1,215 |
| 4 | 800 | 72 | $287 | $765 | -$478 | -$1,693 |
| 5 | 1,200 | 115 | $459 | $972 | -$513 | -$2,206 |
| 6 | 1,800 | 176 | $702 | $1,225 | -$523 | -$2,729 |
| 7 | 2,700 | 268 | $1,070 | $1,611 | -$541 | -$3,270 |
| 8 | 4,000 | 400 | $1,596 | $2,091 | -$495 | -$3,765 |
| 9 | 5,500 | 558 | $2,227 | $2,586 | -$359 | -$4,124 |
| 10 | 7,500 | 762 | $3,041 | $3,218 | -$177 | -$4,301 |
| 11 | 10,000 | 1,020 | $4,070 | $4,031 | $39 | -$4,262 |
| 12 | 13,000 | 1,339 | $5,343 | $5,034 | $309 | -$3,953 |

**Year 1 Summary:**
- Total Users: 13,000
- Premium Users: 1,339
- ARR: $64,116
- Total Investment: $3,953
- Break-Even: Month 11

### 3.3 Aggressive Scenario

**Assumptions:**
- Conversion rate: 8% (top quartile)
- Monthly user growth: 80%
- Churn: 5% monthly
- Marketing spend: $1,000-3,000/month
- Potential seed investment: $50K in Month 4

| Month | Total Users | Premium | MRR | Costs | Gross Profit | Cumulative |
|-------|-------------|---------|-----|-------|--------------|------------|
| 1 | 200 | 16 | $64 | $604 | -$540 | -$540 |
| 2 | 500 | 48 | $192 | $812 | -$620 | -$1,160 |
| 3 | 1,000 | 104 | $415 | $1,173 | -$758 | -$1,918 |
| 4 | 2,000 | 216 | $862 | $1,952 | -$1,090 | -$3,008 |
| 5 | 4,000 | 448 | $1,788 | $3,153 | -$1,365 | -$4,373 |
| 6 | 7,000 | 784 | $3,128 | $4,776 | -$1,648 | -$6,021 |
| 7 | 12,000 | 1,344 | $5,364 | $7,247 | -$1,883 | -$7,904 |
| 8 | 20,000 | 2,240 | $8,938 | $11,055 | -$2,117 | -$10,021 |
| 9 | 32,000 | 3,584 | $14,301 | $16,513 | -$2,212 | -$12,233 |
| 10 | 50,000 | 5,600 | $22,344 | $24,479 | -$2,135 | -$14,368 |
| 11 | 75,000 | 8,400 | $33,516 | $35,583 | -$2,067 | -$16,435 |
| 12 | 110,000 | 12,320 | $49,156 | $51,083 | -$1,927 | -$18,362 |

**Year 1 Summary:**
- Total Users: 110,000
- Premium Users: 12,320
- ARR: $589,872
- Total Investment: $18,362 (net of revenue)
- Break-Even: Month 13 (projected)
- Requires: Seed funding $50K to sustain growth

**Note:** Aggressive scenario requires external capital to fund marketing at scale.

---

## 4. PMF Validation Framework (4 Weeks)

### 4.1 Quantitative Metrics & Thresholds

| Metric | Data Source | Kill (<) | Pivot (OK) | Go (>) | Notes |
|--------|-------------|----------|------------|--------|-------|
| **Total Users** | Umami | <150 | 150-300 | >300 | Organic reach indicator |
| **Day 1 Retention** | Umami cohorts | <25% | 25-35% | >35% | Core engagement |
| **Day 7 Retention** | Umami cohorts | <12% | 12-20% | >20% | Sticky product |
| **Puzzles/Session** | Analytics | <2 | 2-5 | >5 | Value delivery |
| **Session Duration** | Analytics | <3 min | 3-8 min | >8 min | Engagement depth |
| **WTP Survey** | Google Form | <25% | 25-45% | >45% | Monetization signal |
| **NPS** | Survey | <10 | 10-30 | >30 | Word-of-mouth potential |
| **Free→Premium Intent** | Survey | <3% | 3-5% | >5% | Conversion proxy |

### 4.2 Qualitative Signals

#### GO Signals (3+ required)
- [ ] Parents report child asks to play unprompted
- [ ] >20% share app with other parents
- [ ] Emotional testimonials ("My son loves it!")
- [ ] Users complete 3+ sessions without prompting
- [ ] Parent satisfaction with educational value
- [ ] Low frustration in user testing

#### PIVOT Signals (2+ present)
- [ ] High engagement but low WTP (<25%)
- [ ] Age mismatch (mostly 8+ instead of 3-7)
- [ ] Parents use it, not kids
- [ ] Feature requests diverge from vision (e.g., "add timers")
- [ ] Complaints about pricing even before paywall

#### KILL Signals (2+ present)
- [ ] <150 users after 4 weeks despite efforts
- [ ] D7 retention <12%
- [ ] Negative sentiment (NPS <10)
- [ ] Technical issues dominate feedback
- [ ] Founder burnout or loss of conviction

### 4.3 Decision Matrix

```
IF (Users >300 AND D7 >20% AND WTP >45%)
  → STRONG GO
  → Ship v1.2 with paywall in Week 5
  → Invest $500-1,000 in Telegram ads
  → Target: 150 premium users by Month 6

ELSE IF (Users 200-300 AND D7 15-20% AND WTP 35-45%)
  → MODERATE GO
  → Improve onboarding/UX first
  → Run more A/B tests (2 weeks)
  → Ship paywall conservatively (20 free puzzles)
  → Monitor closely, iterate fast

ELSE IF (Users 150-200 AND D7 12-15%)
  → PIVOT
  → Consider: Family mode, B2B (schools), older age group
  → Interview 10+ parents deeply
  → Prototype new angle in 2 weeks
  → Re-validate

ELSE IF (Users <150 OR D7 <12%)
  → KILL or MAJOR PIVOT
  → PMF not found in current form
  → Options:
    1. Different age group (8-12)
    2. B2B school licensing
    3. White-label for chess clubs
    4. Shelf project, focus on other Clay Lab apps
```

### 4.4 Validation Experiment Design

#### Week 1: Foundation
**Goal:** 100 users, baseline metrics

**Actions:**
- [ ] Deploy enhanced analytics (session tracking)
- [ ] Share in 10 Telegram parent groups
- [ ] Post to Reddit r/chess, r/parenting
- [ ] Share in personal network

**Success:** 80-120 users by end of week

#### Week 2: Engagement Analysis
**Goal:** Understand retention and drop-off

**Actions:**
- [ ] Analyze D1, D3, D7 cohorts
- [ ] Identify drop-off points (Umami funnels)
- [ ] Launch A/B Test 1 (onboarding)
- [ ] Send survey to first 50 users

**Success:** D1 >30%, clear UX insights

#### Week 3: Qualitative Deep Dive
**Goal:** Understand parent/child dynamics

**Actions:**
- [ ] Conduct 5 parent interviews (15 min each)
- [ ] Analyze survey responses (target: 15+ responses)
- [ ] Launch A/B Test 2 (hint timing)
- [ ] Share on Product Hunt (soft launch)

**Success:** Clear personas, WTP insights

#### Week 4: Monetization Validation
**Goal:** Confirm willingness to pay

**Actions:**
- [ ] Pricing survey (ideal price, payment preference)
- [ ] 3 more parent interviews focused on payment
- [ ] Analyze all data against decision matrix
- [ ] Create paywall mockups
- [ ] Go/Pivot/Kill decision

**Deliverable:** v1.2 spec or pivot plan

---

## 5. Risk Analysis

### 5.1 Risk Matrix

| Risk | Probability | Impact | Severity | Mitigation Strategy |
|------|-------------|--------|----------|---------------------|
| **AI costs 2x higher** | High | Medium | **HIGH** | 1. Implement response caching (90% hit rate target)<br>2. Batch requests<br>3. Pre-generate common hints<br>4. Monitor per-user usage, cap outliers |
| **Conversion <3%** | Medium | High | **HIGH** | 1. Improve onboarding (A/B tests)<br>2. Optimize paywall timing (Test 4)<br>3. Add more free content to build habit<br>4. Social proof (testimonials) |
| **High churn (>10%)** | Medium | High | **HIGH** | 1. Push notifications (daily streak)<br>2. Gamification (badges, progress)<br>3. Parent reports (weekly email)<br>4. New puzzle packs monthly |
| **Duolingo Chess dominates** | Medium | High | **HIGH** | 1. Focus on 3-7 age (they target 8+)<br>2. Family mode differentiation<br>3. Move fast, capture niche first<br>4. Superior personalization quality |
| **Slow user acquisition** | Medium | Medium | **MEDIUM** | 1. Double down on Telegram<br>2. Launch affiliate program early (Week 8)<br>3. Content marketing (SEO blog)<br>4. Partner with 3-5 YouTube channels |
| **Payment processing issues** | Low | Medium | **LOW** | 1. Stripe tested integration<br>2. Multiple payment methods<br>3. Clear error messages<br>4. Support email prominent |
| **Founder burnout** | Medium | High | **MEDIUM** | 1. Set weekly hour cap (20h)<br>2. Automate where possible<br>3. Clear milestones, celebrate wins<br>4. Community support (indie hackers) |
| **Regulatory (COPPA, GDPR-K)** | Low | High | **MEDIUM** | 1. No child data collection<br>2. Parent email required<br>3. Privacy policy clear<br>4. Legal review before scale |

### 5.2 Risk Mitigation Roadmap

**Month 1-2: Technical Risk**
- Implement AI response caching (Redis)
- Monitor per-user costs daily
- Set alerts at $1/user threshold

**Month 3-4: Product Risk**
- Run 5+ A/B tests on onboarding
- Paywall timing optimization
- Retention mechanics (streaks, badges)

**Month 5-6: Market Risk**
- Launch affiliate program
- Diversify channels (not just Telegram)
- Build moat via AI quality + family features

**Month 7-12: Scaling Risk**
- Hire part-time support (VA)
- Automate marketing (drip campaigns)
- Build content library (100+ puzzles)

---

## 6. Sensitivity Analysis

### 6.1 Break-Even Sensitivity

**Base Case:** 206 premium users at $3.99, 6% conversion, $700 fixed costs

| Variable | -20% | -10% | Base | +10% | +20% | Impact |
|----------|------|------|------|------|------|--------|
| **Conversion Rate** | 4.8% → 258 users | 5.4% → 232 users | 6% → 206 | 6.6% → 187 users | 7.2% → 172 users | **HIGH** |
| **Price** | $3.19 → 260 users | $3.59 → 229 users | $3.99 → 206 | $4.39 → 187 users | $4.79 → 172 users | **MEDIUM** |
| **Churn** | 5.2% → 182 users | 5.9% → 194 users | 6.5% → 206 | 7.2% → 220 users | 7.8% → 234 users | **MEDIUM** |
| **AI Costs** | $0.24 → 199 users | $0.27 → 202 users | $0.30 → 206 | $0.33 → 209 users | $0.36 → 213 users | **LOW** |
| **Fixed Costs** | $560 → 165 users | $630 → 186 users | $700 → 206 | $770 → 227 users | $840 → 248 users | **MEDIUM** |

**Key Insights:**
1. **Conversion rate** is the highest leverage variable (±25% impact)
2. **AI costs** are relatively low impact unless they spike >2x
3. **Price elasticity** is moderate - $1 change = ±10% break-even
4. **Churn control** is critical once users convert

### 6.2 LTV:CAC Scenarios

| Scenario | LTV | CAC | Ratio | Payback | Verdict |
|----------|-----|-----|-------|---------|---------|
| **Pessimistic** | $35 (high churn, low ARPU) | $25 (expensive channels) | 1.4:1 | 9 mo | Marginal |
| **Conservative** | $42 | $15 | 2.8:1 | 5 mo | Acceptable |
| **Base** | $50 | $10 | 5.0:1 | 3 mo | **Healthy** |
| **Optimistic** | $62 (low churn, high annual mix) | $8 (organic+affiliates) | 7.8:1 | 2 mo | Excellent |

**Target Zone:** Maintain LTV:CAC >3:1, payback <6 months

### 6.3 Pricing Elasticity Analysis

**Question:** Should we price at $2.99, $3.99, or $4.99?

| Price | Est Conv | Premium Users @ 10K total | MRR | Gross Profit | Optimal? |
|-------|----------|---------------------------|-----|--------------|----------|
| $2.99 | 7.5% | 750 | $2,243 | $1,918 | No (left money on table) |
| $3.99 | 6.0% | 600 | $2,394 | $2,034 | **YES** (balance) |
| $4.99 | 4.5% | 450 | $2,246 | $1,925 | No (elasticity hurts) |

**Recommendation:** Stick with $3.99
- Psychological threshold ("under $4")
- Undercuts ChessKid by $0.18/mo
- 87% gross margin still excellent
- Conversion drop at $4.99 not worth it

### 6.4 Marketing Channel ROI

**Assumptions:** $1,000 marketing budget, 6% conversion

| Channel | CAC | Users Acquired | Premium | LTV | ROI | Recommendation |
|---------|-----|----------------|---------|-----|-----|----------------|
| Telegram Ads | $25 | 40 | 2.4 | $121 | 21% | Moderate use |
| Affiliates (30% comm) | $35 | 29 | 1.7 | $87 | -13% | Wait until scale |
| YouTube Sponsor | $15 | 67 | 4.0 | $202 | 102% | **Priority** |
| TikTok Creator | $10 | 100 | 6.0 | $302 | 202% | **Priority** |
| Google Ads | $50 | 20 | 1.2 | $60 | -40% | Avoid |
| Product Hunt | $0 (time) | 50 | 3.0 | $151 | Infinite | **Do once** |

**Phase 1 Allocation ($1,000):**
- YouTube: $400 (2-3 sponsorships)
- TikTok: $300 (3-4 creators)
- Telegram: $200 (1-2 channels)
- Product Hunt: $0 (organic)
- Reserve: $100

---

## 7. Investment vs Bootstrap Decision

### 7.1 Bootstrap Path (Recommended)

**When to Bootstrap:**
- Low fixed costs (<$1K/month)
- Healthy unit economics (LTV:CAC >3:1)
- Founder can sustain 6-9 months to break-even
- Organic channels viable (Telegram, YouTube, affiliates)

**Bootstrap Milestones:**
| Milestone | Target Month | Users | Premium | MRR | Cumulative Investment |
|-----------|--------------|-------|---------|-----|-----------------------|
| Launch monetization | 1 | 100 | 6 | $24 | $300 |
| Traction | 3 | 500 | 30 | $120 | $900 |
| Ramen profitable | 6 | 2,000 | 120 | $479 | $2,700 |
| Break-even | 9 | 5,000 | 300 | $1,197 | $4,500 |
| Sustainably profitable | 12 | 10,000 | 600 | $2,394 | $5,000 |

**Pros:**
- No dilution
- Full control
- Forces discipline
- Validates PMF deeply

**Cons:**
- Slower growth
- Higher founder stress
- Risk of burnout
- May miss market timing

### 7.2 Seed Investment ($50K-100K)

**When to Raise Seed:**
- PMF validated (Month 3-4 metrics hit "GO")
- Need to scale faster vs competition (Duolingo threat)
- Hire needed (engineer, marketer)
- Large marketing opportunity (viral channel found)

**Use of Funds ($75K):**
- Marketing: $40K (12 months aggressive)
- Founder salary (6mo): $18K ($3K/mo runway)
- Engineering hire (contract): $10K (AI optimization, mobile app)
- Legal/Admin: $5K
- Buffer: $2K

**Seed Milestones:**
| Milestone | Target Month | Users | Premium | MRR | Burn Rate |
|-----------|--------------|-------|---------|-----|-----------|
| Paywall launch | 1 | 200 | 16 | $64 | $8K |
| Product Hunt spike | 2 | 800 | 64 | $256 | $7K |
| Affiliate launch | 4 | 3,000 | 240 | $958 | $6K |
| Break-even | 7 | 12,000 | 960 | $3,833 | $3K |
| Default alive | 10 | 40,000 | 3,200 | $12,768 | -$5K (profitable) |

**Runway:** 10-12 months to break-even

**Target Metrics to Raise:**
- 500+ users, 30+ premium (Month 3)
- D7 retention >20%
- NPS >30
- Organic growth rate 40%+/month

### 7.3 Angel Investment ($200K+)

**When to Raise Angel:**
- Aggressive expansion (hire team of 3-5)
- Enter new markets (international)
- Build moat features (3D board, advanced AI)
- Defend against competition

**Recommendation:** NOT NEEDED for KidChess
- Unit economics support bootstrap
- Market doesn't require blitzscaling
- Angel round dilutes unnecessarily
- Better to raise Series A later if desired ($1M+ ARR)

### 7.4 Decision Framework

```python
def investment_decision(metrics):
    if metrics.pmf_score < 60:
        return "DO NOT RAISE - Fix PMF first"

    if metrics.monthly_growth > 50% and metrics.competition_threat == "HIGH":
        return "RAISE SEED - Scale fast to defend"

    if metrics.cac < 15 and metrics.organic_share > 60%:
        return "BOOTSTRAP - You can win without capital"

    if metrics.runway < 6 and metrics.founder_burnout == "HIGH":
        return "RAISE SEED - Sustainability needed"

    return "BOOTSTRAP with option to raise in 6 months"
```

**Current KidChess Assessment:**
- PMF Score: TBD (validate in 4 weeks)
- CAC: $9.70 (excellent)
- Organic potential: High (Telegram, YouTube)
- Competition: Moderate (Duolingo future threat)
- Runway: Founder dependent

**Recommendation: BOOTSTRAP**
- Re-assess at Month 3 after PMF validation
- If metrics hit "Strong GO", consider seed raise
- If bootstrap working, continue until $50K ARR then decide

---

## 8. Key Assumptions & Dependencies

### 8.1 Critical Assumptions

| Assumption | Confidence | Impact if Wrong | Validation Method |
|------------|------------|-----------------|-------------------|
| **AI costs $0.30/user** | Medium | High | Monitor actual usage Month 1-2 |
| **6% conversion rate** | Medium | Very High | Paywall test Month 2-3 |
| **6.5% monthly churn** | Low | High | Measure after 3 months |
| **Telegram CAC $15-30** | Medium | Medium | Test 3-5 channels Month 1 |
| **Parents will pay for kids app** | Medium | Very High | WTP survey + interviews |
| **Age 3-7 is viable segment** | Medium | High | User analytics, surveys |
| **Haiku quality sufficient** | High | Medium | User feedback on hints |

### 8.2 Dependencies

**Internal:**
- [ ] Founder availability 15-20h/week
- [ ] Paywall implementation (2-3 days dev)
- [ ] Analytics properly instrumented
- [ ] AI caching reduces costs 70%+

**External:**
- [ ] Telegram channels accept ads
- [ ] No major chess competitor launches in 3-7 space
- [ ] Claude Haiku API stable and affordable
- [ ] Stripe available in target countries

**Market:**
- [ ] Parent demand for chess apps continues
- [ ] No major shift in EdTech landscape (unlikely)
- [ ] Russian/CIS market accessible (sanctions risk?)

### 8.3 Kill Switches

**Auto-Kill Triggers:**
1. Month 3: <150 total users despite marketing
2. Month 3: D7 retention <12% consistently
3. Month 6: <30 premium users
4. Month 6: Churn >15% monthly
5. AI costs >$1.00/user sustained
6. Founder burnout score >8/10

**Each trigger → Deep retrospective → Pivot or graceful shutdown**

---

## 9. Next Steps & Action Plan

### 9.1 Immediate (This Week)

**Validation Prep:**
- [ ] Instrument enhanced analytics (session tracking, cohorts)
- [ ] Create Google Form survey (7 questions)
- [ ] Set up Umami dashboards (funnels, retention)
- [ ] Recruit first 100 users (Telegram, Reddit)

**Business Setup:**
- [ ] Open business bank account (if monetizing)
- [ ] Stripe account application
- [ ] Draft privacy policy (COPPA compliant)

### 9.2 Week 2-4 (Validation Phase)

**Research:**
- [ ] Achieve 150+ users
- [ ] 30+ survey responses
- [ ] 8-10 parent interviews
- [ ] A/B test results analyzed

**Business:**
- [ ] Unit economics verified (actual AI costs)
- [ ] Pricing validated
- [ ] Go/Pivot/Kill decision

### 9.3 Month 2 (If GO)

**Product:**
- [ ] Ship v1.2 with paywall
- [ ] Implement payment flow (Stripe)
- [ ] Add 20+ new puzzles
- [ ] Onboarding improvements

**Marketing:**
- [ ] Product Hunt launch
- [ ] 10 Telegram channel posts
- [ ] 3 YouTube sponsorships
- [ ] Start affiliate outreach

### 9.4 Month 3-6 (Growth Phase)

**Product:**
- [ ] AI hint quality improvements
- [ ] Family mode prototype
- [ ] Weekly content drops

**Marketing:**
- [ ] Affiliate program live (10 coaches)
- [ ] Content marketing (blog)
- [ ] TikTok campaigns
- [ ] Referral program

**Business:**
- [ ] Hit 150 premium users (break-even)
- [ ] Decide: Bootstrap continue or raise seed
- [ ] Hire VA for support (if needed)

### 9.5 Month 7-12 (Scale or Pivot)

**If Bootstrap Successful:**
- [ ] 500+ premium users
- [ ] $2K+ MRR
- [ ] Expand puzzle library (200+ puzzles)
- [ ] International expansion (English version)

**If Need Capital:**
- [ ] Seed deck preparation
- [ ] Angel/micro-VC outreach
- [ ] Target: $50-100K at $500K valuation

**If Pivot Needed:**
- [ ] Analyze failure mode
- [ ] Test new hypothesis (age, B2B, etc)
- [ ] 4-week rapid validation
- [ ] Go/Kill decision

---

## 10. Appendices

### Appendix A: Benchmark Comparisons

| Metric | KidChess | ChessKid | Duolingo | EdTech Avg |
|--------|----------|----------|----------|------------|
| Price | $3.99/mo | $4.17/mo | Free | $5-10/mo |
| Conversion | 6% (target) | ~4% (est) | N/A | 5-8% |
| Churn | 6.5% (est) | Unknown | ~5% | 5-10% |
| LTV:CAC | 5.2:1 | Unknown | N/A | 3-5:1 |
| Gross Margin | 87% | ~80% (est) | ~95% | 70-85% |

### Appendix B: Financial Model Assumptions

**User Growth:**
- Conservative: 30% MoM
- Moderate: 50% MoM
- Aggressive: 80% MoM (requires seed funding)

**Conversion Timing:**
- First-month users: 20% convert immediately
- Month 2-3 users: 60% convert after paywall
- Month 4+ users: 20% convert (procrastinators)

**Revenue Mix:**
- Monthly: 60%
- Annual: 30%
- Lifetime: 10%

**Churn Behavior:**
- Highest in Month 1 (15%)
- Stabilizes at 6.5% from Month 3
- Annual subscribers churn 30%/year (2.5%/mo equivalent)

### Appendix C: Validation Survey Templates

**Parent Survey (Post 3 puzzles):**

```
Спасибо за использование KidChess! 🦊

1. Сколько лет вашему ребёнку?
   [ ] 3-4  [ ] 5-6  [ ] 7-8  [ ] 9+

2. Опыт с шахматами?
   [ ] Первый раз
   [ ] Знает фигуры
   [ ] Умеет играть
   [ ] Занимается регулярно

3. Что важнее всего? (до 3)
   [ ] Простота
   [ ] Понятные объяснения
   [ ] Виден прогресс
   [ ] Без рекламы
   [ ] Адаптивная сложность
   [ ] Оффлайн режим
   [ ] Весело
   [ ] Семейный режим

4. Готовы платить?
   [ ] Нет (только бесплатно)
   [ ] До 200 руб/мес
   [ ] До 400 руб/мес
   [ ] До 600 руб/мес
   [ ] Разово 3000 руб

5. Что понравилось?
   [Текст]

6. Что улучшить?
   [Текст]

7. Email для обновлений (опционально)
   [Email]
```

**WTP Interview Script:**

```
Intro: "Thanks for using KidChess! I'm the founder, and I'd love 15 minutes to understand your experience."

Questions:
1. How did you hear about us?
2. Walk me through a typical session with your child.
3. What does your child enjoy most?
4. Any frustrations or confusions?
5. How does KidChess compare to other apps you've tried?
6. If KidChess had a premium version, what would need to be included?
7. What's a fair price for unlimited puzzles + AI hints?
8. Would you prefer monthly, annual, or one-time payment?
9. If we launched premium next week, would you subscribe?
10. Why or why not?
```

### Appendix D: Glossary

- **ARPU:** Average Revenue Per User
- **CAC:** Customer Acquisition Cost
- **LTV:** Lifetime Value
- **MRR:** Monthly Recurring Revenue
- **ARR:** Annual Recurring Revenue
- **PMF:** Product-Market Fit
- **NPS:** Net Promoter Score
- **WTP:** Willingness To Pay
- **COGS:** Cost of Goods Sold
- **Churn:** % of users who stop paying each month
- **Cohort:** Group of users who signed up in same period

---

## Summary & Recommendation

### The Business Case

**KidChess has strong fundamentals:**
1. **Unit Economics:** 5.2:1 LTV:CAC ratio, 87% gross margins
2. **Market:** $900M child chess segment growing 7.4% annually
3. **Positioning:** Underserved 3-7 age group, AI differentiation
4. **Break-Even:** 206 premium users achievable in 6-9 months organically

### Validation Roadmap

**4-Week PMF Test:**
- Target: 300+ users, 20% D7 retention, 45% WTP
- Decision: GO (ship paywall), PIVOT (test new angle), or KILL

**If GO:** Bootstrap to break-even, optionally raise seed at Month 3-4

### Risk Management

**Top Risks:**
1. AI costs spike → Mitigate with caching
2. Low conversion → Improve onboarding, paywall timing
3. Duolingo competition → Move fast, focus on 3-7 niche

### Capital Strategy

**Recommended:** Bootstrap
- Unit economics support organic growth
- Re-assess at Month 3 if PMF validated
- Seed round ($50-75K) optional for acceleration

### Next 30 Days

1. Week 1: Analytics + recruit 100 users
2. Week 2-3: Surveys + interviews
3. Week 4: Go/Pivot/Kill decision
4. If GO: Ship paywall in Week 5

---

**Decision:** PROCEED with validation plan. Strong fundamentals justify investment of time and modest capital ($300-500) to test PMF. Bootstrap path viable, with seed round as option if metrics exceed targets.

---

*Document Version: 1.0*
*Created: December 11, 2025*
*Next Review: After 4-week validation (January 8, 2026)*
*Owner: Ruslan (Founder)*
*Status: DRAFT - Pending Validation*


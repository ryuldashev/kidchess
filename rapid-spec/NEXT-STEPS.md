# Next Steps

## After Validation (Day 14)

### If SUCCESS (>100 signups, >3% конверсия, >40% "would pay")

1. **Week 3-4: Построить MVP**
   - [ ] Собрать прототип по PRODUCT.md (5-7 дней)
   - [ ] Подключить Stripe
   - [ ] Пустить первых 20 юзеров из waitlist
   - [ ] Собрать feedback

2. **Week 5-6: Первые платящие**
   - [ ] Открыть для всего waitlist
   - [ ] Включить paywall
   - [ ] Цель: 10-20 платящих юзеров
   - [ ] Итерировать по feedback

3. **Month 2: Scale**
   - [ ] `/startup-spec --from-rapid` для полной документации
   - [ ] Нанять фрилансера на контент
   - [ ] Увеличить paid budget до $200-500/month
   - [ ] Цель: 100 платящих юзеров

### If PARTIAL (50-100 signups, mixed signals)

1. **Анализ данных**
   - [ ] Какие каналы сработали лучше?
   - [ ] Какой messaging резонировал?
   - [ ] Что писали в ответах на опрос?

2. **Pivot options:**
   - **Возраст:** Сузить до 5-8 лет если 3-4 не заходит
   - **Фокус:** Только задачи (без уроков) vs полный курс
   - **Цена:** Попробовать $1.99 или $5.99
   - **Позиционирование:** "Шахматы" vs "Логика и мышление"

3. **Следующая итерация**
   - [ ] Обновить landing с новым messaging
   - [ ] Ещё 2 недели validation
   - [ ] Если опять partial → kill

### If FAIL (<50 signups, <2% конверсия, <20% "would pay")

1. **Post-mortem**
   - [ ] Почему не зашло? (рынок / messaging / каналы)
   - [ ] Что узнали?
   - [ ] Можно ли спасти с radical pivot?

2. **Kill criteria:**
   - Рынок слишком маленький
   - Родители не готовы платить за это
   - Конкуренция сильнее чем думали

3. **Следующая идея**
   - [ ] Записать learnings
   - [ ] Двигаться дальше
   - [ ] Время потрачено: 2 недели — это OK

---

## Path to Startup Spec

Когда есть traction (>50 платящих юзеров):

```bash
/startup-spec --from-rapid
```

Это расширяет rapid-spec в полную документацию:

| Rapid | → | Startup |
|-------|---|---------|
| BRIEF.md | → | BRIEF.md + FIRST-PRINCIPLES.md |
| ECONOMICS.md | → | unit-economics.md + pricing-strategy.md + financial-projections.md |
| PRODUCT.md | → | vision.md + features.md + user-journeys.md + ux-guidelines.md |
| GROWTH.md | → | gtm-strategy.md + acquisition-channels.md + funnel-design.md + retention.md |
| VALIDATION.md | → | Данные для всех секций |

**Добавляются новые секции:**
- 00-ai-core/ — AI strategy, model selection, data flywheel
- 02-technical/ — Architecture for scale
- 05-operations/ — DevOps, monitoring, incident response
- 06-legal/ — COPPA compliance (!), privacy, ToS
- 07-support/ — Documentation, FAQ, playbook
- 08-content/ — Marketing assets, brand voice

---

## Checklist перед стартом validation

- [ ] Landing page deployed
- [ ] Analytics настроена (Plausible)
- [ ] Email capture работает
- [ ] UTM tags для всех каналов
- [ ] Готовы 10 постов для комьюнити
- [ ] Список из 10 чатов/групп для постинга
- [ ] Опрос для Day 7 готов
- [ ] Календарь на 2 недели расписан

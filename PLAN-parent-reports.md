# Parent Session Report to Telegram

## Summary
After each play session, send a detailed report to parent's Telegram with:
- Session metrics (time, puzzles solved, errors, hints)
- Pack/theme information
- AI-powered recommendations

## Requirements
| Aspect | Decision |
|--------|----------|
| **Trigger** | After 10 min of inactivity (configurable) |
| **Metrics** | Full: time, puzzles, errors, hints, themes |
| **AI Recommendations** | Yes, via Claude Haiku |
| **Telegram Setup** | Parent configures via UI |
| **Backend** | Python FastAPI on Fly.io |

---

## Architecture

```
Frontend (StickyChess SPA)
├── SessionTracker (collect metrics)
├── IdleDetector (10 min timeout)
├── ParentSettings UI (chat_id config)
└── ReportService (POST to backend)
           │
           ▼
Backend (Fly.io - Python FastAPI)
├── POST /api/report → Format + LLM → Telegram
├── POST /api/validate-telegram → Test chat_id
├── Secrets: TELEGRAM_BOT_TOKEN, ANTHROPIC_API_KEY
           │
           ▼
Telegram Bot API → Parent's chat
```

---

## Implementation Phases

### Phase 1: Backend API
**New files to create:**

```
api/
├── main.py              # FastAPI app
├── routers/
│   ├── report.py        # POST /api/report
│   └── telegram.py      # POST /api/validate-telegram
├── services/
│   ├── telegram.py      # Send to Telegram
│   ├── llm.py           # Claude Haiku recommendations
│   └── formatter.py     # Message formatting
├── models/
│   └── session.py       # Pydantic models
├── requirements.txt
├── Dockerfile
└── fly.toml
```

**API Endpoints:**

1. `POST /api/report`
   - Input: `{ chat_id, session: {...metrics} }`
   - Action: Format message → LLM recommendation → Send to Telegram

2. `POST /api/validate-telegram`
   - Input: `{ chat_id }`
   - Action: Send test message, return validity

**Security:**
- Rotate exposed bot token via @BotFather
- Store new token in `fly secrets set TELEGRAM_BOT_TOKEN=...`

---

### Phase 2: Frontend Session Tracking

**New file:** `js/session-tracker.js`

```javascript
const SessionTracker = {
  data: {
    startTime: null,
    mode: null,           // 'kids' | 'puzzle' | 'ai'
    packId: null,
    packName: null,
    levelsAttempted: 0,
    levelsCompleted: 0,
    levelsFailed: 0,
    hintsUsed: 0,
    wrongMoves: 0,
    lastActivityTime: null
  },

  startSession(mode, packId, packName) {...},
  recordActivity() {...},
  incrementWrongMoves() {...},
  incrementHints() {...},
  completeLevel() {...},
  failLevel() {...},
  getData() {...},
  clear() {...}
};
```

**Integration points in `js/game.js`:**

| Event | Method | Integration |
|-------|--------|-------------|
| Start session | `selectPack()` :287 | `SessionTracker.startSession()` |
| Start kids | `startKidsMode()` :347 | `SessionTracker.startSession('kids')` |
| Start AI | `startAIGame()` :292 | `SessionTracker.startSession('ai')` |
| Any move | `makeKidsMove()`, `makeMove()` | `SessionTracker.recordActivity()` |
| Wrong move | `showWrongMove()` :1132 | `SessionTracker.incrementWrongMoves()` |
| Hint used | `showHint()` :1301 | `SessionTracker.incrementHints()` |
| Level won | `handleKidsWin()` :598, `puzzleCompleted()` :1207 | `SessionTracker.completeLevel()` |
| Level lost | `handleKidsLose()` :568 | `SessionTracker.failLevel()` |

---

### Phase 3: Idle Detection

**New file:** `js/idle-detector.js`

```javascript
const IdleDetector = {
  timeout: null,
  defaultIdleMinutes: 10,

  start() {
    this.resetTimer();
    ['click', 'touchstart', 'keydown'].forEach(event =>
      document.addEventListener(event, () => this.resetTimer())
    );

    // Handle tab close
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.handleIdle();
    });

    window.addEventListener('beforeunload', () => this.handleIdle());
  },

  resetTimer() {
    clearTimeout(this.timeout);
    const minutes = ParentSettings.get('reportAfterMinutes') || 10;
    this.timeout = setTimeout(() => this.handleIdle(), minutes * 60 * 1000);
  },

  handleIdle() {
    if (!SessionTracker.hasData()) return;
    if (!ParentSettings.get('chatId')) return;
    ReportService.send(SessionTracker.getData());
    SessionTracker.clear();
  }
};
```

---

### Phase 4: Parent Settings UI

**Add to `index.html`:**

```html
<div id="parent-modal" class="modal">
  <div class="modal-content parent-modal">
    <h2>Настройки родителя</h2>

    <div class="setting-group">
      <label>Telegram Chat ID</label>
      <input type="text" id="parent-chat-id" placeholder="Ваш chat_id">
      <p class="hint">Напишите @userinfobot чтобы узнать ID</p>
      <button id="validate-tg-btn">Проверить</button>
    </div>

    <div class="setting-group">
      <label>Отчёт после</label>
      <select id="idle-timeout">
        <option value="5">5 мин</option>
        <option value="10" selected>10 мин</option>
        <option value="15">15 мин</option>
      </select>
    </div>

    <div class="setting-group">
      <input type="checkbox" id="enable-ai" checked>
      <label>AI-рекомендации</label>
    </div>

    <button onclick="ParentSettings.save()">Сохранить</button>
  </div>
</div>
```

**New file:** `js/parent-settings.js`

```javascript
const ParentSettings = {
  get(key) { return JSON.parse(localStorage.getItem('parentSettings') || '{}')[key]; },
  set(key, value) {...},
  open() {...},
  close() {...},
  save() {...},
  validateTelegram() {...}  // POST to /api/validate-telegram
};
```

**Add menu button** in pack selection area.

---

### Phase 5: Report Message Format

```
📊 StickyChess — Отчёт о занятии

👶 Режим: Kids Mode
📍 Пак: Учимся думать
⏱ Время: 45 минут

📈 Результаты:
✅ Пройдено: 9 уровней
❌ Не пройдено: 3
💡 Подсказок: 5
🔄 Неверных ходов: 8

🦊 Рекомендация:
Отличный прогресс! Попробуйте пак "Почти мастер".

---
StickyChess | stickchess.surge.sh
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `js/game.js` | Add SessionTracker integration calls |
| `index.html` | Add parent settings modal, include new JS files |
| `css/style.css` | Styles for parent modal |

## Files to Create

| File | Purpose |
|------|---------|
| `js/session-tracker.js` | Session metrics collection |
| `js/idle-detector.js` | Inactivity detection |
| `js/parent-settings.js` | Settings UI logic |
| `js/report-service.js` | API client for backend |
| `api/*` | Backend FastAPI app on Fly.io |

---

## Cost Estimate

| Component | Monthly Cost |
|-----------|--------------|
| Fly.io (shared-cpu-1x) | $0-5 |
| Claude Haiku (~1000 reports) | ~$0.50 |
| Telegram API | Free |
| **Total** | **~$5/month** |

---

## Edge Cases

1. **Tab closed before send**: Use `navigator.sendBeacon()` in `beforeunload`
2. **No internet**: Queue in localStorage, retry on next session
3. **Invalid chat_id**: Validate during setup, graceful fail on send
4. **Rate limiting**: Max 1 report per 5 minutes

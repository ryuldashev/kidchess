// KidChess - Шахматы для детей

// Эмодзи фруктов и овощей для пешек противника (Kids Mode)
const FRUIT_EMOJIS = ['🍎', '🍊', '🍋', '🍇', '🍓', '🥕', '🍅', '🥒'];

// 3D-стиль SVG фигуры (реалистичные с градиентами)
const PIECE_SVG = {
    // Белые фигуры
    wK: `<svg viewBox="0 0 45 45"><defs><linearGradient id="wKg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff"/><stop offset="100%" style="stop-color:#ccc"/></linearGradient></defs><g fill="url(#wKg)" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"/></g></svg>`,
    wQ: `<svg viewBox="0 0 45 45"><defs><linearGradient id="wQg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff"/><stop offset="100%" style="stop-color:#ccc"/></linearGradient></defs><g fill="url(#wQg)" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-3.5-12.5-5.5 13.5-5.5-13.5L13 25 6.5 13.5 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0023 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0123 0M12.5 31.5h20M11.5 34.5a35 35 1 0022 0M10.5 37.5a35 35 1 0024 0" fill="none"/></g></svg>`,
    wR: `<svg viewBox="0 0 45 45"><defs><linearGradient id="wRg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff"/><stop offset="100%" style="stop-color:#ccc"/></linearGradient></defs><g fill="url(#wRg)" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>`,
    wB: `<svg viewBox="0 0 45 45"><defs><linearGradient id="wBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff"/><stop offset="100%" style="stop-color:#ccc"/></linearGradient></defs><g fill="url(#wBg)" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="none" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none"/></g></svg>`,
    wN: `<svg viewBox="0 0 45 45"><defs><linearGradient id="wNg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff"/><stop offset="100%" style="stop-color:#ccc"/></linearGradient></defs><g fill="url(#wNg)" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0zM14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z" fill="#333" stroke="none"/></g></svg>`,
    wP: `<svg viewBox="0 0 45 45"><defs><linearGradient id="wPg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff"/><stop offset="100%" style="stop-color:#ccc"/></linearGradient></defs><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="url(#wPg)" stroke="#333" stroke-width="1.5" stroke-linecap="round"/></svg>`,

    // Чёрные фигуры
    bK: `<svg viewBox="0 0 45 45"><defs><linearGradient id="bKg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#555"/><stop offset="100%" style="stop-color:#222"/></linearGradient></defs><g fill="url(#bKg)" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#fff" stroke-width="1"/></g></svg>`,
    bQ: `<svg viewBox="0 0 45 45"><defs><linearGradient id="bQg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#555"/><stop offset="100%" style="stop-color:#222"/></linearGradient></defs><g fill="url(#bQg)" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-3.5-12.5-5.5 13.5-5.5-13.5L13 25 6.5 13.5 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0023 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0123 0m-22.5 2.5h20m-21 3a35 35 1 0022 0m-23 3a35 35 1 0024 0" fill="none" stroke="#fff" stroke-width="1"/></g></svg>`,
    bR: `<svg viewBox="0 0 45 45"><defs><linearGradient id="bRg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#555"/><stop offset="100%" style="stop-color:#222"/></linearGradient></defs><g fill="url(#bRg)" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z" stroke-linecap="butt"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/><path d="M12 35.5h21m-20-4h19m-18-2.5h17m-17-13h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
    bB: `<svg viewBox="0 0 45 45"><defs><linearGradient id="bBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#555"/><stop offset="100%" style="stop-color:#222"/></linearGradient></defs><g fill="url(#bBg)" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><circle cx="22.5" cy="8" r="2.5"/><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none" stroke="#fff" stroke-width="1"/></g></svg>`,
    bN: `<svg viewBox="0 0 45 45"><defs><linearGradient id="bNg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#555"/><stop offset="100%" style="stop-color:#222"/></linearGradient></defs><g fill="url(#bNg)" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0zM14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z" fill="#fff"/></g></svg>`,
    bP: `<svg viewBox="0 0 45 45"><defs><linearGradient id="bPg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#555"/><stop offset="100%" style="stop-color:#222"/></linearGradient></defs><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="url(#bPg)" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

// Создать SVG элемент из строки безопасным способом
function createPieceSVG(svgString) {
    const parser = new DOMParser();
    const svgWithNs = svgString.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    const doc = parser.parseFromString(svgWithNs, 'image/svg+xml');
    const svg = doc.documentElement;

    const parseError = svg.querySelector('parsererror');
    if (parseError) {
        console.error('SVG parsing error:', parseError.textContent);
        return null;
    }

    return svg;
}

// Telegram Bot конфиг для репортов ошибок
const TELEGRAM_CONFIG = {
    botToken: '8362093606:AAH9NrQt66zR-0OhTac54zxbHn4LyQKVhVU',
    chatId: '82493329'
};

// Umami Analytics
const Analytics = {
    track(event, data = {}) {
        if (typeof umami !== 'undefined') {
            umami.track(event, data);
        }
    },

    // Трекинг ходов с полной информацией
    trackMove(result, mode, player, context = {}) {
        this.track('move', {
            mode: mode,          // 'puzzle', 'kids', 'ai'
            player: player,      // 'user', 'opponent', 'ai'
            piece: result.piece, // 'p', 'n', 'b', 'r', 'q', 'k'
            from: result.from,
            to: result.to,
            captured: result.captured || null,
            promotion: result.promotion || null,
            san: result.san,     // 'Nf3', 'exd5', etc.
            ...context
        });
    }
};

// Игровое состояние
const Game = {
    chess: null,
    currentPuzzle: null,
    currentPuzzleIndex: 0,
    currentPack: null,
    currentPackPuzzles: [],
    solutionIndex: 0,
    selectedSquare: null,
    possibleMoves: [],
    lastMove: null,
    boardBounds: null,
    hintsUsed: 0,
    currentHintIndex: 0,
    completedPuzzles: {},  // { packId: Set of puzzle ids }

    // AI Mode
    isAIMode: false,
    playerColor: 'w',
    aiThinking: false,
    gameOver: false,
    aiDifficulty: 1,  // 1 = easy
    aiMoveCount: 0,
    aiCaptureCount: 0,

    // Kids Mode
    isKidsMode: false,
    kidsLevelIndex: 0,
    kidsCompletedLevels: {},  // { packId: Set of level ids }
    kidsEnemyMoveCounter: 0,  // счётчик для определения когда ходит противник

    // Timer для автоперехода к следующему уровню (чтобы можно было отменить при ручном переходе)
    nextLevelTimer: null,

    // Инициализация
    async init() {
        this.chess = new Chess();
        await this.loadProgress();
        this.renderPackSelection();
        this.attachEventListeners();
    },

    // Загрузить прогресс (CloudStorage в Telegram, localStorage в браузере)
    async loadProgress() {
        try {
            const saved = await TG.storage.get('kidChessProgress');
            if (saved) {
                const data = JSON.parse(saved);
                this.completedPuzzles = {};
                for (const packId in data.completed) {
                    this.completedPuzzles[packId] = new Set(data.completed[packId]);
                }
                this.currentPack = data.currentPack || null;
                this.currentPuzzleIndex = data.currentIndex || 0;
                // Kids Mode progress (per pack)
                if (data.kidsCompleted) {
                    this.kidsCompletedLevels = {};
                    for (const packId in data.kidsCompleted) {
                        this.kidsCompletedLevels[packId] = new Set(data.kidsCompleted[packId]);
                    }
                }
            }
        } catch (e) {
            console.warn('Could not load progress:', e);
        }
    },

    // Сохранить прогресс (CloudStorage в Telegram, localStorage в браузере)
    saveProgress() {
        try {
            const completed = {};
            for (const packId in this.completedPuzzles) {
                completed[packId] = Array.from(this.completedPuzzles[packId]);
            }
            const kidsCompleted = {};
            for (const packId in this.kidsCompletedLevels) {
                kidsCompleted[packId] = Array.from(this.kidsCompletedLevels[packId]);
            }
            const data = JSON.stringify({
                completed,
                currentPack: this.currentPack,
                currentIndex: this.currentPuzzleIndex,
                kidsCompleted
            });
            TG.storage.set('kidChessProgress', data);
        } catch (e) {
            console.warn('Could not save progress:', e);
        }
    },

    // Получить случайный эмодзи животного для премиум пака
    getRandomAnimalEmoji(packId) {
        const saved = localStorage.getItem('premiumEmojis');
        if (saved) {
            const emojis = JSON.parse(saved);
            if (emojis[packId]) return emojis[packId];
        }

        const animals = ['🦊', '🐻', '🐰', '🦁', '🐼', '🐨', '🐯', '🦄', '🐸', '🦋', '🐶', '🐱'];
        const emoji = animals[Math.floor(Math.random() * animals.length)];

        // Сохраняем
        const emojis = saved ? JSON.parse(saved) : {};
        emojis[packId] = emoji;
        localStorage.setItem('premiumEmojis', JSON.stringify(emojis));

        return emoji;
    },

    // Отрисовать экран выбора паков (безопасный DOM метод)
    renderPackSelection() {
        const grid = document.getElementById('pack-grid');

        // Очистить безопасно
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        const packs = Object.values(PUZZLE_PACKS);
        packs.forEach(pack => {
            const card = document.createElement('div');
            card.className = 'pack-card';
            if (pack.fullWidth) {
                card.classList.add('full-width');
            }
            if (pack.isDisabled) {
                card.classList.add('disabled');
            }
            card.dataset.packId = pack.id;

            // Emoji (генерируем для премиум паков)
            const emoji = document.createElement('span');
            emoji.className = 'pack-card-emoji';
            if (pack.isPremium && !pack.emoji) {
                emoji.textContent = this.getRandomAnimalEmoji(pack.id);
            } else {
                emoji.textContent = pack.emoji;
            }
            card.appendChild(emoji);

            // Name
            const name = document.createElement('div');
            name.className = 'pack-card-name';
            name.textContent = pack.name;
            card.appendChild(name);

            // Count or description
            const count = document.createElement('div');
            count.className = 'pack-card-count';
            if (pack.isDisabled) {
                count.textContent = pack.subtitle || 'PRO';
            } else if (pack.isAIMode) {
                count.textContent = pack.description;
            } else if (pack.isKidsMode) {
                const packCompleted = this.kidsCompletedLevels[pack.id] ? this.kidsCompletedLevels[pack.id].size : 0;
                const kidsTotal = pack.levels ? pack.levels.length : 0;
                count.textContent = packCompleted + '/' + kidsTotal + ' уровней';
            } else {
                const completed = this.completedPuzzles[pack.id] ? this.completedPuzzles[pack.id].size : 0;
                const total = pack.puzzles.length;
                count.textContent = completed + '/' + total + ' задач';
            }
            card.appendChild(count);

            // Progress bar (only for kids mode, not disabled)
            if (pack.isKidsMode && !pack.isDisabled && pack.levels) {
                const packCompleted = this.kidsCompletedLevels[pack.id] ? this.kidsCompletedLevels[pack.id].size : 0;
                const progressValue = (packCompleted / pack.levels.length) * 100;
                const progressBar = document.createElement('div');
                progressBar.className = 'pack-card-progress';
                progressBar.style.width = progressValue + '%';
                progressBar.style.background = pack.color;
                card.appendChild(progressBar);
            }

            // Click handlers
            if (pack.isDisabled && pack.isPremium) {
                // Premium locked packs - show PRO modal (fake door)
                card.addEventListener('click', () => this.showProModal(pack.id));
            } else if (!pack.isDisabled) {
                card.addEventListener('click', () => this.selectPack(pack.id));
            }
            grid.appendChild(card);
        });

        Analytics.track('view_pack_selection');
    },

    // Выбрать пак
    selectPack(packId) {
        const pack = PUZZLE_PACKS[packId];
        this.currentPack = packId;

        // Проверяем AI режим
        if (pack.isAIMode) {
            this.startAIGame();
            return;
        }

        // Проверяем Kids режим
        if (pack.isKidsMode) {
            this.startKidsMode();
            return;
        }

        this.isAIMode = false;
        this.isKidsMode = false;
        this.currentPackPuzzles = pack.puzzles;

        if (!this.completedPuzzles[packId]) {
            this.completedPuzzles[packId] = new Set();
        }

        // Найти первый нерешённый puzzle в паке
        const firstUnsolved = this.currentPackPuzzles.findIndex(
            p => !this.completedPuzzles[packId].has(p.id)
        );
        this.currentPuzzleIndex = firstUnsolved >= 0 ? firstUnsolved : 0;

        this.showScreen('game');
        this.loadPuzzle(this.currentPuzzleIndex);
        this.saveProgress();

        Analytics.track('select_pack', { pack: packId });
        SoundManager.playNewGame();
    },

    // Начать игру с AI
    startAIGame() {
        this.isAIMode = true;
        this.playerColor = 'w';
        this.aiThinking = false;
        this.gameOver = false;
        this.selectedSquare = null;
        this.possibleMoves = [];
        this.lastMove = null;
        this.aiMoveCount = 0;
        this.aiCaptureCount = 0;

        // Закрыть модалку результата если открыта
        this.closeResultModal();

        // Новая партия
        this.chess.reset();

        // Показать полную доску
        this.boardBounds = { minCol: 0, maxCol: 7, minRow: 0, maxRow: 7 };

        this.showScreen('game');
        this.applyTheme('blue');
        this.updateAIHeader();
        this.renderBoard();
        this.updateAIHintBlock();

        Analytics.track('start_ai_game');
        SoundManager.playNewGame();
    },

    // Обновить header для AI режима
    updateAIHeader() {
        document.getElementById('level-number').textContent = 'Игра с ИИ';
        document.getElementById('puzzle-title').textContent = 'Твой ход!';
        document.getElementById('progress').textContent = '';
    },

    // Обновить hint block для AI режима (взрослый стиль)
    updateAIHintBlock() {
        if (this.gameOver) return;

        if (this.aiThinking) {
            this.updateHintBlock('Анализ...', true);
        } else if (this.chess.turn() === this.playerColor) {
            if (this.chess.in_check()) {
                this.updateHintBlock('Шах. Защити короля.', true);
            } else {
                this.updateHintBlock('Твой ход.', false);
            }
        }
    },

    // === KIDS MODE ===

    // Начать Kids Mode
    startKidsMode() {
        this.isKidsMode = true;
        this.isAIMode = false;
        this.gameOver = false;
        this.selectedSquare = null;
        this.possibleMoves = [];
        this.lastMove = null;
        this.kidsEnemyMoveCounter = 0;

        const pack = PUZZLE_PACKS[this.currentPack];

        // Инициализировать прогресс для этого пака если нет
        if (!this.kidsCompletedLevels[this.currentPack]) {
            this.kidsCompletedLevels[this.currentPack] = new Set();
        }

        // Найти первый нерешённый уровень
        let firstUnsolved = pack.levels.findIndex(
            level => !this.kidsCompletedLevels[this.currentPack].has(level.id)
        );
        if (firstUnsolved < 0) firstUnsolved = 0;

        this.kidsLevelIndex = firstUnsolved;

        this.showScreen('game');
        this.loadKidsLevel(this.kidsLevelIndex);
        this.saveProgress();

        Analytics.track('start_kids_mode', { pack: this.currentPack });
        SoundManager.playNewGame();
    },

    // Загрузить уровень Kids Mode
    loadKidsLevel(index) {
        // Отменить автопереход, если он был запланирован
        if (this.nextLevelTimer) {
            clearTimeout(this.nextLevelTimer);
            this.nextLevelTimer = null;
        }

        const pack = PUZZLE_PACKS[this.currentPack];
        const levels = pack.levels;

        if (index < 0) index = levels.length - 1;
        if (index >= levels.length) index = 0;

        this.kidsLevelIndex = index;
        const level = levels[index];

        this.gameOver = false;
        this.selectedSquare = null;
        this.possibleMoves = [];
        this.lastMove = null;
        this.kidsEnemyMoveCounter = 0;

        // Загрузить позицию
        this.chess.load(level.fen);

        // Применить тему по цвету пака
        this.applyTheme('kids');

        // Обновить UI
        this.updateKidsHeader(level, pack);
        this.updateKidsProgress();

        // Показать речевую подсказку для Kids Mode
        if (level.hint) {
            this.showSpeechHint(level.hint);
        } else {
            this.updateHintBlock('👆', false);
        }

        // Вычислить границы доски и отрисовать
        this.calculateBoardBounds();
        this.renderBoard();

        Analytics.track('load_kids_level', { pack: this.currentPack, level: level.id });
    },

    // Обновить header для Kids Mode
    updateKidsHeader(level, pack) {
        document.getElementById('level-number').textContent = pack.name + ' • ' + (this.kidsLevelIndex + 1);
        document.getElementById('puzzle-title').textContent = level.name || 'Съешь всех!';
    },

    // Обновить прогресс Kids Mode
    updateKidsProgress() {
        const pack = PUZZLE_PACKS[this.currentPack];
        const completed = this.kidsCompletedLevels[this.currentPack] ? this.kidsCompletedLevels[this.currentPack].size : 0;
        const total = pack.levels.length;
        document.getElementById('progress').textContent = completed + '/' + total + ' пройдено';
    },

    // Обработка клика в Kids Mode
    handleKidsCellClick(square) {
        if (this.gameOver) return;

        const piece = this.chess.get(square);

        // Выбор своей фигуры (белые)
        if (piece && piece.color === 'w') {
            this.selectedSquare = square;
            this.possibleMoves = this.chess.moves({ square: square, verbose: true });
            this.updateHighlights();
            SoundManager.playSelect();
            TG.haptic('selection');
            return;
        }

        // Попытка хода
        if (this.selectedSquare) {
            const move = this.possibleMoves.find(m => m.to === square);
            if (move) {
                this.makeKidsMove(move);
                return;
            }
        }

        this.selectedSquare = null;
        this.possibleMoves = [];
        this.updateHighlights();
    },

    // Выполнить ход в Kids Mode
    makeKidsMove(move) {
        const isCapture = move.captured;
        const result = this.chess.move(move);
        if (!result) return;

        this.lastMove = result;
        this.selectedSquare = null;
        this.possibleMoves = [];

        if (isCapture) {
            SoundManager.playCapture();
            TG.haptic('heavy');
        } else {
            SoundManager.playMove();
            TG.haptic('medium');
        }

        Analytics.trackMove(result, 'kids', 'user', { pack: this.currentPack });

        // Проверка победы (все чёрные съедены)
        if (this.checkKidsWin()) {
            this.renderBoard();
            this.handleKidsWin();
            return;
        }

        // Логика ходов противника
        const pack = PUZZLE_PACKS[this.currentPack];
        const enemyMoveRate = pack.enemyMoveRate || 0;

        if (enemyMoveRate > 0) {
            this.kidsEnemyMoveCounter++;
            // rate=1: ходит 1 из 3 (каждый 3-й ход)
            // rate=2: ходит 2 из 3 (каждый 2-й и 3-й ход)
            if (this.kidsEnemyMoveCounter % 3 < enemyMoveRate) {
                // Ход противника
                setTimeout(() => {
                    this.makeKidsEnemyMove();
                }, 300);
                return;
            }
        }

        // Вернуть ход белым если противник не ходит
        const fen = this.chess.fen();
        const newFen = fen.replace(' b ', ' w ');
        this.chess.load(newFen);

        this.renderBoard();
    },

    // Ход противника в Kids Mode (простой AI)
    makeKidsEnemyMove() {
        const moves = this.chess.moves({ verbose: true });
        if (moves.length === 0) {
            // Нет ходов — вернуть ход белым
            const fen = this.chess.fen();
            const newFen = fen.replace(' b ', ' w ');
            this.chess.load(newFen);
            this.renderBoard();
            return;
        }

        // Выбираем случайный ход
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        const result = this.chess.move(randomMove);

        if (result) {
            this.lastMove = result;
            if (result.captured) {
                SoundManager.playCapture();
            } else {
                SoundManager.playMove();
            }
            Analytics.trackMove(result, 'kids', 'opponent', { pack: this.currentPack });
        }

        // Вернуть ход белым
        const fen = this.chess.fen();
        const newFen = fen.replace(' b ', ' w ');
        this.chess.load(newFen);

        this.renderBoard();

        // Проверка — есть ли ещё белые фигуры?
        if (this.checkKidsLose()) {
            this.handleKidsLose();
        }
    },

    // Проверить проигрыш в Kids Mode (все белые съедены)
    checkKidsLose() {
        const files = 'abcdefgh';
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = files[col] + (8 - row);
                const piece = this.chess.get(square);
                if (piece && piece.color === 'w') {
                    return false; // Ещё есть белые фигуры
                }
            }
        }
        return true; // Все белые съедены
    },

    // Обработка проигрыша в Kids Mode
    handleKidsLose() {
        this.gameOver = true;
        document.getElementById('puzzle-title').textContent = '😔 Попробуй ещё!';
        this.updateHintBlock('Ничего, попробуй снова!', true);
        SoundManager.playError();
        TG.haptic('error');

        Analytics.track('kids_level_lost', { pack: this.currentPack });

        // Перезапуск уровня через 2 секунды
        this.nextLevelTimer = setTimeout(() => {
            this.loadKidsLevel(this.kidsLevelIndex);
        }, 2000);
    },

    // Проверить победу в Kids Mode (все чёрные фигуры съедены)
    checkKidsWin() {
        const files = 'abcdefgh';
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = files[col] + (8 - row);
                const piece = this.chess.get(square);
                if (piece && piece.color === 'b') {
                    return false; // Ещё есть чёрные фигуры
                }
            }
        }
        return true; // Все чёрные съедены!
    },

    // Обработка победы в Kids Mode
    handleKidsWin() {
        this.gameOver = true;
        const pack = PUZZLE_PACKS[this.currentPack];
        const level = pack.levels[this.kidsLevelIndex];

        // Отметить уровень как пройденный
        if (!this.kidsCompletedLevels[this.currentPack]) {
            this.kidsCompletedLevels[this.currentPack] = new Set();
        }
        this.kidsCompletedLevels[this.currentPack].add(level.id);
        this.saveProgress();

        document.getElementById('puzzle-title').textContent = '🎉 Молодец!';
        this.showWinBubble();

        SoundManager.playNewGame();
        TG.haptic('success');

        Analytics.track('kids_level_completed', { pack: this.currentPack, level: level.id });

        // Переход к следующему уровню через 2 секунды
        this.nextLevelTimer = setTimeout(() => {
            this.loadKidsLevel(this.kidsLevelIndex + 1);
        }, 2000);
    },

    // Показать победный бабл с эмодзи и конфетти
    showWinBubble() {
        const hintBlock = document.getElementById('hint-block');
        const hintText = document.getElementById('hint-text');

        // Очистить
        while (hintText.firstChild) {
            hintText.removeChild(hintText.firstChild);
        }

        // Добавить победные эмодзи
        const winEmojis = ['🎉', '⭐', '🏆'];
        winEmojis.forEach(emoji => {
            const span = document.createElement('span');
            span.className = 'win-emoji';
            span.textContent = emoji;
            hintText.appendChild(span);
        });

        // Добавить классы
        hintBlock.classList.remove('speech-mode', 'collapsed');
        hintBlock.classList.add('expanded', 'win-mode');

        // Запустить конфетти
        this.launchConfetti(document.getElementById('board-container'));
    },

    // Простой эффект конфетти
    launchConfetti(container) {
        const colors = ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3', '#FF9800', '#E91E63'];
        const confettiCount = 30;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (1 + Math.random()) + 's';
            container.appendChild(confetti);

            // Удалить после анимации
            setTimeout(() => confetti.remove(), 2000);
        }
    },

    // Показать речевой бабл с подсказкой [фигура, направление, действие]
    showSpeechHint(symbols) {
        const hintBlock = document.getElementById('hint-block');
        const hintText = document.getElementById('hint-text');

        // Очистить предыдущий контент безопасно
        while (hintText.firstChild) {
            hintText.removeChild(hintText.firstChild);
        }

        // Создать символы: [0]=фигура, [1]=направление, [2]=действие
        symbols.forEach((symbol, index) => {
            const span = document.createElement('span');
            span.className = 'hint-symbol';

            // Добавить специфичный класс
            if (index === 0) span.classList.add('piece');
            if (index === 1) span.classList.add('direction');
            if (index === 2) span.classList.add('action');

            span.textContent = symbol;
            hintText.appendChild(span);
        });

        hintBlock.classList.add('expanded', 'speech-mode');
        hintBlock.classList.remove('collapsed');
    },

    // Подсказка в Kids Mode — показать эмодзи и выделить фигуру
    showKidsHint() {
        if (this.gameOver) return;

        const pack = PUZZLE_PACKS[this.currentPack];
        const level = pack.levels[this.kidsLevelIndex];

        // Показать речевую подсказку
        if (level.hint) {
            this.showSpeechHint(level.hint);
        }

        // Найти и выделить первую белую фигуру
        const files = 'abcdefgh';
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = files[col] + (8 - row);
                const piece = this.chess.get(square);
                if (piece && piece.color === 'w') {
                    const cell = document.querySelector('[data-square="' + square + '"]');
                    if (cell) {
                        cell.classList.add('hint-highlight');
                        setTimeout(() => cell.classList.remove('hint-highlight'), 2000);
                    }
                    SoundManager.playSelect();
                    return;
                }
            }
        }
    },

    // === END KIDS MODE ===

    // Переключение экранов
    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenName + '-screen').classList.add('active');
    },

    // Вернуться к выбору паков
    goBack() {
        TG.haptic('light');
        this.showScreen('pack-select');
        this.renderPackSelection();
        Analytics.track('back_to_packs');
    },

    // Загрузить puzzle
    loadPuzzle(index) {
        // Отменить автопереход, если он был запланирован
        if (this.nextLevelTimer) {
            clearTimeout(this.nextLevelTimer);
            this.nextLevelTimer = null;
        }

        if (!this.currentPackPuzzles.length) return;

        if (index < 0) index = this.currentPackPuzzles.length - 1;
        if (index >= this.currentPackPuzzles.length) index = 0;

        this.currentPuzzleIndex = index;
        this.currentPuzzle = this.currentPackPuzzles[index];
        this.solutionIndex = 0;
        this.selectedSquare = null;
        this.possibleMoves = [];
        this.lastMove = null;
        this.hintsUsed = 0;
        this.currentHintIndex = 0;

        // Загрузить позицию
        this.chess.load(this.currentPuzzle.fen);

        // Применить тему
        this.applyTheme(this.currentPuzzle.theme);

        // Обновить UI
        this.updateHeader();
        this.updateProgress();
        this.resetHintBlock();

        // Вычислить границы доски и отрисовать
        this.calculateBoardBounds();
        this.renderBoard();

        this.saveProgress();

        Analytics.track('load_puzzle', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id
        });
    },

    // Вычислить границы доски (динамическая или фиксированная)
    calculateBoardBounds() {
        const pack = PUZZLE_PACKS[this.currentPack];

        // Для Kids Mode с фиксированным размером доски
        if (pack && pack.isKidsMode && pack.boardSize) {
            const size = pack.boardSize;
            // Доска в правом нижнем углу (e-h, 1-4 для 4x4)
            this.boardBounds = {
                minCol: 8 - size,
                maxCol: 7,
                minRow: 8 - size,
                maxRow: 7
            };
            return;
        }

        // Динамическая доска для остальных режимов
        const files = 'abcdefgh';
        let minCol = 7, maxCol = 0, minRow = 7, maxRow = 0;
        let hasPieces = false;

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = files[col] + (8 - row);
                const piece = this.chess.get(square);
                if (piece) {
                    hasPieces = true;
                    minCol = Math.min(minCol, col);
                    maxCol = Math.max(maxCol, col);
                    minRow = Math.min(minRow, row);
                    maxRow = Math.max(maxRow, row);
                }
            }
        }

        if (!hasPieces) {
            this.boardBounds = { minCol: 0, maxCol: 7, minRow: 0, maxRow: 7 };
            return;
        }

        // Добавить отступ в 1 клетку вокруг
        minCol = Math.max(0, minCol - 1);
        maxCol = Math.min(7, maxCol + 1);
        minRow = Math.max(0, minRow - 1);
        maxRow = Math.min(7, maxRow + 1);

        // Минимум 4x4 доска для всех режимов
        while (maxCol - minCol < 3) {
            if (minCol > 0) minCol--;
            else if (maxCol < 7) maxCol++;
        }
        while (maxRow - minRow < 3) {
            if (minRow > 0) minRow--;
            else if (maxRow < 7) maxRow++;
        }

        this.boardBounds = { minCol, maxCol, minRow, maxRow };
    },

    // Получить реальную высоту viewport (с учётом Telegram)
    getViewportHeight() {
        // Telegram Mini App предоставляет точную высоту через CSS variable
        const tgHeight = getComputedStyle(document.documentElement).getPropertyValue('--tg-viewport-height');
        if (tgHeight && tgHeight !== '') {
            const parsed = parseInt(tgHeight);
            if (!isNaN(parsed) && parsed > 0) {
                return parsed;
            }
        }

        // Fallback: используем visualViewport API (более точный чем innerHeight)
        if (window.visualViewport) {
            return window.visualViewport.height;
        }

        // Последний fallback
        return window.innerHeight;
    },

    // Отрисовка доски
    renderBoard() {
        const board = document.getElementById('board');

        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }

        const { minCol, maxCol, minRow, maxRow } = this.boardBounds;
        const cols = maxCol - minCol + 1;
        const rows = maxRow - minRow + 1;

        // Используем реальную высоту viewport
        const viewportHeight = this.getViewportHeight();
        const viewportWidth = window.innerWidth;

        // Рассчитываем доступное пространство с учётом UI элементов
        // Header ~50px, Controls ~60px, HintBlock ~50px, paddings ~40px = ~200px
        const uiElementsHeight = Math.min(200, viewportHeight * 0.35);
        const availableHeight = viewportHeight - uiElementsHeight;

        // Максимальный размер доски - 50% от высоты viewport (адаптивно)
        const maxBoardHeight = Math.min(availableHeight, viewportHeight * 0.55);
        const maxBoardWidth = viewportWidth * 0.92;
        const cellSize = Math.min(
            Math.floor(maxBoardHeight / rows),
            Math.floor(maxBoardWidth / cols),
            75
        );

        document.documentElement.style.setProperty('--cell-size', cellSize + 'px');

        board.style.gridTemplateColumns = 'repeat(' + cols + ', var(--cell-size))';
        board.style.gridTemplateRows = 'repeat(' + rows + ', var(--cell-size))';

        const files = 'abcdefgh';

        for (let row = minRow; row <= maxRow; row++) {
            for (let col = minCol; col <= maxCol; col++) {
                const square = files[col] + (8 - row);
                const cell = document.createElement('div');
                cell.className = 'cell ' + ((row + col) % 2 === 0 ? 'light' : 'dark');
                cell.dataset.square = square;

                const piece = this.chess.get(square);
                if (piece) {
                    const pieceDiv = document.createElement('div');
                    pieceDiv.className = 'piece';

                    // В Kids Mode чёрные пешки — фрукты/овощи (если useFruits !== false)
                    const pack = PUZZLE_PACKS[this.currentPack];
                    const useFruits = pack && pack.useFruits !== false;
                    if (this.isKidsMode && useFruits && piece.color === 'b' && piece.type === 'p') {
                        const fruitEmoji = FRUIT_EMOJIS[col % FRUIT_EMOJIS.length];
                        pieceDiv.classList.add('fruit-piece');
                        pieceDiv.textContent = fruitEmoji;
                    } else {
                        const pieceKey = piece.color + piece.type.toUpperCase();
                        const svgString = PIECE_SVG[pieceKey];
                        if (svgString) {
                            const svg = createPieceSVG(svgString);
                            if (svg) {
                                pieceDiv.appendChild(svg);
                            }
                        }
                    }
                    cell.appendChild(pieceDiv);
                }

                if (row === maxRow) {
                    const fileCoord = document.createElement('span');
                    fileCoord.className = 'coord coord-file';
                    fileCoord.textContent = files[col];
                    cell.appendChild(fileCoord);
                }

                if (col === minCol) {
                    const rankCoord = document.createElement('span');
                    rankCoord.className = 'coord coord-rank';
                    rankCoord.textContent = 8 - row;
                    cell.appendChild(rankCoord);
                }

                board.appendChild(cell);
            }
        }

        this.updateHighlights();
    },

    // Обновить подсветку
    updateHighlights() {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('selected', 'last-move', 'hint-highlight');
            const hints = cell.querySelectorAll('.move-hint, .capture-hint');
            hints.forEach(h => h.remove());
        });

        if (this.selectedSquare) {
            const selectedCell = document.querySelector('[data-square="' + this.selectedSquare + '"]');
            if (selectedCell) {
                selectedCell.classList.add('selected');
            }

            this.possibleMoves.forEach(move => {
                const targetCell = document.querySelector('[data-square="' + move.to + '"]');
                if (targetCell) {
                    const hint = document.createElement('div');
                    hint.className = move.captured ? 'capture-hint' : 'move-hint';
                    targetCell.appendChild(hint);
                }
            });
        }

        if (this.lastMove) {
            const fromCell = document.querySelector('[data-square="' + this.lastMove.from + '"]');
            const toCell = document.querySelector('[data-square="' + this.lastMove.to + '"]');
            if (fromCell) fromCell.classList.add('last-move');
            if (toCell) toCell.classList.add('last-move');
        }
    },

    // Обработка клика на клетку
    handleCellClick(square) {
        // AI Mode
        if (this.isAIMode) {
            this.handleAICellClick(square);
            return;
        }

        // Kids Mode
        if (this.isKidsMode) {
            this.handleKidsCellClick(square);
            return;
        }

        // Puzzle Mode
        const playerColor = this.currentPuzzle.fen.includes(' w ') ? 'w' : 'b';

        if (this.chess.turn() !== playerColor) return;

        const piece = this.chess.get(square);

        if (piece && piece.color === playerColor) {
            this.selectedSquare = square;
            this.possibleMoves = this.chess.moves({ square: square, verbose: true });
            this.updateHighlights();
            SoundManager.playSelect();
            TG.haptic('selection');
            return;
        }

        if (this.selectedSquare) {
            const move = this.possibleMoves.find(m => m.to === square);
            if (move) {
                this.makeMove(move);
                return;
            }
        }

        this.selectedSquare = null;
        this.possibleMoves = [];
        this.updateHighlights();
    },

    // Обработка клика в AI режиме
    handleAICellClick(square) {
        if (this.gameOver || this.aiThinking) return;
        if (this.chess.turn() !== this.playerColor) return;

        const piece = this.chess.get(square);

        // Выбор своей фигуры
        if (piece && piece.color === this.playerColor) {
            this.selectedSquare = square;
            this.possibleMoves = this.chess.moves({ square: square, verbose: true });
            this.updateHighlights();
            SoundManager.playSelect();
            TG.haptic('selection');
            return;
        }

        // Попытка хода
        if (this.selectedSquare) {
            const move = this.possibleMoves.find(m => m.to === square);
            if (move) {
                this.makeAIGameMove(move);
                return;
            }
        }

        this.selectedSquare = null;
        this.possibleMoves = [];
        this.updateHighlights();
    },

    // Ход игрока в AI режиме
    async makeAIGameMove(move) {
        const isCapture = move.captured;
        const result = this.chess.move(move);
        if (!result) return;

        // Счётчики статистики
        this.aiMoveCount++;
        if (isCapture) this.aiCaptureCount++;

        this.lastMove = result;
        this.selectedSquare = null;
        this.possibleMoves = [];

        if (isCapture) {
            SoundManager.playCapture();
            TG.haptic('heavy');
        } else {
            SoundManager.playMove();
            TG.haptic('medium');
        }

        Analytics.trackMove(result, 'ai', 'user', { difficulty: this.aiDifficulty, moveNum: this.aiMoveCount });

        this.renderBoard();

        // Проверка окончания игры
        if (this.checkGameOver()) return;

        // Ход AI
        await this.makeAIMove();
    },

    // Ход AI
    async makeAIMove() {
        this.aiThinking = true;
        this.updateAIHintBlock();
        document.getElementById('puzzle-title').textContent = 'ИИ думает...';

        const move = await ChessAI.getMoveAsync(this.chess, this.aiDifficulty);

        if (move) {
            const isCapture = move.captured;
            const result = this.chess.move(move);

            if (result) {
                this.lastMove = result;

                if (isCapture) {
                    SoundManager.playCapture();
                } else {
                    SoundManager.playMove();
                }

                Analytics.trackMove(result, 'ai', 'ai', { difficulty: this.aiDifficulty });

                this.renderBoard();
            }
        }

        this.aiThinking = false;

        // Проверка окончания игры
        if (!this.checkGameOver()) {
            document.getElementById('puzzle-title').textContent = 'Твой ход!';
            this.updateAIHintBlock();
        }
    },

    // Проверить окончание игры
    checkGameOver() {
        if (this.chess.in_checkmate()) {
            this.gameOver = true;
            const winner = this.chess.turn() === this.playerColor ? 'ИИ' : 'Ты';
            const isPlayerWin = winner === 'Ты';

            document.getElementById('puzzle-title').textContent = isPlayerWin ? '🎉 Победа!' : '😔 Мат';

            if (isPlayerWin) {
                SoundManager.playNewGame();
                TG.haptic('success');
                this.playVictoryAnimation();
            } else {
                SoundManager.playError();
                TG.haptic('error');
            }

            // Показать модалку результата с задержкой
            setTimeout(() => {
                this.showResultModal(isPlayerWin ? 'win' : 'lose');
            }, 800);

            Analytics.track('ai_game_end', { winner: winner });
            return true;
        }

        if (this.chess.in_draw()) {
            this.gameOver = true;
            document.getElementById('puzzle-title').textContent = '🤝 Ничья!';

            // Показать модалку результата с задержкой
            setTimeout(() => {
                this.showResultModal('draw');
            }, 800);

            Analytics.track('ai_game_end', { winner: 'draw' });
            return true;
        }

        return false;
    },

    // Сделать ход
    makeMove(move) {
        const expectedMove = this.currentPuzzle.solution[this.solutionIndex];
        const moveUci = move.from + move.to + (move.promotion || '');

        if (moveUci !== expectedMove) {
            this.showWrongMove(move.to);
            SoundManager.playError();
            TG.haptic('error');
            Analytics.track('wrong_move', { puzzle: this.currentPuzzle.id });
            return;
        }

        const isCapture = move.captured;
        const result = this.chess.move(move);
        if (!result) return;

        this.lastMove = result;
        this.selectedSquare = null;
        this.possibleMoves = [];
        this.solutionIndex++;

        if (isCapture) {
            SoundManager.playCapture();
            TG.haptic('heavy');
        } else {
            SoundManager.playMove();
            TG.haptic('medium');
        }

        Analytics.trackMove(result, 'puzzle', 'user', { pack: this.currentPack, puzzle: this.currentPuzzle.id });

        this.calculateBoardBounds();
        this.renderBoard();

        const toCell = document.querySelector('[data-square="' + result.to + '"]');
        if (toCell) toCell.classList.add('correct');

        if (this.solutionIndex >= this.currentPuzzle.solution.length) {
            setTimeout(() => {
                this.puzzleCompleted();
            }, 500);
            return;
        }

        setTimeout(() => {
            this.makeOpponentMove();
        }, 500);
    },

    // Ход противника
    makeOpponentMove() {
        const opponentMove = this.currentPuzzle.solution[this.solutionIndex];
        if (!opponentMove) return;

        const from = opponentMove.substring(0, 2);
        const to = opponentMove.substring(2, 4);
        const promotion = opponentMove.length > 4 ? opponentMove[4] : undefined;

        const result = this.chess.move({ from, to, promotion });
        if (result) {
            this.lastMove = result;
            this.solutionIndex++;

            if (result.captured) {
                SoundManager.playCapture();
            } else {
                SoundManager.playMove();
            }

            Analytics.trackMove(result, 'puzzle', 'opponent', { pack: this.currentPack, puzzle: this.currentPuzzle.id });

            this.calculateBoardBounds();
            this.renderBoard();
        }
    },

    // Неправильный ход
    showWrongMove(square) {
        const cell = document.querySelector('[data-square="' + square + '"]');
        if (cell) {
            cell.classList.add('wrong');
            setTimeout(() => cell.classList.remove('wrong'), 400);
        }
    },

    // Puzzle завершён
    puzzleCompleted() {
        if (!this.completedPuzzles[this.currentPack]) {
            this.completedPuzzles[this.currentPack] = new Set();
        }
        this.completedPuzzles[this.currentPack].add(this.currentPuzzle.id);
        this.saveProgress();

        TG.haptic('success');
        this.playVictoryAnimation();

        Analytics.track('puzzle_completed', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id,
            hints: this.hintsUsed
        });

        setTimeout(() => {
            this.showStatus('Молодец!', 'success');
            SoundManager.playNewGame();
        }, 800);

        this.nextLevelTimer = setTimeout(() => {
            this.loadPuzzle(this.currentPuzzleIndex + 1);
        }, 2000);
    },

    // Анимация победы
    playVictoryAnimation() {
        const playerColor = this.currentPuzzle.fen.includes(' w ') ? 'w' : 'b';
        const enemyColor = playerColor === 'w' ? 'b' : 'w';
        const files = 'abcdefgh';

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = files[col] + (8 - row);
                const piece = this.chess.get(square);
                if (piece && piece.type === 'k' && piece.color === enemyColor) {
                    const kingCell = document.querySelector('[data-square="' + square + '"]');
                    if (kingCell) {
                        const kingPiece = kingCell.querySelector('.piece');
                        if (kingPiece) {
                            kingPiece.classList.add('checkmate-king');
                        }
                        kingCell.classList.add('victory-flash');
                    }
                }
            }
        }

        if (this.lastMove) {
            const attackerCell = document.querySelector('[data-square="' + this.lastMove.to + '"]');
            if (attackerCell) {
                const attackerPiece = attackerCell.querySelector('.piece');
                if (attackerPiece) {
                    attackerPiece.classList.add('attacker');
                }
            }
        }
    },

    // Показать AI подсказку (клик по hint-block)
    showHint() {
        // AI режим — подсказываем лучший ход
        if (this.isAIMode) {
            this.showAIHint();
            return;
        }

        // Kids режим — показываем подсказку уровня и выделяем фигуру
        if (this.isKidsMode) {
            this.showKidsHint();
            return;
        }

        if (this.solutionIndex >= this.currentPuzzle.solution.length) return;

        const hintBlock = document.getElementById('hint-block');

        // Если подсказка уже показана — выделить фигуру
        if (hintBlock.classList.contains('expanded')) {
            this.highlightHintPiece();
            return;
        }

        // Показываем AI подсказку из предгенерированных
        if (this.currentPuzzle.hints && this.currentPuzzle.hints.length > 0) {
            const hint = this.currentPuzzle.hints[this.currentHintIndex];
            this.updateHintBlock(hint, true);
            this.currentHintIndex = (this.currentHintIndex + 1) % this.currentPuzzle.hints.length;
        }

        this.hintsUsed++;
        SoundManager.playSelect();

        Analytics.track('hint_used', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id,
            hintNumber: this.hintsUsed
        });
    },

    // Подсказка в AI режиме (взрослый стиль от киборга)
    async showAIHint() {
        if (this.gameOver || this.aiThinking) return;
        if (this.chess.turn() !== this.playerColor) return;

        this.updateHintBlock('Анализ позиции...', true);

        // Используем AI чтобы найти лучший ход для игрока
        const bestMove = await ChessAI.getMoveAsync(this.chess, 2);

        if (bestMove) {
            const fromCell = document.querySelector('[data-square="' + bestMove.from + '"]');
            if (fromCell) {
                fromCell.classList.add('hint-highlight');
                setTimeout(() => fromCell.classList.remove('hint-highlight'), 2000);
            }
            // Короткая формальная подсказка
            const piece = this.chess.get(bestMove.from);
            const pieceNames = {p:'Пешка',n:'Конь',b:'Слон',r:'Ладья',q:'Ферзь',k:'Король'};
            const pieceName = pieceNames[piece.type] || '?';
            this.updateHintBlock(pieceName + ' ' + bestMove.from + '→' + bestMove.to, true);
        }

        SoundManager.playSelect();
        Analytics.track('ai_hint_used');
    },

    // Подсветить фигуру для хода
    highlightHintPiece() {
        const nextMove = this.currentPuzzle.solution[this.solutionIndex];
        if (!nextMove) return;

        const from = nextMove.substring(0, 2);
        const fromCell = document.querySelector('[data-square="' + from + '"]');
        if (fromCell) {
            fromCell.classList.add('hint-highlight');
            setTimeout(() => fromCell.classList.remove('hint-highlight'), 1500);
        }
        SoundManager.playSelect();
    },

    // Обновить блок подсказки
    updateHintBlock(text, expanded) {
        const hintBlock = document.getElementById('hint-block');
        const textEl = document.getElementById('hint-text');
        textEl.textContent = text;

        if (expanded) {
            hintBlock.classList.add('expanded');
            hintBlock.classList.remove('collapsed');
        } else {
            hintBlock.classList.remove('expanded');
            hintBlock.classList.add('collapsed');
        }
    },

    // Сбросить подсказку на дефолт
    resetHintBlock() {
        this.updateHintBlock('Нажми на меня для подсказки!', false);
    },

    // Пропустить puzzle
    skipPuzzle() {
        if (this.isKidsMode) {
            this.loadKidsLevel(this.kidsLevelIndex + 1);
            return;
        }
        Analytics.track('puzzle_skipped', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id
        });
        this.loadPuzzle(this.currentPuzzleIndex + 1);
    },

    // Предыдущая задача
    prevPuzzle() {
        if (this.isKidsMode) {
            if (this.kidsLevelIndex > 0) {
                this.loadKidsLevel(this.kidsLevelIndex - 1);
            }
            return;
        }
        if (this.currentPuzzleIndex > 0) {
            this.loadPuzzle(this.currentPuzzleIndex - 1);
        }
    },

    // Отмена хода
    undoMove() {
        if (this.isAIMode) {
            // В AI режиме отменяем 2 хода (свой + AI)
            if (this.gameOver) {
                this.startAIGame();
                return;
            }
            this.chess.undo(); // AI move
            this.chess.undo(); // Player move
            this.lastMove = null;
            this.renderBoard();
            this.updateAIHintBlock();
            SoundManager.playUndo();
            return;
        }
        if (this.isKidsMode) {
            // В Kids режиме — перезагружаем уровень
            this.loadKidsLevel(this.kidsLevelIndex);
            SoundManager.playUndo();
            return;
        }
        this.loadPuzzle(this.currentPuzzleIndex);
        SoundManager.playUndo();
    },

    // Открыть модал репорта
    openReportModal() {
        document.getElementById('report-modal').classList.add('visible');
        document.getElementById('report-text').value = '';
        document.getElementById('report-text').focus();
    },

    // Закрыть модал репорта
    closeReportModal() {
        document.getElementById('report-modal').classList.remove('visible');
    },

    // Отправить репорт в Telegram
    async sendReport() {
        let message = 'KidChess Error Report\n\n';

        if (this.isKidsMode) {
            const pack = PUZZLE_PACKS[this.currentPack];
            const level = pack.levels[this.kidsLevelIndex];
            message += 'Mode: Kids Mode\n' +
                'Pack: ' + pack.name + '\n' +
                'Level: ' + (this.kidsLevelIndex + 1) + ' - ' + level.name + '\n' +
                'FEN: ' + level.fen;
        } else if (this.isAIMode) {
            message += 'Mode: AI Game\n' +
                'FEN: ' + this.chess.fen();
        } else if (this.currentPuzzle) {
            const pack = PUZZLE_PACKS[this.currentPack];
            message += 'Pack: ' + pack.name + '\n' +
                'Puzzle: ' + this.currentPuzzle.id + '\n' +
                'FEN: ' + this.currentPuzzle.fen + '\n' +
                'Solution: ' + this.currentPuzzle.solution.join(', ') + '\n' +
                'Step: ' + (this.solutionIndex + 1) + '/' + this.currentPuzzle.solution.length;
        }

        try {
            const url = 'https://api.telegram.org/bot' + TELEGRAM_CONFIG.botToken + '/sendMessage';
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CONFIG.chatId,
                    text: message
                })
            });

            this.showStatus('Отправлено!', 'success');
            Analytics.track('error_reported', { mode: this.isKidsMode ? 'kids' : this.isAIMode ? 'ai' : 'puzzle' });
        } catch (e) {
            console.error('Failed to send report:', e);
            this.showStatus('Ошибка отправки', 'error');
        }

        this.closeReportModal();
    },

    // Показать модалку результата AI-игры
    showResultModal(result) {
        const modal = document.getElementById('result-modal');
        const icon = document.getElementById('result-icon');
        const title = document.getElementById('result-title');
        const movesEl = document.getElementById('stat-moves');
        const capturesEl = document.getElementById('stat-captures');

        // Настроить содержимое по результату
        if (result === 'win') {
            icon.textContent = '🎉';
            title.textContent = 'Победа!';
        } else if (result === 'lose') {
            icon.textContent = '😔';
            title.textContent = 'Поражение';
        } else {
            icon.textContent = '🤝';
            title.textContent = 'Ничья!';
        }

        // Заполнить статистику
        movesEl.textContent = this.aiMoveCount;
        capturesEl.textContent = this.aiCaptureCount;

        modal.classList.add('visible');
    },

    // Закрыть модалку результата
    closeResultModal() {
        document.getElementById('result-modal').classList.remove('visible');
    },

    // === PRO MODAL (Fake Door) ===

    // Show PRO modal when clicking locked premium pack
    showProModal(packId) {
        const modal = document.getElementById('pro-modal');
        const content = document.getElementById('pro-content');
        const comingSoon = document.getElementById('pro-coming-soon');

        // Reset to initial state
        content.classList.remove('hidden');
        comingSoon.classList.remove('visible');

        // Show modal
        modal.classList.add('visible');

        // Track events
        Analytics.track('premium_pack_clicked', { pack: packId });
        Analytics.track('pro_modal_shown', { pack: packId });

        // Store which pack triggered modal for analytics
        this.proModalPackId = packId;
    },

    // Handle "Buy" button click
    handleProBuyClick() {
        const content = document.getElementById('pro-content');
        const comingSoon = document.getElementById('pro-coming-soon');

        // Track conversion event (KEY METRIC)
        Analytics.track('pro_buy_clicked', {
            pack: this.proModalPackId,
            price: 3.99,
            currency: 'USD'
        });

        // Show "Coming soon" message
        content.classList.add('hidden');
        comingSoon.classList.add('visible');

        // Play success sound
        SoundManager.playNewGame();
    },

    // Close PRO modal
    closeProModal() {
        const modal = document.getElementById('pro-modal');
        const content = document.getElementById('pro-content');

        // Track close event only if modal was showing main content (not after buy)
        if (!content.classList.contains('hidden') && this.proModalPackId) {
            Analytics.track('pro_modal_closed', {
                pack: this.proModalPackId,
                converted: false
            });
        }

        modal.classList.remove('visible');
        this.proModalPackId = null;
    },

    // Начать AI-игру заново
    restartAIGame() {
        this.closeResultModal();
        this.startAIGame();
    },

    // Применить цветовую тему
    applyTheme(theme) {
        document.body.className = 'theme-' + (theme || 'green');

        const themeColors = {
            green: '#4a7c59',
            blue: '#4a6c8c',
            red: '#7c4a5a'
        };
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = themeColors[theme] || themeColors.green;
        }
    },

    // Обновить header
    updateHeader() {
        const pack = PUZZLE_PACKS[this.currentPack];
        document.getElementById('level-number').textContent = 'Задача ' + (this.currentPuzzleIndex + 1);
        document.getElementById('puzzle-title').textContent = pack.name;
    },

    // Обновить прогресс
    updateProgress() {
        const completed = this.completedPuzzles[this.currentPack]
            ? this.completedPuzzles[this.currentPack].size
            : 0;
        const total = this.currentPackPuzzles.length;
        document.getElementById('progress').textContent = completed + '/' + total + ' решено';
    },

    // Показать статус-сообщение
    showStatus(message, type) {
        type = type || '';
        const statusEl = document.getElementById('status-message');
        statusEl.textContent = message;
        statusEl.className = 'visible ' + type;

        setTimeout(() => {
            statusEl.className = '';
        }, 1500);
    },

    // Открыть/закрыть меню
    toggleMenu(show) {
        const overlay = document.getElementById('menu-overlay');
        if (show) {
            overlay.classList.add('visible');
        } else {
            overlay.classList.remove('visible');
        }
    },

    // Обработать действие меню
    handleMenuAction(action) {
        this.toggleMenu(false);

        // AI режим
        if (this.isAIMode) {
            switch (action) {
                case 'restart':
                    this.startAIGame();
                    break;
                case 'packs':
                    this.goBack();
                    break;
            }
            return;
        }

        // Kids режим
        if (this.isKidsMode) {
            switch (action) {
                case 'restart':
                    this.loadKidsLevel(this.kidsLevelIndex);
                    break;
                case 'next':
                    this.loadKidsLevel(this.kidsLevelIndex + 1);
                    break;
                case 'prev':
                    this.loadKidsLevel(this.kidsLevelIndex - 1);
                    break;
                case 'packs':
                    this.goBack();
                    break;
                case 'reset':
                    if (this.kidsCompletedLevels[this.currentPack]) {
                        this.kidsCompletedLevels[this.currentPack].clear();
                    }
                    this.kidsLevelIndex = 0;
                    this.saveProgress();
                    this.loadKidsLevel(0);
                    this.showStatus('Прогресс сброшен', '');
                    break;
            }
            return;
        }

        // Puzzle режим
        switch (action) {
            case 'restart':
                this.loadPuzzle(this.currentPuzzleIndex);
                break;
            case 'next':
                this.loadPuzzle(this.currentPuzzleIndex + 1);
                break;
            case 'prev':
                this.loadPuzzle(this.currentPuzzleIndex - 1);
                break;
            case 'random':
                var randomIndex = Math.floor(Math.random() * this.currentPackPuzzles.length);
                this.loadPuzzle(randomIndex);
                break;
            case 'packs':
                this.goBack();
                break;
            case 'reset':
                if (this.completedPuzzles[this.currentPack]) {
                    this.completedPuzzles[this.currentPack].clear();
                }
                this.currentPuzzleIndex = 0;
                this.saveProgress();
                this.loadPuzzle(0);
                this.showStatus('Прогресс сброшен', '');
                break;
        }
    },

    // Привязка событий
    attachEventListeners() {
        var self = this;
        var board = document.getElementById('board');

        // Клики по доске
        board.addEventListener('click', function(e) {
            var cell = e.target.closest('.cell');
            if (cell) {
                self.handleCellClick(cell.dataset.square);
            }
        });

        // Кнопка назад
        document.getElementById('back-btn').addEventListener('click', function() {
            self.goBack();
        });

        // Предыдущая задача
        document.getElementById('prev-btn').addEventListener('click', function() {
            self.prevPuzzle();
        });

        // Жалоба
        document.getElementById('report-btn').addEventListener('click', function() {
            self.openReportModal();
        });

        // Следующая задача
        document.getElementById('next-btn').addEventListener('click', function() {
            self.skipPuzzle();
        });

        // Клик по hint-block — показать подсказку или выделить фигуру
        document.getElementById('hint-block').addEventListener('click', function() {
            self.showHint();
        });

        // Меню
        document.getElementById('menu-btn').addEventListener('click', function() {
            self.toggleMenu(true);
        });

        document.getElementById('close-menu').addEventListener('click', function() {
            self.toggleMenu(false);
        });

        // Действия меню
        document.querySelectorAll('.menu-item').forEach(function(btn) {
            btn.addEventListener('click', function() {
                self.handleMenuAction(btn.dataset.action);
            });
        });

        // Клик вне меню закрывает его
        document.getElementById('menu-overlay').addEventListener('click', function(e) {
            if (e.target.id === 'menu-overlay') {
                self.toggleMenu(false);
            }
        });

        // Клик вне PRO модалки закрывает её
        document.getElementById('pro-modal').addEventListener('click', function(e) {
            if (e.target.id === 'pro-modal') {
                self.closeProModal();
            }
        });

        // Клавиатура
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                self.toggleMenu(false);
                self.closeReportModal();
                self.closeResultModal();
                self.closeProModal();
            } else if (e.key === 'ArrowRight') {
                self.loadPuzzle(self.currentPuzzleIndex + 1);
            } else if (e.key === 'ArrowLeft') {
                self.loadPuzzle(self.currentPuzzleIndex - 1);
            } else if (e.key === 'h') {
                self.showHint();
            }
        });

        // Resize - throttled to avoid excessive re-renders
        let resizeTimeout;
        const handleResize = function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (self.currentPuzzle || self.isAIMode || self.isKidsMode) {
                    self.renderBoard();
                }
            }, 100);
        };

        window.addEventListener('resize', handleResize);

        // Also listen for visualViewport changes (better for mobile browsers)
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', handleResize);
        }
    }
};

// Theme toggle (night mode)
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Check saved preference
    const lightOverride = localStorage.getItem('lightOverride') === 'true';
    if (lightOverride) {
        document.documentElement.classList.add('light-override');
        toggle.textContent = '☀️';
    }

    toggle.addEventListener('click', function() {
        const html = document.documentElement;
        const isLight = html.classList.toggle('light-override');
        localStorage.setItem('lightOverride', isLight);
        toggle.textContent = isLight ? '☀️' : '🌙';
        TG.haptic('light');
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    Game.init();
    initThemeToggle();
});

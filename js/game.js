// KidChess - Шахматы для детей

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

    // Инициализация
    init() {
        this.chess = new Chess();
        this.loadProgress();
        this.renderPackSelection();
        this.attachEventListeners();
    },

    // Загрузить прогресс из localStorage
    loadProgress() {
        try {
            const saved = localStorage.getItem('kidChessProgress');
            if (saved) {
                const data = JSON.parse(saved);
                this.completedPuzzles = {};
                for (const packId in data.completed) {
                    this.completedPuzzles[packId] = new Set(data.completed[packId]);
                }
                this.currentPack = data.currentPack || null;
                this.currentPuzzleIndex = data.currentIndex || 0;
            }
        } catch (e) {
            console.warn('Could not load progress:', e);
        }
    },

    // Сохранить прогресс
    saveProgress() {
        try {
            const completed = {};
            for (const packId in this.completedPuzzles) {
                completed[packId] = Array.from(this.completedPuzzles[packId]);
            }
            localStorage.setItem('kidChessProgress', JSON.stringify({
                completed,
                currentPack: this.currentPack,
                currentIndex: this.currentPuzzleIndex
            }));
        } catch (e) {
            console.warn('Could not save progress:', e);
        }
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
            const completed = this.completedPuzzles[pack.id] ? this.completedPuzzles[pack.id].size : 0;
            const total = pack.puzzles.length;
            const progress = total > 0 ? (completed / total) * 100 : 0;

            const card = document.createElement('div');
            card.className = 'pack-card';
            card.dataset.packId = pack.id;

            // Emoji
            const emoji = document.createElement('span');
            emoji.className = 'pack-card-emoji';
            emoji.textContent = pack.emoji;
            card.appendChild(emoji);

            // Name
            const name = document.createElement('div');
            name.className = 'pack-card-name';
            name.textContent = pack.name;
            card.appendChild(name);

            // Count
            const count = document.createElement('div');
            count.className = 'pack-card-count';
            count.textContent = completed + '/' + total + ' задач';
            card.appendChild(count);

            // Progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'pack-card-progress';
            progressBar.style.width = progress + '%';
            progressBar.style.background = pack.color;
            card.appendChild(progressBar);

            card.addEventListener('click', () => this.selectPack(pack.id));
            grid.appendChild(card);
        });

        Analytics.track('view_pack_selection');
    },

    // Выбрать пак
    selectPack(packId) {
        this.currentPack = packId;
        this.currentPackPuzzles = PUZZLE_PACKS[packId].puzzles;

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

    // Переключение экранов
    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenName + '-screen').classList.add('active');
    },

    // Вернуться к выбору паков
    goBack() {
        this.showScreen('pack-select');
        this.renderPackSelection();
        Analytics.track('back_to_packs');
    },

    // Загрузить puzzle
    loadPuzzle(index) {
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
        this.hideHintBubble();

        // Вычислить границы доски и отрисовать
        this.calculateBoardBounds();
        this.renderBoard();

        this.saveProgress();

        Analytics.track('load_puzzle', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id
        });
    },

    // Вычислить границы доски (динамическая доска)
    calculateBoardBounds() {
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

        // Минимум 4x4 доска
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

    // Отрисовка доски
    renderBoard() {
        const board = document.getElementById('board');

        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }

        const { minCol, maxCol, minRow, maxRow } = this.boardBounds;
        const cols = maxCol - minCol + 1;
        const rows = maxRow - minRow + 1;

        const maxBoardHeight = window.innerHeight * 0.55;
        const maxBoardWidth = window.innerWidth * 0.9;
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
                    const pieceKey = piece.color + piece.type.toUpperCase();
                    const svgString = PIECE_SVG[pieceKey];
                    if (svgString) {
                        const pieceDiv = document.createElement('div');
                        pieceDiv.className = 'piece';
                        const svg = createPieceSVG(svgString);
                        if (svg) {
                            pieceDiv.appendChild(svg);
                        }
                        cell.appendChild(pieceDiv);
                    }
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
        const playerColor = this.currentPuzzle.fen.includes(' w ') ? 'w' : 'b';

        if (this.chess.turn() !== playerColor) return;

        const piece = this.chess.get(square);

        if (piece && piece.color === playerColor) {
            this.selectedSquare = square;
            this.possibleMoves = this.chess.moves({ square: square, verbose: true });
            this.updateHighlights();
            SoundManager.playSelect();
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

    // Сделать ход
    makeMove(move) {
        const expectedMove = this.currentPuzzle.solution[this.solutionIndex];
        const moveUci = move.from + move.to + (move.promotion || '');

        if (moveUci !== expectedMove) {
            this.showWrongMove(move.to);
            SoundManager.playError();
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
        } else {
            SoundManager.playMove();
        }

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

        setTimeout(() => {
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

    // Показать AI подсказку
    showHint() {
        if (this.solutionIndex >= this.currentPuzzle.solution.length) return;

        // Показываем AI подсказку из предгенерированных
        if (this.currentPuzzle.hints && this.currentPuzzle.hints.length > 0) {
            const hint = this.currentPuzzle.hints[this.currentHintIndex];
            this.showHintBubble(hint);
            this.currentHintIndex = (this.currentHintIndex + 1) % this.currentPuzzle.hints.length;
        }

        // Также подсветим клетку с фигурой
        const nextMove = this.currentPuzzle.solution[this.solutionIndex];
        const from = nextMove.substring(0, 2);

        const fromCell = document.querySelector('[data-square="' + from + '"]');
        if (fromCell) {
            fromCell.classList.add('hint-highlight');
            setTimeout(() => fromCell.classList.remove('hint-highlight'), 1000);
        }

        this.hintsUsed++;
        SoundManager.playSelect();

        Analytics.track('hint_used', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id,
            hintNumber: this.hintsUsed
        });
    },

    // Показать bubble с подсказкой
    showHintBubble(text) {
        const bubble = document.getElementById('hint-bubble');
        const textEl = document.getElementById('hint-text');
        textEl.textContent = text;
        bubble.classList.remove('hidden');
    },

    // Скрыть bubble
    hideHintBubble() {
        document.getElementById('hint-bubble').classList.add('hidden');
    },

    // Пропустить puzzle
    skipPuzzle() {
        Analytics.track('puzzle_skipped', {
            pack: this.currentPack,
            puzzle: this.currentPuzzle.id
        });
        this.loadPuzzle(this.currentPuzzleIndex + 1);
    },

    // Отмена хода
    undoMove() {
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
        const text = document.getElementById('report-text').value.trim();
        if (!text) {
            this.closeReportModal();
            return;
        }

        const pack = PUZZLE_PACKS[this.currentPack];
        const message = 'KidChess Error Report\n\n' +
            'Pack: ' + pack.name + '\n' +
            'Puzzle: ' + this.currentPuzzle.id + '\n' +
            'FEN: ' + this.currentPuzzle.fen + '\n' +
            'Solution: ' + this.currentPuzzle.solution.join(', ') + '\n' +
            'Step: ' + (this.solutionIndex + 1) + '/' + this.currentPuzzle.solution.length + '\n\n' +
            'User Report:\n' + text;

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
            Analytics.track('error_reported', { puzzle: this.currentPuzzle.id });
        } catch (e) {
            console.error('Failed to send report:', e);
            this.showStatus('Ошибка отправки', 'error');
        }

        this.closeReportModal();
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

        // Skip
        document.getElementById('skip-btn').addEventListener('click', function() {
            self.skipPuzzle();
        });

        // Подсказка
        document.getElementById('hint-btn').addEventListener('click', function() {
            self.showHint();
        });

        // Отмена
        document.getElementById('undo-btn').addEventListener('click', function() {
            self.undoMove();
        });

        // Report
        document.getElementById('report-btn').addEventListener('click', function() {
            self.openReportModal();
        });

        // Закрыть hint bubble
        document.getElementById('hint-close').addEventListener('click', function() {
            self.hideHintBubble();
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

        // Клавиатура
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                self.toggleMenu(false);
                self.closeReportModal();
                self.hideHintBubble();
            } else if (e.key === 'ArrowRight') {
                self.loadPuzzle(self.currentPuzzleIndex + 1);
            } else if (e.key === 'ArrowLeft') {
                self.loadPuzzle(self.currentPuzzleIndex - 1);
            } else if (e.key === 'h') {
                self.showHint();
            }
        });

        // Resize
        window.addEventListener('resize', function() {
            if (self.currentPuzzle) {
                self.renderBoard();
            }
        });
    }
};

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    Game.init();
});

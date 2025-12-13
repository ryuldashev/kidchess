// KidChess - Puzzle Packs
// Simplified for 5-year-olds

const PUZZLE_PACKS = {
    // === ПАК 1: Первые шаги (3x3, противник не ходит) ===
    pack1: {
        id: 'pack1',
        name: 'Первые шаги',
        emoji: '🎈',
        color: '#FF6B6B',
        isKidsMode: true,
        boardSize: 3,
        enemyMoveRate: 0,
        fullWidth: true,
        levels: [
            {
                id: 'p1_001',
                fen: '8/8/8/8/8/7p/8/7R w - - 0 1',
                name: 'Ладья!',
                hint: ['♖', '↑']
            },
            {
                id: 'p1_002',
                fen: '8/8/8/8/8/5p2/8/7B w - - 0 1',
                name: 'Слон!',
                hint: ['♗', '↖']
            },
            {
                id: 'p1_003',
                fen: '8/8/8/8/8/5p2/8/6N1 w - - 0 1',
                name: 'Конь!',
                hint: ['♘', '↖']
            },
            {
                id: 'p1_004',
                fen: '8/8/8/8/8/5p2/8/7Q w - - 0 1',
                name: 'Ферзь!',
                hint: ['♕', '↖']
            },
            {
                id: 'p1_005',
                fen: '8/8/8/8/8/5p1p/8/7R w - - 0 1',
                name: 'Две цели!',
                hint: ['♖', '↑']
            },
            {
                id: 'p1_006',
                fen: '8/8/8/8/8/5p2/6p1/7B w - - 0 1',
                name: 'Слон охотится!',
                hint: ['♗', '↖']
            },
            {
                id: 'p1_007',
                fen: '8/8/8/8/8/5p1p/8/6BR w - - 0 1',
                name: 'Команда!',
                hint: ['♖', '↑']
            },
            {
                id: 'p1_008',
                fen: '8/8/8/8/8/5ppp/8/5N1R w - - 0 1',
                name: 'Конь и ладья!',
                hint: ['♖', '↑']
            },
            {
                id: 'p1_009',
                fen: '8/8/8/8/8/5ppp/6p1/7Q w - - 0 1',
                name: 'Ферзь-герой!',
                hint: ['♕', '↖']
            }
        ],
        puzzles: []
    },

    // === ПАК 2: Учимся думать (4x4, противник ходит 1/3) ===
    pack2: {
        id: 'pack2',
        name: 'Учимся думать',
        emoji: '🟡',
        color: '#FFD93D',
        isKidsMode: true,
        boardSize: 4,
        enemyMoveRate: 1,
        levels: [
            {
                id: 'p2_001',
                fen: '8/8/8/8/4p3/7p/5N2/8 w - - 0 1',
                name: 'Вилка!',
                hint: ['♘', '↗']
            },
            {
                id: 'p2_002',
                fen: '8/8/8/8/7p/4p3/6N1/8 w - - 0 1',
                name: 'Прыжок!',
                hint: ['♘', '↗']
            },
            {
                id: 'p2_003',
                fen: '8/8/8/8/4r3/5p2/8/4Q3 w - - 0 1',
                name: 'Ферзь атакует!',
                hint: ['♕', '↑']
            },
            {
                id: 'p2_004',
                fen: '8/8/8/8/4pp2/8/8/4R3 w - - 0 1',
                name: 'Линия!',
                hint: ['♖', '↑']
            },
            {
                id: 'p2_005',
                fen: '8/8/8/8/4p3/4p3/8/4R3 w - - 0 1',
                name: 'Вертикаль!',
                hint: ['♖', '↑']
            },
            {
                id: 'p2_006',
                fen: '8/8/8/8/7r/5pp1/8/4R3 w - - 0 1',
                name: 'Быстрее!',
                hint: ['♖', '↑']
            },
            {
                id: 'p2_007',
                fen: '8/8/8/8/5n2/4p3/8/4RB2 w - - 0 1',
                name: 'Погоня!',
                hint: ['♖', '↑']
            },
            {
                id: 'p2_008',
                fen: '8/8/8/8/4bn2/5p2/8/4Q3 w - - 0 1',
                name: 'Охота!',
                hint: ['♕', '↑']
            },
            {
                id: 'p2_009',
                fen: '8/8/8/8/4rnb1/5pp1/8/4QR2 w - - 0 1',
                name: 'Большая охота!',
                hint: ['♕', '↑']
            }
        ],
        puzzles: []
    },

    // === ПАК 3: Почти мастер (4x4, противник ходит 2/3) ===
    pack3: {
        id: 'pack3',
        name: 'Почти мастер',
        emoji: '🟢',
        color: '#6BCB77',
        isKidsMode: true,
        boardSize: 4,
        enemyMoveRate: 2,
        levels: [
            {
                id: 'p3_001',
                fen: '8/8/8/8/5rp1/4p3/8/4RQ2 w - - 0 1',
                name: 'Размен!',
                hint: ['♖', '↑']
            },
            {
                id: 'p3_002',
                fen: '8/8/8/8/4bnp1/5p2/8/4RBN1 w - - 0 1',
                name: 'Кто больше?',
                hint: ['♖', '↑']
            },
            {
                id: 'p3_003',
                fen: '8/8/8/8/4rbn1/4ppp1/8/4QRB1 w - - 0 1',
                name: 'Выгодный размен!',
                hint: ['♕', '↑']
            },
            {
                id: 'p3_004',
                fen: '8/8/8/8/4r3/5Pp1/8/4R3 w - - 0 1',
                name: 'Защити и атакуй!',
                hint: ['♖', '↑']
            },
            {
                id: 'p3_005',
                fen: '8/8/8/8/4bn2/4Pp2/8/4RB2 w - - 0 1',
                name: 'Осторожно!',
                hint: ['♖', '↑']
            },
            {
                id: 'p3_006',
                fen: '8/8/8/8/4rnb1/4PPp1/8/4QR2 w - - 0 1',
                name: 'Стратегия!',
                hint: ['♕', '↑']
            },
            {
                id: 'p3_007',
                fen: '8/8/8/8/5rn1/4ppp1/8/4QRN1 w - - 0 1',
                name: 'Думай вперёд!',
                hint: ['♕', '↑']
            },
            {
                id: 'p3_008',
                fen: '8/8/8/8/4rbnq/4pppp/8/4QRBN w - - 0 1',
                name: 'Сложный бой!',
                hint: ['♕', '↑']
            },
            {
                id: 'p3_009',
                fen: '8/8/8/8/3qrbn1/4pppp/8/3QRBN1 w - - 0 1',
                name: 'Мастер!',
                hint: ['♕', '→']
            }
        ],
        puzzles: []
    },

    // === ПРЕМИУМ ПАКИ (disabled) ===
    premium1: {
        id: 'premium1',
        name: 'Скоро',
        emoji: null,
        color: '#9E9E9E',
        isDisabled: true,
        isPremium: true,
        levels: [],
        puzzles: []
    },

    premium2: {
        id: 'premium2',
        name: 'Скоро',
        emoji: null,
        color: '#9E9E9E',
        isDisabled: true,
        isPremium: true,
        levels: [],
        puzzles: []
    },

    // === ПОЛНЫЕ ШАХМАТЫ С AI ===
    playai: {
        id: 'playai',
        name: 'Шахматы',
        emoji: '♟️',
        description: 'Полная игра',
        color: '#607D8B',
        isAIMode: true,
        fullWidth: true,
        puzzles: []
    }
};

// Flat array for backward compatibility
const PUZZLES = [];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PUZZLES, PUZZLE_PACKS };
}

// Simple Chess AI for KidChess
// Uses minimax with alpha-beta pruning and basic evaluation

const ChessAI = {
    // Piece values for evaluation
    pieceValues: {
        'p': 100,   // pawn
        'n': 320,   // knight
        'b': 330,   // bishop
        'r': 500,   // rook
        'q': 900,   // queen
        'k': 20000  // king
    },

    // Position bonus tables (encourage good piece placement)
    positionBonus: {
        'p': [
            [0,  0,  0,  0,  0,  0,  0,  0],
            [50, 50, 50, 50, 50, 50, 50, 50],
            [10, 10, 20, 30, 30, 20, 10, 10],
            [5,  5, 10, 25, 25, 10,  5,  5],
            [0,  0,  0, 20, 20,  0,  0,  0],
            [5, -5,-10,  0,  0,-10, -5,  5],
            [5, 10, 10,-20,-20, 10, 10,  5],
            [0,  0,  0,  0,  0,  0,  0,  0]
        ],
        'n': [
            [-50,-40,-30,-30,-30,-30,-40,-50],
            [-40,-20,  0,  0,  0,  0,-20,-40],
            [-30,  0, 10, 15, 15, 10,  0,-30],
            [-30,  5, 15, 20, 20, 15,  5,-30],
            [-30,  0, 15, 20, 20, 15,  0,-30],
            [-30,  5, 10, 15, 15, 10,  5,-30],
            [-40,-20,  0,  5,  5,  0,-20,-40],
            [-50,-40,-30,-30,-30,-30,-40,-50]
        ],
        'b': [
            [-20,-10,-10,-10,-10,-10,-10,-20],
            [-10,  0,  0,  0,  0,  0,  0,-10],
            [-10,  0,  5, 10, 10,  5,  0,-10],
            [-10,  5,  5, 10, 10,  5,  5,-10],
            [-10,  0, 10, 10, 10, 10,  0,-10],
            [-10, 10, 10, 10, 10, 10, 10,-10],
            [-10,  5,  0,  0,  0,  0,  5,-10],
            [-20,-10,-10,-10,-10,-10,-10,-20]
        ],
        'r': [
            [0,  0,  0,  0,  0,  0,  0,  0],
            [5, 10, 10, 10, 10, 10, 10,  5],
            [-5,  0,  0,  0,  0,  0,  0, -5],
            [-5,  0,  0,  0,  0,  0,  0, -5],
            [-5,  0,  0,  0,  0,  0,  0, -5],
            [-5,  0,  0,  0,  0,  0,  0, -5],
            [-5,  0,  0,  0,  0,  0,  0, -5],
            [0,  0,  0,  5,  5,  0,  0,  0]
        ],
        'q': [
            [-20,-10,-10, -5, -5,-10,-10,-20],
            [-10,  0,  0,  0,  0,  0,  0,-10],
            [-10,  0,  5,  5,  5,  5,  0,-10],
            [-5,  0,  5,  5,  5,  5,  0, -5],
            [0,  0,  5,  5,  5,  5,  0, -5],
            [-10,  5,  5,  5,  5,  5,  0,-10],
            [-10,  0,  5,  0,  0,  0,  0,-10],
            [-20,-10,-10, -5, -5,-10,-10,-20]
        ],
        'k': [
            [-30,-40,-40,-50,-50,-40,-40,-30],
            [-30,-40,-40,-50,-50,-40,-40,-30],
            [-30,-40,-40,-50,-50,-40,-40,-30],
            [-30,-40,-40,-50,-50,-40,-40,-30],
            [-20,-30,-30,-40,-40,-30,-30,-20],
            [-10,-20,-20,-20,-20,-20,-20,-10],
            [20, 20,  0,  0,  0,  0, 20, 20],
            [20, 30, 10,  0,  0, 10, 30, 20]
        ]
    },

    // Evaluate position (positive = white better, negative = black better)
    evaluatePosition(chess) {
        if (chess.isCheckmate()) {
            return chess.turn() === 'w' ? -100000 : 100000;
        }
        if (chess.isDraw()) {
            return 0;
        }

        let score = 0;
        const board = chess.board();

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const piece = board[row][col];
                if (piece) {
                    const value = this.pieceValues[piece.type];
                    const posBonus = this.getPositionBonus(piece, row, col);

                    if (piece.color === 'w') {
                        score += value + posBonus;
                    } else {
                        score -= value + posBonus;
                    }
                }
            }
        }

        return score;
    },

    // Get position bonus for piece
    getPositionBonus(piece, row, col) {
        const table = this.positionBonus[piece.type];
        if (!table) return 0;

        // Flip table for black pieces
        if (piece.color === 'b') {
            row = 7 - row;
        }
        return table[row][col];
    },

    // Minimax with alpha-beta pruning
    minimax(chess, depth, alpha, beta, maximizing) {
        if (depth === 0 || chess.isGameOver()) {
            return this.evaluatePosition(chess);
        }

        const moves = chess.moves();

        if (maximizing) {
            let maxEval = -Infinity;
            for (const move of moves) {
                chess.move(move);
                const evaluation = this.minimax(chess, depth - 1, alpha, beta, false);
                chess.undo();
                maxEval = Math.max(maxEval, evaluation);
                alpha = Math.max(alpha, evaluation);
                if (beta <= alpha) break;
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (const move of moves) {
                chess.move(move);
                const evaluation = this.minimax(chess, depth - 1, alpha, beta, true);
                chess.undo();
                minEval = Math.min(minEval, evaluation);
                beta = Math.min(beta, evaluation);
                if (beta <= alpha) break;
            }
            return minEval;
        }
    },

    // Get best move for AI
    getBestMove(chess, difficulty) {
        // Difficulty: 1 = easy (depth 1-2), 2 = medium (depth 2-3), 3 = hard (depth 3-4)
        const depth = difficulty === 1 ? 2 : difficulty === 2 ? 3 : 4;

        const moves = chess.moves({ verbose: true });
        if (moves.length === 0) return null;

        // Easy mode: sometimes make random moves
        if (difficulty === 1 && Math.random() < 0.3) {
            return moves[Math.floor(Math.random() * moves.length)];
        }

        const isMaximizing = chess.turn() === 'w';
        let bestMove = moves[0];
        let bestValue = isMaximizing ? -Infinity : Infinity;

        // Shuffle moves for variety
        const shuffledMoves = moves.sort(() => Math.random() - 0.5);

        for (const move of shuffledMoves) {
            chess.move(move);
            const value = this.minimax(chess, depth - 1, -Infinity, Infinity, !isMaximizing);
            chess.undo();

            if (isMaximizing) {
                if (value > bestValue) {
                    bestValue = value;
                    bestMove = move;
                }
            } else {
                if (value < bestValue) {
                    bestValue = value;
                    bestMove = move;
                }
            }
        }

        return bestMove;
    },

    // Async wrapper for AI move (to not block UI)
    async getMoveAsync(chess, difficulty) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const move = this.getBestMove(chess, difficulty);
                resolve(move);
            }, 300 + Math.random() * 500); // Small delay for UX
        });
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChessAI;
}

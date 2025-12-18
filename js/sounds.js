// KidChess - Звуковые эффекты через Web Audio API

const SoundManager = {
    context: null,
    enabled: true,

    init() {
        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API не поддерживается');
            this.enabled = false;
        }
    },

    // Разблокировка звука на iOS (нужен первый тач)
    unlock() {
        if (this.context && this.context.state === 'suspended') {
            this.context.resume();
        }
    },

    // Базовый звук
    playTone(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.enabled || !this.context) return;

        // Разблокировка AudioContext при каждом воспроизведении (для мобильных)
        if (this.context.state === 'suspended') {
            this.context.resume();
        }

        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);

        gainNode.gain.setValueAtTime(volume, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);

        oscillator.start();
        oscillator.stop(this.context.currentTime + duration);
    },

    // Звук выбора фигуры - весёлый "пик"
    playSelect() {
        this.playTone(800, 0.1, 'sine', 0.2);
        setTimeout(() => this.playTone(1000, 0.1, 'sine', 0.2), 50);
    },

    // Звук хода - мягкий "тук"
    playMove() {
        this.playTone(300, 0.15, 'triangle', 0.3);
        this.playTone(400, 0.1, 'sine', 0.15);
    },

    // Звук взятия - радостный аккорд
    playCapture() {
        this.playTone(400, 0.2, 'sine', 0.25);
        setTimeout(() => this.playTone(500, 0.2, 'sine', 0.25), 50);
        setTimeout(() => this.playTone(600, 0.2, 'sine', 0.25), 100);
        setTimeout(() => this.playTone(800, 0.3, 'sine', 0.3), 150);
    },

    // Звук ошибки - мягкий
    playError() {
        this.playTone(200, 0.2, 'triangle', 0.2);
    },

    // Звук новой игры - фанфара
    playNewGame() {
        this.playTone(523, 0.15, 'sine', 0.3);  // C
        setTimeout(() => this.playTone(659, 0.15, 'sine', 0.3), 100);  // E
        setTimeout(() => this.playTone(784, 0.15, 'sine', 0.3), 200);  // G
        setTimeout(() => this.playTone(1047, 0.3, 'sine', 0.35), 300); // C высокая
    },

    // Звук отмены хода
    playUndo() {
        this.playTone(600, 0.1, 'sine', 0.2);
        setTimeout(() => this.playTone(400, 0.15, 'sine', 0.2), 80);
    }
};

// Инициализация при загрузке
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        SoundManager.init();
    });
} else {
    // DOMContentLoaded уже прошёл
    SoundManager.init();
}

// Разблокировка звука при первом касании (для iOS)
document.addEventListener('touchstart', () => {
    SoundManager.unlock();
}, { once: true });

document.addEventListener('click', () => {
    SoundManager.unlock();
}, { once: true });

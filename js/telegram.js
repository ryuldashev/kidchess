// Telegram Mini App Integration
// Works in both Telegram WebApp and regular browser

const TG = {
    // Core detection
    webapp: window.Telegram?.WebApp,
    isTelegram: !!(window.Telegram?.WebApp?.initData && window.Telegram.WebApp.initData.length > 0),

    // Initialize Telegram WebApp
    init() {
        if (!this.isTelegram) {
            console.log('[TG] Running in browser mode');
            return;
        }

        console.log('[TG] Running in Telegram Mini App mode');

        // Expand to full height
        this.webapp.expand();

        // Signal ready
        this.webapp.ready();

        // Apply theme
        this.applyTheme();

        // Listen for theme changes
        this.webapp.onEvent('themeChanged', () => this.applyTheme());

        // Disable vertical swipes (prevents closing by swipe)
        if (this.webapp.disableVerticalSwipes) {
            this.webapp.disableVerticalSwipes();
        }
    },

    // Apply theme based on Telegram color scheme (dark/light)
    applyTheme() {
        if (!this.isTelegram) return;

        // Add telegram class to body
        document.body.classList.add('telegram-app');

        // Check if dark mode
        const colorScheme = this.webapp.colorScheme; // 'dark' or 'light'
        if (colorScheme === 'dark') {
            document.body.classList.add('telegram-dark');
        } else {
            document.body.classList.remove('telegram-dark');
        }
    },

    // BackButton management
    showBackButton(callback) {
        if (!this.isTelegram) return;

        this.webapp.BackButton.show();
        this.webapp.BackButton.onClick(callback);
    },

    hideBackButton() {
        if (!this.isTelegram) return;

        this.webapp.BackButton.hide();
        this.webapp.BackButton.offClick();
    },

    // Haptic Feedback
    haptic(type = 'light') {
        if (!this.isTelegram || !this.webapp.HapticFeedback) return;

        const hf = this.webapp.HapticFeedback;

        switch (type) {
            case 'light':
                hf.impactOccurred('light');
                break;
            case 'medium':
                hf.impactOccurred('medium');
                break;
            case 'heavy':
                hf.impactOccurred('heavy');
                break;
            case 'success':
                hf.notificationOccurred('success');
                break;
            case 'error':
                hf.notificationOccurred('error');
                break;
            case 'warning':
                hf.notificationOccurred('warning');
                break;
            case 'selection':
                hf.selectionChanged();
                break;
            default:
                hf.impactOccurred('light');
        }
    },

    // CloudStorage with localStorage fallback
    storage: {
        async get(key) {
            if (TG.isTelegram && TG.webapp.CloudStorage) {
                return new Promise((resolve) => {
                    TG.webapp.CloudStorage.getItem(key, (err, value) => {
                        if (err || value === null || value === undefined) {
                            // Fallback to localStorage
                            resolve(localStorage.getItem(key));
                        } else {
                            resolve(value);
                        }
                    });
                });
            }
            return localStorage.getItem(key);
        },

        async set(key, value) {
            // Always save to localStorage as backup
            localStorage.setItem(key, value);

            if (TG.isTelegram && TG.webapp.CloudStorage) {
                return new Promise((resolve) => {
                    TG.webapp.CloudStorage.setItem(key, value, (err) => {
                        if (err) {
                            console.warn('[TG] CloudStorage.setItem error:', err);
                        }
                        resolve(!err);
                    });
                });
            }
            return true;
        },

        async remove(key) {
            localStorage.removeItem(key);

            if (TG.isTelegram && TG.webapp.CloudStorage) {
                return new Promise((resolve) => {
                    TG.webapp.CloudStorage.removeItem(key, (err) => {
                        resolve(!err);
                    });
                });
            }
            return true;
        }
    },

    // User info
    getUser() {
        if (!this.isTelegram) return null;
        return this.webapp.initDataUnsafe?.user || null;
    },

    // Close app
    close() {
        if (this.isTelegram) {
            this.webapp.close();
        }
    },

    // Show alert
    alert(message) {
        if (this.isTelegram) {
            this.webapp.showAlert(message);
        } else {
            alert(message);
        }
    },

    // Show confirm
    confirm(message) {
        return new Promise((resolve) => {
            if (this.isTelegram) {
                this.webapp.showConfirm(message, resolve);
            } else {
                resolve(confirm(message));
            }
        });
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    TG.init();
});

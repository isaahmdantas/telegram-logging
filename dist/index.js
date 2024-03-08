"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramLogger = void 0;
const axios_1 = __importDefault(require("axios"));
const date_fns_1 = require("date-fns");
class TelegramLogger {
    constructor(token, chatId, app) {
        this.token = token;
        this.chatId = chatId;
        this.app = app;
    }
    iconMap() {
        return {
            DEBUG: '🚧',
            INFO: '💬',
            NOTICE: '🕵️‍♂️',
            WARNING: '⚠️',
            ERROR: '❌',
            CRITICAL: '🆘',
            ALERT: '🚨',
            EMERGENCY: '🆘',
            EMERG: '🆘',
            CRIT: '🆘',
            SUCCESS: '✅',
            REQUEST: '🌐',
            RESPONSE: '💡',
            DATABASE: '💾',
            SECURITY: '🔒',
            NETWORK: '🌐',
            PERFORMANCE: '⚡️'
        };
    }
    getDate() {
        return (0, date_fns_1.format)(new Date(), "dd-MM-yyyy HH:mm");
    }
    async sendMessage(type, message) {
        try {
            let icon = this.iconMap()[type];
            let date = this.getDate();
            const formattedMessage = `${icon} ${this.app}\n ${message}\n ${date}`;
            const response = await axios_1.default.post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
                chat_id: this.chatId,
                text: formattedMessage
            });
            if (response.status !== 200) {
                throw new Error(`Falha ao enviar o log: ${response.statusText}`);
            }
            return response.data;
        }
        catch (error) {
            throw new Error(`Falha ao enviar o log: ${error.message}`);
        }
    }
}
exports.TelegramLogger = TelegramLogger;

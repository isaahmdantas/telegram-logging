(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('date-fns')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios', 'date-fns'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TelegramLogging = {}, global.axios, global.dateFns));
})(this, (function (exports, axios, dateFns) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

    class TelegramLogging {
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
            return dateFns.format(new Date(), "dd-MM-yyyy HH:mm");
        }
        async sendMessage(type, message) {
            try {
                let icon = this.iconMap()[type];
                let date = this.getDate();
                const formattedMessage = `${icon} ${this.app}\n ${message}\n ${date}`;
                const response = await axios__default["default"].post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
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

    exports.TelegramLogging = TelegramLogging;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

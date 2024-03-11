const axios = require('axios');
const { format } = require('date-fns');


class TelegramLogging {
    constructor(token, chatId, app) {
        this.token = token;
        this.chatId = chatId;
        this.app = app;
    }

   iconMap() {
        return {
            DEBUG       : '🚧',
            INFO        : '💬',
            NOTICE      : '🕵️‍♂️',
            WARNING     : '⚠️',
            ERROR       : '❌',
            CRITICAL    : '🆘',
            ALERT       : '🚨',
            EMERGENCY   : '🆘',
            EMERG       : '🆘', 
            CRIT        : '🆘', 
            SUCCESS     : '✅',
            REQUEST     : '🌐',
            RESPONSE    : '💡',
            DATABASE    : '💾',
            SECURITY    : '🔒',
            NETWORK     : '🌐',
            PERFORMANCE : '⚡️'
        };
    }

    getDate() {
        return format(new Date(), "dd-MM-yyyy HH:mm")
    }
    

    async sendMessage(type, message) {
        try {
            let icon = this.iconMap()[type];
            let date = this.getDate();

            const formattedMessage = `${icon} ${this.app}\n ${message}\n ${date}`;

            const response = await axios.post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
                chat_id: this.chatId,
                text: formattedMessage
            });

            if (response.status !== 200) {
                throw new Error(`Falha ao enviar o log: ${response.statusText}`);
            }

            return response.data;
        } catch (error) {
            throw new Error(`Falha ao enviar o log: ${error.message}`);
        }
    }
}

module.exports = { TelegramLogging }
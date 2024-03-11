
import axios from 'axios';
import { format } from "date-fns";

import { IconMap } from 'icon';
import { SendMessageResponse } from 'message';

class TelegramLogging {
    private token: string;
    private chatId: string;
    private app: string;

    constructor(token: string, chatId: string, app: 
        string) {
        this.token = token;
        this.chatId = chatId;
        this.app = app;
    }

    private iconMap(): IconMap {
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

    private getDate(): string {
        return format(new Date(), "dd-MM-yyyy HH:mm")
    }
    

    async sendMessage(type: keyof IconMap, message: string): Promise<SendMessageResponse> {
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
        } catch (error: any) {
            throw new Error(`Falha ao enviar o log: ${error.message}`);
        }
    }
}

export default TelegramLogging;
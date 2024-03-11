import { IconMap } from '../src/types/icon';
import { SendMessageResponse } from '../src/types/message';

declare class TelegramLogging {
    private token: string;
    private chatId: string;
    private app: string;

    constructor(token: string, chatId: string, app: string);

    sendMessage(type: keyof IconMap, message: string): Promise<SendMessageResponse>;
}

export { TelegramLogging };

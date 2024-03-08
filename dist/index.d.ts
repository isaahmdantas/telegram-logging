interface IconMap {
    [key: string]: string;
}
interface SendMessageResponse {
    status: number;
    statusText: string;
    data: any;
}
export declare class TelegramLogger {
    private token;
    private chatId;
    private app;
    constructor(token: string, chatId: string, app: string);
    private iconMap;
    private getDate;
    sendMessage(type: keyof IconMap, message: string): Promise<SendMessageResponse>;
}
export {};

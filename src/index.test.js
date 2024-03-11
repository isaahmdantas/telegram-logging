const { TelegramLogging } = require('./index');

describe('TelegramLoggin', () => {
    // Criar uma instância da classe para ser usada nos testes 
    const telegramLoggin = new TelegramLogging('6769730222:AAHz-HQ294fIYYtpQ4U1RM496QG8CYT7OV8', '-1002015574076', 'toten-rb');

    // Verificar se o método sendMessage envia uma mensagem
    it('sendMessage should send a message', async () => {
        const response = await telegramLoggin.sendMessage('INFO', 'Testando a mensagem');

        // Verificar se a resposta está OK
        expect(response.ok).toBe(true);

        /// Verificar se a propriedade result contém os campos esperados 
        expect(response.result).toHaveProperty('message_id');
        expect(response.result).toHaveProperty('sender_chat');
        expect(response.result).toHaveProperty('chat');
        expect(response.result).toHaveProperty('date');
        expect(response.result).toHaveProperty('text');
        expect(response.result).toHaveProperty('entities');
    });

    // Verificar se o método sendMessage lida com errors adequadamente 
    it('sendMessage should handle errors', async () => {
        const invalidTokenTelegramLogging = new TelegramLogging('9999999999:aaaa-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '-2113126685189', 'toten_rb');
        await expect(invalidTokenTelegramLogging.sendMessage('INFO', 'Testando a mensagem')).rejects.toThrow();
    });

});
telegram-logging
========================= 

### Descrição

O Telegram Logging é uma biblioteca Node.js que permite enviar notificações de log para um canal no Telegram.


### Instalação 

Para instalar a biblioteca, basta executar o seguinte comando no terminal:

```bash
npm install telegram-logging
```
ou 
```bash
yarn add telegram-logging
```

### Uso 
```js
const TelegramLogging = require('telegram-logger');

// Crie uma instância do TelegramLogging com seu token, chat_id e nome do aplicativo
const logger = new TelegramLogging('SEU_TOKEN', 'SEU_CHAT_ID', 'NOME_DO_APLICATIVO');

// Envie logs usando o método sendMessage
logger.sendMessage('INFO', 'Esta é uma mensagem de log de teste.')
  .then(response => console.log('Log enviado com sucesso!', response))
  .catch(error => console.error('Erro ao enviar log:', error));

// ou 
await logger.sendMessage('INFO', 'Esta é uma mensagem de log de teste.');
```

### Configuração

Antes de usar o Telegram Logger, você precisa criar um bot no Telegram e obter o token do bot e o ID do chat. Consulte a [documentação do Telegram](https://core.telegram.org/api) para obter mais informações sobre como criar um bot e obter seu token e ID de chat.

### Tipos de Log

- DEBUG
- INFO
- NOTICE
- WARNING
- ERROR
- CRITICAL
- ALERT
- EMERGENCY
- EMERG
- CRIT
- SUCCESS
- REQUEST
- RESPONSE
- DATABASE
- SECURITY
- NETWORK
- PERFORMANCE

### Ícones de Log

Cada tipo de log é associado a um ícone correspondente para facilitar a identificação visual dos logs. Aqui está o mapeamento de ícones para os tipos de log:

    DEBUG : 🚧
    INFO : 💬
    NOTICE : 🕵️‍♂️
    WARNING : ⚠️
    ERROR : ❌
    CRITICAL : 🆘
    ALERT : 🚨
    EMERGENCY : 🆘
    EMERG : 🆘
    CRIT : 🆘
    SUCCESS : ✅
    REQUEST : 🌐
    RESPONSE : 💡
    DATABASE : 💾
    SECURITY : 🔒
    NETWORK : 🌐
    PERFORMANCE : ⚡️

### Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE.md).
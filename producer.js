(async ()=> {
    require('dotenv').config();
    const sqsClient = require('./sqsClient');

    try {
        const result = await sqsClient.sendMessage({ id: 1, action: 'X' });
        console.log(result);
    } catch (error) {
        console.log(`ERRO: ${error}`)
    }
})()
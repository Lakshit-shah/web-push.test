const webpush = require('web-push');

const keysGenerated = {
    publicKey: 'BK3aojptSCwC3-FSgbdE0z8sSzQq6t1TqH2z93mqLWqlegUk_IbzT5L9-uRbesZ082Sb7TKP195e8nGU_VM2i5M',
    privateKey: 'IoXtnFNDzendkp5qqOJdxOzcIYeZVkP72rj4RybQ_HM'
};


webpush.setVapidDetails('Test Subject', keysGenerated.publicKey, keysGenerated.privateKey);

const sub = {};
webpush.sendNotification(sub, 'test message');


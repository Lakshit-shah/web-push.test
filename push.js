const webpush = require('web-push');

const keysGenerated = {
    publicKey: 'BK3aojptSCwC3-FSgbdE0z8sSzQq6t1TqH2z93mqLWqlegUk_IbzT5L9-uRbesZ082Sb7TKP195e8nGU_VM2i5M',
    privateKey: 'IoXtnFNDzendkp5qqOJdxOzcIYeZVkP72rj4RybQ_HM'
};


webpush.setVapidDetails('mailto:lakshit.shrimankar@gmail.com', keysGenerated.publicKey, keysGenerated.privateKey);

const sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/f4utFqt8m8U:APA91bHfuEOz8k4-EoQqlKkh9ffBMGhhXXxlvcEQ-vOoYd9Iygh3vjAXbfOVVlBDm5LqcHSPbd-I4Pr-0VZL8vSsGTA6rlfPSA4FJjbAxyd8cNjg880bPDGfNMB8-BilsCkXliD8avvu", "expirationTime": null, "keys": { "p256dh": "BAvQCXcotZW1PWqVjXqWWQcRp1aixgx5MJjtEEocE94VUA1ZVuw47Wm7BK5i1oeFqVJfICmt1NWqaDF9ZJLcXTM", "auth": "F2DTBsGaepkExfVl3yiszg" } };
webpush.sendNotification(sub, 'test message');


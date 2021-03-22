self.addEventListener('push', () => {
    self.registration.sendNotification('test message form notifiction', {});
})
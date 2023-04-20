function log(message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toISOString();
    console.log(time, message, userId);
}
log('User clicked on a button', 'da763be');
log('User signed out');

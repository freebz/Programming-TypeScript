function log(message, context) {
    if (context === void 0) { context = {}; }
    var time = new Date().toISOString();
    console.log(time, message, context.userId);
}

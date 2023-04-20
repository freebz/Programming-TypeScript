type Context = {
    appId?: string
    userId?: string
}

function log(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
}

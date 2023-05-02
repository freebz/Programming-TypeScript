import EventEmitter from 'events'

class SafeEmitter<
    Events extends Record<PropertyKey, unknown[]>
> {
    private emitter = new EventEmitter
    emit<K extends keyof Events>(
	channel: K,
	...data: Events[K]
    ) {
	return this.emitter.emit(channel, ...data)
    }
    on<K extends keyof Events>(
	channel: K,
	listener: (...data: Events[K]) => void
    ) {
	return this.emitter.on(channel, listener)
    }
}


// WorkerScript.ts
type Commands = {
    sendMessageToThread: [ThreadID, Message]
    createThread: [Participants]
    addUserToThread: [ThreadID, UserID]
    removeUserFromThread: [ThreadID, UserID]
}

type Events = {
    receivedMessage: [ThreadID, UserID, Message]
    createThread: [ThreadID, Participants]
    addedUserToThread: [ThreadID, UserID]
    removeUserFromThread: [ThreadID, UserID]
}

// 메인 스레드로부터 들어오는 이벤트를 리스닝
let commandEmitter = new SafeEmitter<Commands>()

// 이벤트를 메인 스레드로 다시 방출
let eventEmitter = new SafeEmitter<Events>()

// 메인 스레드로부터 받은 명령을 타입 안전한
// 이벤트 방출기로 감쌈
onmessage = command =>
    commandEmitter.emit(
	command.data.type,
	...command.data.data
    )

// 워커가 발생시킨 이벤트를 리스닝하면서 이름 메인 스레드로 전송
eventEmitter.on('receivedMessage', data =>
    postMessage({ type: 'receivedMessage', data })
)
eventEmitter.on('createThread', data =>
    postMessage({ type: 'createThread', data })
)
// 기타

// 메인 스레드가 보낸 sendMessageToThread 명령에 응답
commandEmitter.on('sendMessageToThread', (threadID, message) =>
    console.log(`OK, I will send a message to threadID ${ threadID }`)
)

// 이벤트를 메인 스레드로 다시 방출
eventEmitter.emit('createThread', 123, [456, 789])

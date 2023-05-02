// 8.5 비동기 스트림

// 8.5.1 이벤트 방출기

interface Emitter {
    // 이벤트 방출
    emit(channel: string, value: unknown): void
    // 이벤트가 방출되었을 때 어떤 작업을 수행
    on(channel: string, f: (value: unknown) => void): void
}



import Redis from 'redis'

// 새로운 Redis 클라이언트 인스턴스 생성
let client = redis.createClient()

// 클라이언트가 방출하는 몇 가지 이벤트 리스닝
client.on('ready', () => console.info('Client is ready'))
client.on('error', e => console.error('An error occurred!', e))
client.on('reconnecting', params => console.info('Reconnecting...', params))



type RedisClient = {
    on(event: 'ready', f: () => void): void
    on(event: 'error', f: (e: Error) => void): void
    on(event: 'reconnecting',
       f: (params: { attempt: number, delay: number }) => void): void
}



type Events = {
    ready: void
    error: Error
    reconnecting: { attempt: number, delay: number }
}

type RedisClient = {
    on<E extends keyof Events>(
	event: E,
	Async Streams | 185
	f: (arg: Events[E]) => void
    ): void
}



type RedisClient = {
    on<E extends keyof Events>(
	event: E,
	f: (arg: Events[E]) => void
    ): void
    emit<E extends keyof Events>(
	event: E,
	arg: Events[E]
    ): void
}

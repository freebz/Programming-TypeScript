class MessageQueue {
    private constructor(private messages: string[]) { }
    static create(messages: string[]) {
	return new MessageQueue(messages)
    }
}


class BadQueue extends MessageQueue { }  // 에러 TS2675: 'MessageQueue'
                                         // 클래스를 확장할 수 없음
                                         // 클래스 생성자가 private으로 설정됨

MessageQueue.create([])  // MessageQueue

// 5.10 final 클래스 흉내내기

class MessageQueue {
    private constructor(private messages: string[]) { }
}


class BadQueue extends MessageQueue { }  // 에러 TS2675: 'MessageQueue'
                                         // 클래스를 확장할 수 없음
                                         // 클래스 생성자가 private으로 설정됨

new MessageQueue([])  // 에러 TS2673: 'MessageQueue' 클래스의 생성자가
                      // private이므로 클래스 내부 선언에서만 접근할 수 있음

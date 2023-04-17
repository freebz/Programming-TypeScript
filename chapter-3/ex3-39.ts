const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
}

function flip(f: Flippable) {
    return 'flipped it'
}

flip(Flippable.Chair)  // 'flipped it'
flip(Flippable.Cup)    // 'flipped it'
flip(12)	       // 에러 TS2345: '12' 인수 타입은
                       // 'Flippable' 매개변수 타입에 할당할 수 없음
flip('Hat')	       // 에러 TS2345: '"Hat"' 인수 타입은
                       // 'Flippable' 매개변수 타입에 할당할 수 없음

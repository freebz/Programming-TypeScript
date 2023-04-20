// 여러 제한을 적용한 한정된 다형성

type HasSides = { numberOfSides: number }
type SideHaveLength = { sideLength: number }

function logPermimeter<
    Shape extends HasSides & SideHaveLength
>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
}


type Square = HasSides & SideHaveLength
let square: Square = { numberOfSides: 4, sideLength: 3 }
logPermimeter(square)  // 정사각형 "12" 기록

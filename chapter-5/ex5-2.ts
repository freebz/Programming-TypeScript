// 체스 게임
class Game {}

type Color = 'Black' | 'White'
type File_ = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// 체스 말의 좌표 집합
class Position {
    constructor(
	private file: File_,
	private rank: Rank
    ) { }
}

// 체스 말
class Piece {
    protected position: Position
    constructor(
	private readonly color: Color,
	file: File_,
	rank: Rank
    ) {
	this.position = new Position(file, rank)
    }
}


// ...
class King extends Piece {}    // 킹
class Queen extends Piece {}   // 퀸
class Bishop extends Piece {}  // 비숍
class Knight extends Piece {}  // 나이트
class Rook extends Piece {}    // 룩
class Pawn extends Piece {}    // 폰

// 6.1.2 가변성

// 형태와 배열 가변성


// 서버로부터 받은 기존 사용자
type ExistingUser = {
    id: number
    name: string
}

// 아직 서버에 저장하지 않은 새 사용자
type NewUser = {
    name: string
}


function deleteUser(user: { id?: number, name: string }) {
    delete user.id
}

let existingUser: ExistingUser = {
    id: 123456,
    name: 'Ima User'
}

deleteUser(existingUser)



type LegacyUser = {
    id?: number | string
    name: string
}

let legacyUser: LegacyUser = {
    id: '793331',
    name: 'Xin Yang'
}

deleteUser(legacyUser)  // 에러 TS2345: 'LegacyUser' 인수 타입은 '{id?: number
                        // | undefined, name: string}' 타입에 할당할 수 없음
                        // 'string' 타입은 'number | undefined' 타입에
                        // 할당할 수 없음

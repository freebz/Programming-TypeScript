type Account = {
    id: number
    isEmployee: boolean
    notes: string[]
}

// 모든 필드를 선택형으로 만듦
type OptionalAccount = {
    [K in keyof Account]?: Account[K]
}

// 모든 필드를 nullable로 만듦
type NullableAccount = {
    [K in keyof Account]: Account[K] | null
}

// 모든 필드를 읽기 전용으로 만듦
type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]
}

// 모든 필드를 다시 쓸 수 있도록 만듦(Account와 같음)
type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: Account[K]
}

// 모든 필드를 다시 필수형으로 만듬(Account와 같음)
type Account3 = {
    [K in keyof OptionalAccount]-?: Account[K]
}

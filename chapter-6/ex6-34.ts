// 6.6 탈출구

// 6.6.1 타입 어서션

function formatInput(input: string) {
    // ...
}

function getUserInput(): string | number {
    // ...
}

let input = getUserInput()

// input이 string이라고 어서션
formatInput(input as string)

// 위 코드와 같은 의미
formatInput(<string>input)



function addToList(list: string[], item: string) {
    // ...
}
addToList('this is really,' as any, 'really unsafe')

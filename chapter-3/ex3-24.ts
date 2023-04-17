// 유니온과 인터섹션 타입

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog


// Cat
let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
}

// 둘 다
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}


let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
}


function trueOrNull(isTrue: boolean) {
    if (isTrue) {
	return 'true'
    }
    return null
}


type Returns = string | null


function(a: string, b: number) {
    return a || b
}

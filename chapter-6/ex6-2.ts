// 함수 가변성

class Animal { }
class Bird extends Animal {
    chirp() { }
}
class Crow extends Bird {
    caw() { }
}


function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
}


chirp(new Animal)  // 에러 TS2345: 인수 'Animal' 타입을
                   // 매개변수 'Bird' 타입에 할당할 수 없음
chirp(new Bird)
chirp(new Crow)


function clone(f: (b: Bird) => Bird): void {
    let parent = new Bird
    let babyBird = f(parent)
    babyBird.chirp()
}


function birdToBird(b: Bird): Bird {
    return new Bird
}
clone(birdToBird)  // Ok

function birdToCrow(b: Bird): Crow {
    return new Crow
}
clone(birdToCrow)  // Ok

function birdToAnimal(b: Bird): Animal {
    return new Animal
}
clone(birdToAnimal)  // 에러 TS2345: 인수 '(d: Bird) => Animal' 타입은
                     // 매개변수 '(b: Bird) => Bird' 타입에 할당할 수 없음
                     // 'Animal' 타입은 'Bird' 타입에 할당할 수 없음


function animalToBird(a: Animal): Bird {
    return new Bird
}
clone(animalToBird)  // Ok

function crowToBird(c: Crow): Bird {
    c.caw()
    return new Bird
}
clone(crowToBird)  // 에러 TS2345: 인수 '(c: Crow) => Bird'의 타입은
                   // 매개변수 '(b: Bird) => Bird' 타입에 할당할 수 없음

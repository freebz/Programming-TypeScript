// 5.4.2 구현

interface Animal {
    eat(food: string): void
    sleep(hours: number): void
}

class Cat implements Animal {
    eat(food: string) {
	console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
	console.info('Slept for', hours, 'hours')
    }
}

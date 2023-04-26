// 6.2 종합성

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

function getNextDay(w: Weekday): Day {
    switch (w) {
	case 'Mon': return 'Tue'
    }
}


function isBig(n: number) {
    if (n >= 100) {
	return true
    }
}


let nextDay = {
    Mon: 'Tue'
}

nextDay.Mon  // 'Tue'

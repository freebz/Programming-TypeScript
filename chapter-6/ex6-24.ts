// 6.3.4 컴패니언 객체 패턴

type Currency = {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}

let Currency = {
    DEFAULT: 'USD',
    from(value: number, unit = Currency.DEFAULT): Currency {
	return { unit, value }
    }
}



import { Currency } from './Currency'

let amountDue: Currency = {
    unit: 'JPY',
    value: 83733.10
}

let otherAmountDue = Currency.from(330, 'EUR')

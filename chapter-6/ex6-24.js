"use strict";
// 6.3.4 컴패니언 객체 패턴
Object.defineProperty(exports, "__esModule", { value: true });
var Currency = {
    DEFAULT: 'USD',
    from: function (value, unit) {
        if (unit === void 0) { unit = Currency.DEFAULT; }
        return { unit: unit, value: value };
    }
};
var amountDue = {
    unit: 'JPY',
    value: 83733.10
};
var otherAmountDue = Currency.from(330, 'EUR');

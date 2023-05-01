var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function ask() {
    return prompt('When is your birthday?');
}
// 커스텀 에러 타입
var InvalidDateFormatError = /** @class */ (function (_super) {
    __extends(InvalidDateFormatError, _super);
    function InvalidDateFormatError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidDateFormatError;
}(RangeError));
var DateIsInTheFutureError = /** @class */ (function (_super) {
    __extends(DateIsInTheFutureError, _super);
    function DateIsInTheFutureError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DateIsInTheFutureError;
}(RangeError));
/**
 * @throws {InvalidDateFormatError} 사용자가 생일을 잘못 입력함
 * @throws {DateIsInTheFutureError} 사용자가 생일을 미래 날짜로 입력함
 */
function parse(birthday) {
    var date = new Date(birthday);
    if (!isValid(date)) {
        throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
    }
    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError('Are you a timelord?');
    }
    return date;
}
// 입력한 날짜가 유효한지 검사
function isValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime());
}
try {
    var date = parse(ask());
    console.info('Date is', date.toISOString());
}
catch (e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
    }
    else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message);
    }
    else {
        throw e;
    }
}

// 6.2 종합성
function getNextDay(w) {
    switch (w) {
        case 'Mon': return 'Tue';
    }
}
function isBig(n) {
    if (n >= 100) {
        return true;
    }
}
var nextDay = {
    Mon: 'Tue'
};
nextDay.Mon; // 'Tue'

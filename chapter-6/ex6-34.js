// 6.6 탈출구
// 6.6.1 타입 어서션
function formatInput(input) {
    // ...
}
function getUserInput() {
    // ...
}
var input = getUserInput();
// input이 string이라고 어서션
formatInput(input);
// 위 코드와 같은 의미
formatInput(input);
function addToList(list, item) {
    // ...
}
addToList('this is really,', 'really unsafe');

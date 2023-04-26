// 6.1.2 가변성
function deleteUser(user) {
    delete user.id;
}
var existingUser = {
    id: 123456,
    name: 'Ima User'
};
deleteUser(existingUser);
var legacyUser = {
    id: '793331',
    name: 'Xin Yang'
};
deleteUser(legacyUser); // 에러 TS2345: 'LegacyUser' 인수 타입은 '{id?: number
// | undefined, name: string}' 타입에 할당할 수 없음
// 'string' 타입은 'number | undefined' 타입에
// 할당할 수 없음

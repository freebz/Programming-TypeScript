function CompanyID(id) {
    return id;
}
function OrderID(id) {
    return id;
}
function UserID(id) {
    return id;
}
function queryForUser(id) {
    // ...
}
var companyId = CompanyID('8a6076cf');
var orderId = OrderID('9994acc1');
var userId = UserID('d21b1dbf');
queryForUser(userId); // OK
queryForUser(companyId); // 에러 TS2345: 'Company ID' 타입의 인수를
// 'UserID' 타입의 매개변수에 할당할 수 없음

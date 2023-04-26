// 6.7 이름 기반 타입 흉내내기

type CompanyID = string
type OrderID = string
type UserID = string
type ID = CompanyID | OrderID | UserID


function queryForUser(id: UserID) {
    // ...
}


let id: CompanyID = 'b4843361'
queryForUser(id)  // OK (!!!)

type CompanyID = string & { readonly brand: unique symbol }
type OrderID = string & { readonly brand: unique symbol }
type UserID = string & { readonly brand: unique symbol }
type ID = CompanyID | OrderID | UserID


function CompanyID(id: string) {
    return id as CompanyID
}

function OrderID(id: string) {
    return id as OrderID
}

function UserID(id: string) {
    return id as UserID
}


function queryForUser(id: UserID) {
    // ...
}

let companyId = CompanyID('8a6076cf')
let orderId = OrderID('9994acc1')
let userId = UserID('d21b1dbf')

queryForUser(userId)     // OK
queryForUser(companyId)  // 에러 TS2345: 'CompanyID' 타입의 인수를
                         // 'UserID' 타입의 매개변수에 할당할 수 없음

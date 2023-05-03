// 9.3 백엔드 프레임워크

// node-postgres를 이용한 PostgreSQL
let client = new Client
let res = await client.query(
    'SELECT name FROM users where id = $1',
    [739311]
}  // any

// node-mongodb-native를 이용한 MongoDB
db.collection('users')
    .find({ id: 739311 })
    .toArray((err, user) =>
    // user는 any
}


db.collection('users')
    .find({ id: 739311 })
    .toArray((err, user: User) =>
    // user는 any
}



let user = await UserRepository
    .findOne({ id: 739311 })  // User | undefined

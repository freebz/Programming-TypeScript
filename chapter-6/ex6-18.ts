type FriendList = {
    count: number
    friends: {
	firstName: string
	lastName: string
    }[]
}

type APIResponse = {
    user: {
	userId: string
	friendList: FriendList
    }
}

function renderFriendList(friendList: FriendList) {
    // ...
}

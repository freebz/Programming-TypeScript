type APIResponse = {
    user: {
	userId: string
	friendList: {
	    count: number
	    friends: {
		firstName: string
		lastName: string
	    }[]
	}
    }
}

type FriendList = APIResponse['user']['friendList']

function renderFriendList(friendList: FriendList) {
    // ...
}


type Friend = FriendList['friends'][number]

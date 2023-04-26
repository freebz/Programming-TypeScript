// 6.3 고급 객체 타입

// 6.3.1 객체 타입의 타입 연산자

// 카인 연산자

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


function getAPIResponse(): Promise<APIResponse> {
    // ...
}
function renderFriendList(friendList: unknown) {
    // ...
}

let response = await getAPIResponse()
renderFriendList(response.user.friendList)

// 6.3 고급 객체 타입
function getAPIResponse() {
    // ...
}
function renderFriendList(friendList) {
    // ...
}
var response = await getAPIResponse();
renderFriendList(response.user.friendList);

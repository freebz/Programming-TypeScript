var userId;
fetchUser();
userId.toUpperCase(); // 에러 TS2454: 할당하지 않고 'userId' 변수를 사용함
function fetchUser() {
    userId = globalCache.get('userId');
}

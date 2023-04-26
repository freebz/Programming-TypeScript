var userId;
fetchUser();
userId.toUpperCase(); // OK
function fetchUser() {
    userId = globalCache.get('userId');
}

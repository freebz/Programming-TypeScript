let userId!: string
fetchUser()

userId.toUpperCase()  // OK

function fetchUser() {
    userId = globalCache.get('userId')
}

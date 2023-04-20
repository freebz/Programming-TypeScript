function warnUser(warning) {
    if (warnUser.wasCalled) {
	return
    }
    warnUser.wasCalled = true
    alert(warning)
}
warnUser.wasCalled = false


type WarnUser = {
    (warning: string): void
    wasCalled: boolean
}

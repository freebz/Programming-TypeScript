type VisibleDialog = {id: string}
type DestroyedDialog = {}
type Dialog = VisibleDialog | DestroyedDialog


function closeDialog(dialog: Dialog) {
    if (!('id' in dialog)) {
	return
    }
    setTimeout(() =>
	removeFromDOM(
	    dialog,
	    document.getElementById(dialog.id)!
	)
    )
}

function removeFromDOM(dialog: VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element)
    delete dialog.id
}

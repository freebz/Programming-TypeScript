function closeDialog(dialog) {
    if (!dialog.id) {
        return;
    }
    setTimeout(function () {
        return removeFromDOM(dialog, document.getElementById(dialog.id));
    });
}
function removeFromDOM(dialog, element) {
    element.parentNode.removeChild(element);
    delete dialog.id;
}

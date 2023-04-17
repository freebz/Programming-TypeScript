var d = [1, 'a'];
d.map(function (_) {
    if (typeof _ === 'number') {
        return _ * 3;
    }
    return _.toUpperCase();
});

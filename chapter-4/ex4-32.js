// 4.2.5 한정된 다형성
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = { value: 'a' };
var b = { value: 'b', isLeaf: true };
var c = { value: 'c', children: [b] };
var a1 = mapNode(a, function (_) { return _.toUpperCase(); }); // TreeNode
var b1 = mapNode(b, function (_) { return _.toUpperCase(); }); // LeafNode
var c1 = mapNode(c, function (_) { return _.toUpperCase(); }); // InnerNode
function mapNode(node, f) {
    return __assign(__assign({}, node), { value: f(node.value) });
}

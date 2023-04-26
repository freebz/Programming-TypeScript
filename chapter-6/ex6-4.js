var a = 'x'; // 'x'
var b = 3; // 3
var c = true; // true
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
var e = E.X; // E.X

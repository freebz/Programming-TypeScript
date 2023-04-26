// 6.1.4 타입 넓히기
var a = 'x'; // string
var b = 3; // number
var c = true; // boolean
var d = { x: 3 }; // {x: number}
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
var e = E.X; // E

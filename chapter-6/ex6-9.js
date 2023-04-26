// const 타입
var a = { x: 3 }; // {x: number}
var b; // {x: 3}
var c = { x: 3 }; // {readonly x: 3}
var d = [1, { x: 2 }]; // (number | {x: number})[]
var e = [1, { x: 2 }]; // readonly [1, {readonly x: 2}]

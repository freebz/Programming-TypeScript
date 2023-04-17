var Color;
(function (Color) {
    Color["Red"] = "#c10000";
    Color["Blue"] = "#007ac1";
    Color[Color["Pink"] = 12648528] = "Pink";
    Color[Color["White"] = 255] = "White"; // 10진수 리터럴
})(Color || (Color = {}));
var red = Color.Red; // Color
var pink = Color.Pink; // Color
var a = Color.Red; // Color
var b = Color.Green; // 에러 TS2339: 'Green' 프로퍼티는
// 'typeof Color' 타입에 존재하지 않음
var c = Color[255]; // string
var d = Color[6]; // string (!!!)

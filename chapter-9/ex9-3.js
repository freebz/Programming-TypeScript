"use strict";
// 리액트에서 tsx 사용하기
Object.defineProperty(exports, "__esModule", { value: true });
exports.FancyButton = void 0;
var react_1 = require("react");
function FancyButton(props) {
    var _a = react_1.default.useState(false), toggled = _a[0], setToggled = _a[1];
    return react_1.default.createElement("button", { className: 'Size=' + props.size, disabled: props.isDisabled || false, onClick: function (event) {
            setToggled(!toggled);
            props.onClick(event);
        } },
        " ",
        props.text,
        " ");
}
exports.FancyButton = FancyButton;
var button = react_1.default.createElement(FancyButton, { size: 'Big', text: 'Sign Up Now', onClick: function () { return console.log('Clicked!'); } });

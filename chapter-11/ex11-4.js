"use strict";
// 11.1.3 앰비언트 모듈 선언
Object.defineProperty(exports, "__esModule", { value: true });
var module_name_1 = require("module-name");
module_name_1.default.a; // string
var unsafe_module_name_1 = require("unsafe-module-name");
unsafe_module_name_1.x; // any
var json_myFile_1 = require("json!myFile");
json_myFile_1.default; // 객체
var widget_css_1 = require("./widget.css");
widget_css_1.default; // CSSRuleList

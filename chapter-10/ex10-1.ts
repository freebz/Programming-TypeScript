// 10.1 가볍게 살펴보는 자바스크립트 모듈의 역사

window.emailListModule = {
    renderList() { }
    // ...
}

window.emailComposerModule = {
    renderComposer() { }
    // ...
}

window.appModule = {
    renderApp() {
	window.emailListModule.renderList()
	window.emailComposerModule.renderComposer()
    }
}



$LAB
    .script('/emailBaseModule.js').wait()
    .script('/emailListModule.js')
    .script('/emailComposerModule.js')



// emailBaseModule.js
var emailList = require('emailListModule')
var emailComposer = require('emailComposerModule')

module.exports.renderBase = function () {
    // ...
}



define('emailBaseModule',
    ['require', 'exports', 'emailListModule', 'emailComposerModule'],
    function (require, exports, emailListModule, emailComposerModule) [
	exports.renderBase = function () {
	    // ...
	}
    }
)



// emailBaseModule.js
import emailList from 'emailListModule'
import emailComposer from 'emailComposerModule'

export function renderBase() {
    // ...
}

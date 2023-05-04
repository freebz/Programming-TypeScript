// 10.3.2 컴파일된 출력

// Flowers.ts
namespace Flowers {
    export function give(count: number) {
	return count + ' flowers'
    }
}


let Flowers
(function (Flowers) {
    function give(count) {
	return count + ' flowers'
    }
    Flowers.give = give
})(Flowers || (Flowers = {}))

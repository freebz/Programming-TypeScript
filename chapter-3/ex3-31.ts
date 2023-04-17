// 엄격한 null 확인

function addDeliciousFish(pizza: Pizza) {
    return pizza.addAnchovies()  // 잡히지 않은 TypeError: null에서
                                 // 'addAnchovies'라는 프로퍼티를 읽을 수 없음

// strictNullChecks = false로 설정하면 타입스크립트는 다음을 허용
addAnchovies(null);

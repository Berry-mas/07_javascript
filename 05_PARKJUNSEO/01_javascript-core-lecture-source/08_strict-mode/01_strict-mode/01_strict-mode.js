// 엄격모드 적용
// 1. 전역의 선두에 추가 : 스크립트 전체에 strict mode 적용
"use strict";

function test() {
  // 2. 함수 몸체의 선두에 추가 : 해당 함수와 중첩 함수에 strict mode 적용
  x = 10;
}

test();
console.log(`x > `, x); // 엄격모드라서 오류남

// Math :표준 빌트인 객체 Math는 수학적인 상수와 함수를 위한 프로퍼티와 메서드를 제공한다. 
// Math는 생성자 함수가 아니므로 정적 프로퍼티와 정적 메서드만 제공한다.

// Math.PI : 원주율 PI 값을 반환한다.
console.log(Math.PI); // 3.141592653589793
console.log(`===================================`);
// Math.abs : 인수로 전달된 숫자의 절대값을 반환
console.log(Math.abs(-10)); // 10
console.log(Math.abs('-10')); // 10
console.log(Math.abs('')); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs(null)); // 0
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs({})); // NaN
console.log(Math.abs('math')); // NaN
console.log(Math.abs());
console.log(`===================================`);
// Math.round : 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환
console.log(Math.round(10.1)); // 10
console.log(Math.round(10.9)); // 11
console.log(Math.round(-10.1)); // -10
console.log(Math.round(-10.9)); // -11
console.log(Math.round(10)); // 10
console.log(Math.round()); // NaN
console.log(`===================================`);
// Math.ceil : 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환
console.log(Math.ceil(10.1)); // 11
console.log(Math.ceil(10.9)); // 11
console.log(Math.ceil(-10.1)); // -10
console.log(Math.ceil(-10.9)); // -10
console.log(Math.ceil(10)); // 10
console.log(Math.ceil()); // NaN
console.log(`===================================`);
// Math.floor : 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환
console.log(Math.floor(10.1)); // 10
console.log(Math.floor(10.9)); // 10
console.log(Math.floor(-10.1)); // -11
console.log(Math.floor(-10.9)); // -11
console.log(Math.floor(10)); // 10
console.log(Math.floor());
console.log(`===================================`);
// Math.sqrt : 인수로 전달된 숫자의 제곱근을 반환
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(-4)); // NaN
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt()); // NaN
console.log(`===================================`);
// Math.random : 임의의 난수(0에서 1 미만의 실수) 반환
console.log(Math.random());
// 1~100 범위의 난수 추출
const random = Math.floor((Math.random() * 100) + 1);
console.log(random);
console.log(`===================================`);
// Math.pow : 첫번째 인수를 밑으로 두번째 인수를 지수로 거듭제곱한 결과 반환
console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(2, -2)); // 0.25
console.log(Math.pow(2)); // NaN
console.log(`===================================`);
// ES7에서 도입 된 지수 연산자를 사용할 수 있다
console.log(2 ** 2); // 4
console.log(2 ** -2); // 0.25
console.log(`===================================`);
// Math.max : 전달받은 인수 중 가장 큰 수를 반환
console.log(Math.max(10)); // 10
console.log(Math.max(10, 20)); // 20
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.max()); // -Infinity
console.log(`===================================`);
// Math.min : 전달받은 인수 중 가장 작은 수를 반환
console.log(Math.min(10)); // 10
console.log(Math.min(10, 20)); // 10
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.min()); // -Infinity
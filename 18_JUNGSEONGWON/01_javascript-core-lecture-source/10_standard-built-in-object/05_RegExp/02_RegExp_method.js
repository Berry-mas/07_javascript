// RegExp.prototype.exec
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다.
const target = 'Java JavaScript';
console.log(/va/.exec(target)); // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
// 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 매칭 결과만 반환
console.log(/va/g.exec(target)); // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
// 매칭 결과가 없을 경우 null 반환
console.log(/hello/.exec(target)); // null
console.log(`==============================================`);
// RegExp.prototype.test : 인인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언으로 반환한다.
console.log(/va/.test(target)); // true
console.log(/hello/.test(target)); // false
console.log(`==============================================`);
// String.prototype.match : String 표준 빌트인 객체가 제공하는 메서드로 대상 문자열과 인수로 전달 받은 정규 표현식과의 매칭 결과를 배열로 반환한다.
console.log(target.match(/va/)); // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
// 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정하면 모든 매칭 결과를 배열로 반환
console.log(target.match(/va/g)); // [ 'va', 'va' ]
console.log(target.match(/hello/)); // null
// 이외에 정규표현식을 사용하는 메서드 :String.prototype.replace, String.prototype.search, String.prototype.split 등이 있다. String 챕터에서 참조한다
console.log(`==============================================`);

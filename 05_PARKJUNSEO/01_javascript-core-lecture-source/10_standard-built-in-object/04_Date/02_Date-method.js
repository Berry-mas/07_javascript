// Date-method

// Date.now
/* 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다 */

// Date.parse
/* 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다. ### Date.UTC */
/* Date.UTC : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달 된 지정 시간까지의 밀리초를 숫자로 반환한다 */
/* 인수는 로컬 타임(KST)이 아닌 UTC로 인식된다 */
console.log(Date.parse("Jan 1, 1970 09:00:00")); // 0
console.log(Date.parse("Jan 1, 1970 09:00:00 UTC")); // 32400000
console.log(Date.parse("1970/01/01/09:00:00")); // 0
console.log(Date.parse("1970/01/01/09:00:00 UTC")); // 32400000

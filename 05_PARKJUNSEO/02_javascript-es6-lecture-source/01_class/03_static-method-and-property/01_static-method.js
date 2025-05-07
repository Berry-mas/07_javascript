// 정적 메소드
// 특정 클래스 인스턴스가 아닌 클래스 '전체'에 필요한 기능을 만들 때 사용한다.

class Student {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  // 클래스 선언부 안에 위치하고 static 키워드를 붙이면 정적메소드가 완성된다.
  static compare(studentA, studentB) {
    return studentA.height - studentB.height;
  }
}

let students = [
  new Student("유관순", 165),
  new Student("홍길동", 185),
  new Student("선덕여왕", 163),
];

students.sort();
console.log(students);

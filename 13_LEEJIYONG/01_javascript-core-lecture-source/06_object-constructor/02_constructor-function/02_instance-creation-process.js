function Student(name, age) {
  // 1. new 연ㅅ나자와 함꼐 호출될 경우 암묵적으로 인스턴스가 생성되며
  // this에 바인딩 되는 과정이 런타임 이전에 실행
  console.log(`check >>>>>`, this);

  //2. this에 바인딩 되어있는 인스턴스에 프로퍼티를 추가한다.
  this.name = name;
  console.log(`check >>>>>`, this);
  this.age = age;
  console.log(`check >>>>>`, this);
  this.getInfo = function () {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  };

  //3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.
  //return{}; -> 명시적으로 객체를 반환하면 암묵적인 this반환이 무시된다.
  //return 1; -> 명시적으로 원시값을 return 구문이 무시되고 this가 반환된다.
}

const student = new Student("장보고", 45);
console.log(student);

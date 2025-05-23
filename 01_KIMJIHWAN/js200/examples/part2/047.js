// 화살표 함수 이해하기 (Arrow FUnction)

const double = x => x + x;
console.log(double(2)); //4

const add = (a, b) => a + b;
console.log(add(1, 2));

const printArguments = () => {
    console.log(arguments);
}
printArguments(1, 2, 3);

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

setTimeout(() => {
    console.log("화살표 함수!");
}, 10);
/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = Number(prompt("덧셈할 첫 숫자를 입력",1));
let secondValue = +prompt('덧셈할 두번째 숫자 입력',2);
console.log(firstValue+secondValue);


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a = '10';
let b = '30';
// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a+b;

// 삼항 연산자
let ternary = Math.random() > 0.5? 'big' : 'small';

// 산술 연산자: 덧셈
let addition = a+b;

// 산술 연산자: 뺄셈
let subtraction = b-a;

// 산술 연산자: 곱셈
let multiplication = a*b;

// 산술 연산자: 나눗셈
let division = b/a;

// 산술 연산자: 나머지
let remainder = b%a;

// 산술 연산자: 거듭 제곱
let power = a**2;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
console.log(onlyWorkDefaultValues); //1,2,34,5,6 

let newArray = [1,2,3].concat([4,5,6]);
console.log(newArray);

// 전개 연산자 spread Operator
let firstArr = [1,2,3];
let secondArr = [4,5,6];
let newArr = [...firstArr,...secondArr];
console.log(newArr);




// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let number = 100;
// 선,후 증감 연산자
// ++, --
console.log(number++);
number++; //100
//여기서 101이 됨
++number; // 102
console.log(number);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

// let total = (count % 4) * (count /= 2) + count ** 3; 
// 2 * 5 > 10 + 1000 > 1010 잘못 생각 한 값
// 2 * 5 > 10 + 125 > 135 정답

let count = 10;
let total = count % 4;

count = count / 2;

let count3 = count ** 3;

total = total * count + count3;

console.log(total);



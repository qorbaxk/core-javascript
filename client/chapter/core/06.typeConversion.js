/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */
// String()

// number -> '2022'
const YEAR = '2022';
console.log(String(YEAR));

// undefined, null
// null -> 'null'
let days = null;
console.log(String(days));

// boolean
let isKind = true;
console.log(String(isKind));
console.log(isKind + '');




/* 데이터 → 숫자 ----------------------------------------------------------- */
// Number()

// undefined -> NaN 이건 숫자가 아니야
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean 
//true -> 1 false -> 0
let cutie = true;
console.log(Number(cutie));
console.log(cutie*1);
console.log(cutie/1);
console.log(+cutie);


// string 숫자형 문자
let num = '    123    '
console.log(num * 1);


// numeric string 
let width = '320px'
console.log(parseInt(width,10)); //정수만 쏙 빼줌 기본진수가 10진수라 생략가능
let height = '32.23120px'
console.log(parseFloat(width,10)); //부동소수점 실수로 파싱




/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
console.log(Boolean(null));
console.log(Boolean(!null));
console.log(Boolean(!!null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(!!''));

// 위에 나열한 것 이외의 것들 
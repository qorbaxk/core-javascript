/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */


let admin;
let name;

name='john';
admin=name;
console.log(admin);
admin===name?console.log("응"):console.log("아니");

let ourPlanetName = 'Earth';
let currentUserName = 'bsy';




/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// const itemMoney = 3000;
let calcProductQuantity;
// - 구매 제품 가격의 총 합
// let paySum;
let totalProductPrice;
// - 1년 기준 일(day)자 수
// const yearOfToday = 365;
const DAYS_PER_YEAR = 365;
// - 구매 결제 여부
// let payOrNot;
// is가 들어가면 t아니면f 값이 들어갈 때
let isPayment = true;
let hasPayment = false;
// - 구매 결제 내역
// let payBill;
let paymentHistory;
// - 브랜드 접두사
// let brandFirst;
const BRAND_PREFIX = 'APPLE';
// - 오늘의 운세
// const todayLuck = "you're okay";
let fortuneOfToday;
// - 상품 정보
// let itemInfo;
// 상품정보를 어디서 받아서 뿌려줄거냐, 저장해놓고 쓸거냐에 따라서 let const 갈림
const productInfo = '';


/* variables ----------------------------------------------------------- */


/* constant variables -------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                    Redux                                   */
/* -------------------------------------------------------------------------- */
// pending 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PENDING = 'api/pending';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';


/* -------------------------------------------------------------------------- */
/*                             Lexical Environment                            */
/* -------------------------------------------------------------------------- */

var nickName = 'tiger';
let nickName2 = 'tiger'; //Temporal Dead Zone (임시 사망 지역, 임시 사각 지역)
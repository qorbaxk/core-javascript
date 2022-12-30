/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: () => {
    return "이게되네?";
  },
};

let key = "creator";

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(key in javaScript); //key가 javascript 안에 있니? 할 때 쓰는게 in 문
Object.prototype.nickName = 'tiger'

// console.log(javaScript.hasOwnProperty(key));
//조상이 갖고 있는 것이 아닌 자신이 갖고있는 것으로 정확하게 찾을 수 있음
//hasOwnProperty 함수는 js 자체가 보호해주지 않음
//객체가 hasOwnProperty를 갖고 있으면 그 값이 리턴되기 때문에 위험하다

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));/
// call은 함수를 실행시키는 능력이 있음
//Object.prototype === {}


// for ~ in 문 객체의 키 값을 순환할 때 사용
for(let key in javaScript){
  if(({}).hasOwnProperty.call(javaScript,key)){
    console.log(key);
  }
  
}
// - 객체 자신의 속성만 순환하려면?

const user = {
  name:'tiger',
  age:25
}

const hello = (a,b,c)=>{
  console.log(a,b,c);
  console.log(this);
}

hello.call(user,1,2,3);

//for in 은 객체에 더 많이 씀


// - 배열 객체 순환에 사용할 경우?

let tens = [10,100,1000,10000];

for(let value in tens){
  if(({}).hasOwnProperty.call(tens,value)){
    console.log(tens[value]);
    
  }
}

// 성능이 워낙 안좋아서 배열을 for in으로 돌리는 일은 거의 없음
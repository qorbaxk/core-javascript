/* readyState
  0: uninitialized 초기화 - 안뜸
  1: loading 로딩 - 안뜸
  2: loaded 로딩이 완료된
  3: interactive 인터렉티브
  4: complete 완료
  */

// xhrData 함수 만들기 method, url

// 객체 구조분해 할당으로 초기값을 미리 할당해줘서 기본 값을 굳이 넘겨주지 않아도 되게끔 함
export const xhrData = ({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) => {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // headers의 key와 value를 배열로 반환해서 헤더요청함
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  // readyState의 값이 바뀔때마다 일어나는 이벤트
  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        // 콜백함수 실행
        onSuccess(JSON.parse(response));
      }
    } else {
      if (readyState === 4) {
        onFail("통신 실패");
      }
    }
  });

  // 서버에 요청 보내기
  xhr.send(JSON.stringify(body));
};

/* 
xhrData({
  url:'https://jsonplaceholder.typicode.com/users/1',
  method:'POST',
  onSuccess: (result)=>{
    console.log(result);
  },
  onFail:(err)=>{
    console.error(err);
  }
})
 */

// shorthand property

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

/* 
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/3',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
 */

// 객체를 추가하면 객체에 아이디값을 자동으로 부여해주는 기능이 포함된 듯?
/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "tony stark",
  username: "tony",
  email: "Tony@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "new york",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  }
}); */

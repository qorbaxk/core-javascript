function earth() {
  let water = true;
  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };
  let o2 = 9999;

  /*   function tiger() {
    console.log(water,o2);
  }

  return tiger; */
  return function () {
    console.log(water, o2);
  };
  //타이거가 갖다줬건말건 상관없어 정보만 중요한거니까
}

// 유에포가 타이거를 잡아가서 지구정보를 얻어내
const ufo = earth();

// 타이거가 지구에 살았기 때문에 지구의 환경을 다 기억한다. 그걸 유에포가 받아서 쓰는 것이다. 

//우주에는 가비지컬렉터라는 로켓이 날라다니는데, 유에포행성은 꽉 막혀있기 때문에 로켓이 접근할 수 없다. 



function handler(){

  let isClicked = false;

  // this 쓰고있으니까 일반함수로
  return function () {

    if(isClicked === true){
      this.style.background = 'transparent';
    }else{
      this.style.background = 'red';
    }
    isClicked = !isClicked;
  }
}


document.querySelector('.first').addEventListener('click',handler())
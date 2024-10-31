// ... 배열/객체를 다 흝붙여라.
let arr1=[1,2,3];
let arr2=[4,...arr1,5,6];

let obj1={
  a:1,
  b:2,
};


let obj2={
  ...obj1,
  c:3,
  d:4,
};

console.log(obj2);

//함수 호출시
function funcA(p1,p2,p3){
  console.log(p1,p2,p3);
}

funcA(...arr1);


//Rest 매개변수
//~ rest 는 나머지, 나머지 매개변수
//매개변수 ... 는 spread 가 아닌 rest 매개변수 이다.
//... rest 배열로 들어옴
function funcB(one, ...rest){
  console.log("rest ",rest);
}

funcB(...arr1);
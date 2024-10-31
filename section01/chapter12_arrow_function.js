//선언식, 호이스팅의 대상이 됨
function funcA(){
  console.log("funcA");
}

let var2 = funcA;
console.log(var2);

var2();

//호이스팅 : 변수 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 자바스크립트 고유의 특징
// 변수의 선언이 런타임 이전 단계에서 먼저 실행됨앗
//함수 표현식 : 호이스팅의 대상이 되지 않음
// 선언이 되지 않은 상태, 값만 있음
//변수 할당, 값으로써 함수 생성
//익명함수
let varB = function (){
  console.log("funcB");
}

//함수 할당 불가
varB();


//2. 화살표 함수
let varC =()=>{
  return 1;
}

console.log(varC());

//2-1 단지 값 리턴
let varD =()=> 1;

console.log(varD());

let varE =(v)=> v+1;
console.log(varE(10));

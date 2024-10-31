//1. 배열의 구조분해 할당
let arr=[1,2,3];

//배열의 값이 순서대로 할당됨
let [one,two, three, four=4]=arr;

console.log(one, two, three, four)

//객체의 구조분해 할당
let person={
  name:"jin",
  age:33,
  hobby:"tennis"
}

let {name , age:myAge, hobby, extra="hello"} = person;

console.log(name, myAge, hobby, extra);

//3. 객체의 구조분해 할당을 이용해서 함수의 매개변수를 받는 법
const func = ({name, age,bobby,extra})=>{
  console.log("@@ ", name, age, hobby, extra);
}

func(person)
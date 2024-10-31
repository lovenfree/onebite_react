//call back
// 자신이 아닌 다른 함수에, 인수로써 전달되는 함수


function main(v){
  console.log(v);
  v();
}

function sub(){
  console.log("i am sub");
}

main(sub);


main(()=>console.log("Test"));

//2. 콜백함수의 사용
function repeat(count){
  for(let idx=1;idx<=count;idx++){
    console.log(idx);
  }
}



// function repeatDouble(count){
//   for(let idx=1;idx<=count;idx++){
//     console.log(idx*2);
//   }
// }

repeat(5);
// repeatDouble(5);

//비슷한 일을 하는 함수의 중복 생성, 콜백을 이용한 개선
function repeatCallback(count, callback){
  for(let idx=1;idx<=count;idx++){
    callback(idx);
  }
}

repeatCallback(5,(idx)=>{
  console.log(idx);
})


repeatCallback(5,(idx)=>{
  console.log(idx*2);
})
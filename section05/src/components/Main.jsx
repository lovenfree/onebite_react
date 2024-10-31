import "./main.css"
import Button from "./Button"
import Header from "./Header"
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을수 있다
//2. 숫자, 문자열, 배열 값만 렌더링 된다. 불리언 null undefined 렌더링 불가, 객체도 불가
//3. 모든 태그는 닫혀있어야 한다.
//4. 최상위 태그는 하나여야만 한다 (빈태그 등: 빈태그는 흩뿌려져서 표현됨)
const Main=()=>{

  const user={
    name:"lee",
    isLogin:true
  }

  return(
    <>
      <Button text={"메일"} color={"red"}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        {/* <div>자식요소</div> */}
        <Header/>
      </Button>

    </>
)
}

export default Main;
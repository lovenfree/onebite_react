import {useState} from "react";
import useInput from "../hooks/useInput";

// 1. hook은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출할 수 없다
// 3. custom hook 직접 생성 가능 (컴포넌트 마다 반복사용되며 리액트 기능을 사용시 커스텀 훅을 생성하고 그것을 사용)
const HookExam=()=>{

  const [input, onChange]=useInput();
  const [input2, onChange2]=useInput();
  const state=useState();

  //리액트 구동시 hook 호출 순서가 엉망이 되버려서 조건문 사용불가
  // if(true){
  //   const state=useState();
  // }

  return(
    <div>
      HookExam
    </div>
  )
}

export default HookExam;
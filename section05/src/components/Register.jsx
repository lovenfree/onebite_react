import {useState,useRef} from 'react';


const Register =()=>{
  const [input,setInput]=useState({
    name:"",
    birth:"",
    country:"",
    bio:""
  })

  const countRef=useRef(0);
  const inputRef=useRef();

  console.log(input)

  const onChange=(e)=>{
    // countRef.current++;

    console.log(e.target.name + " : " + e.target.value);
    // property의 키로 지정 []
    setInput({...input,[e.target.name]: e.target.value});
  }

  const onSubmit=(e)=>{
    if(input.name===""){
       console.log(inputRef.current)
       inputRef.current.focus();
    }
  }
  return(
    <div>
      <div>
        <input name="name" value={input.name} ref={inputRef} placeholder={"name"} onChange={onChange}/>
      </div>
      <div>
        <input name="birth"  type="date" value={input.birth} placeholder={"birth"} onChange={onChange}/>
      </div>

      <div>
        <select  name="country"   value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">Korea</option>
          <option value="us">USA</option>
          <option value="uk">England</option>
        </select>
      </div>

      <div>
        <textarea  name="bio"  value={input.bio} placeholder={"bio"} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register;
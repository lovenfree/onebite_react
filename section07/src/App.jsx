
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useState, useEffect, useRef} from "react";

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  const isMount = useRef(false);

  //component lifecycle
  //mount
  useEffect(()=>{
    console.log("mount")
  },[])

  //update: change, re-rendering
  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log("update")
  })

  //unmount : die

  //dependency array : deps
  useEffect(()=>{
    console.log("changed count: ",count)
  },[count,input])

  const onClickButton=(value)=>{
    setCount(count+value);
  }

  return (

      <div className="App">
        <h1>Simple Counter</h1>
          <section>
            <input value={input} onChange={(e)=>{
              setInput(e.target.value)
            }}></input>
          </section>
          <section>
            <Viewer count={count}/>
          </section>
          <section>
            <Controller onClickButton={onClickButton}/>
          </section>
      </div>

  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const [count, setCount] = useState(15)
  const [count1, setCount1] = useState(10)



  //let counter = 15

  const addValue =()=> {    
    console.log("clicked",count);
    if(count<20){
      setCount(count+1)
    }
    
    
  }

  const subtractValue=()=>{

    if (count1 > 0)
    {
      setCount1(count1-1)
    }
    
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {count%count1}</h2>

      <button onClick={addValue}>Increase value {count}</button>
      <br />
      <button onClick={subtractValue} >Decrease value {count1}</button>
      {/* <p>footer : {count}</p> */}
    </>
  )
    

}

export default App

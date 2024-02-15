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
    
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)

      /* 

      -> This method is used when we have to update a single value multiple times
      using setstate method . The prevCounter variable here gives the previous value of the state 

      -> the setCount() methood in the state hook returns a callback which contains a previous value and then updates the previous value 
      by whatever condition is applied .

      -> the code below is the explaination/working of the setCount() method in useState hook.
      
      */

      // setCount(prevCounter => prevCounter+1)
      // setCount(prevCounter => prevCounter+1)
      // setCount(prevCounter => prevCounter+1)
      // setCount(prevCounter => prevCounter+1)


    
    
    
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

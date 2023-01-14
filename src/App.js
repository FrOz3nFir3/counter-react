import React from "react";
import { CounterComponent } from "./Counter";
import "./App.css";

function App() {
  const [count, updateCount] = React.useState(0);
  const [error, setError] = React.useState(null);

  // console log count on every state update
  React.useEffect(()=>{
    console.log(count)
  },[count])

 const props = {
   count,
   updateCount,
   error,
   setError
 }

 return <CounterComponent {...props}/>
}

export default App;

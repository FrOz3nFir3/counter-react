import React from 'react';

export function CounterComponent(props) {
  const {
    count,
    updateCount,
    error,
    setError
  } = props

  const incrementCount = React.useCallback(()=>{
    setError(null)
    updateCount((previousCount)=>previousCount + 1)
  },[])

  const decrementCount = React.useCallback(()=>{
    if(count == 0){
      alert("Cannot Decrement below zero");
      setError("Error : Cannot go below 0")
    }else{
      updateCount(count - 1)
    }
  },[count])

  const resetCount = React.useCallback(()=>{
    updateCount(0)
  },[])

  return (
   <div className="flow-space">
    <h2>Counter using React</h2>
    <p className="underline-text">Your current Count : <strong>{count}</strong></p>
    {error && <p className="error">{error}</p>}

    <div className="flex">
      <button className="bg-light" onClick={decrementCount}>Decrement</button>
      <button className="bg-light" onClick={incrementCount}>Increment</button>

      {count > 10 && <button className="bg-black" onClick={resetCount}>Go Back to 0</button>}
    </div>
  </div>
  );
}


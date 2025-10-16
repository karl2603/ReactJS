import React, { useState} from "react";

function App() {
  const [num,setnum] = useState(0)
  function addnum(){
    setnum(num+1)
  }
  function subnum(){
    setnum(num-1)
  }
  return (
    <div className="container">
      <h1>Total Items in cart = {num}</h1>
      <div className="item">
        <h1>Toblerone</h1>
        <button className="addBtn" onClick={addnum}>Add</button>
        <button className="subBtn" onClick={subnum}>Del</button>
      </div>
      <div className="item">
        <h1>Snickers</h1>
        <button className="addBtn" onClick={addnum}>Add</button>
        <button className="subBtn" onClick={subnum}>Del</button>
      </div>
      <div className="item">
        <h1>Lottie Chocopie</h1>
        <button className="addBtn" onClick={addnum}>Add</button>
        <button className="subBtn" onClick={subnum}>Del</button>
      </div>
    </div>

  )
}
export default App;
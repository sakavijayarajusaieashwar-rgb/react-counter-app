import "./App.css";
import {useState} from "react";
const App=()=>{
const[count,setCount]=useState(0);
const onIncrease=()=>{
  setCount((prevCount)=>prevCount+1);
};
const onDecrease=()=>{
  setCount((prevCount)=>prevCount-1);
};
return(
  <div className="maincontainer">
    <h1 className="counterHeading">Counter App</h1>
    <h2 className={count>0?"positive":count===0?"zero":"Negitive"}>
      {count}
      </h2>
    
    <div className="buttonContainer">
      <button onClick={onDecrease} className="button">decrease</button>
      <button onClick={onIncrease} className="button">increase</button>
    </div>
  </div>
)

}
export default App;
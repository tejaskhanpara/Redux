
import './App.css';
import { incNum,decNum,incByNum } from './Actions';
import { useDispatch , useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const [tax , setTax] = useState(0)
  const val = useSelector((state)=>state.ChangeNumber);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{val}</h1>
      <input type="button" value="+" onClick={() => {dispatch(incNum())}}></input>
      <input type="button" value="-" onClick={() => {dispatch(decNum())}} ></input><br></br>
      <input type="text" onChange={(t)=>{setTax(t.target.value)}}></input>
      <input type="button" value="Add" onClick={() => {dispatch(incByNum(tax))}} ></input>
    </div>
  );
}

export default App;

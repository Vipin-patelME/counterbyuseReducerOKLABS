import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADD, SUB } from '../action/actionConstants';
import '../App.css';

const initialState = {
  count:0
}

const countReducer = (state, action)=>{
  switch(action.type){
    case ADD:
      return{
        ...state,
        count:state.count + action.payload
      }
    case SUB:
      return{
        ...state,
        count:state.count - action.payload
      }
  }
}


function UsingSwitchCase() {
  const navigate = useNavigate()
  const [newCount, dispatch] = useReducer(countReducer, initialState)

  const {count} = newCount
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is A simple counter made by using useReducer Hook</h1>
        <h3>Count : <span style={{color:"yellow"}}>{count}</span></h3>
        <div>
          <button onClick={()=>{ dispatch({type:"ADD", payload:2})}} type='button' style={{fontSize:"20px", fontWeight:"bold"}}>+2</button>
          <button onClick={()=>{ dispatch({type:"ADD", payload:3})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>+3</button>
          <button onClick={()=>{ dispatch({type:"ADD", payload:4})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>+4</button>
          <button onClick={()=>{ dispatch({type:"ADD", payload:5})}} type='button'style={{fontSize:"20px", fontWeight:"bold", marginRight:"20px"}}>+5</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:2})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-2</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:3})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-3</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:4})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-4</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:5})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-5</button>
        </div>
        <button onClick={()=>{navigate("/if-else-useReducer")}} style={{margin:"10px", padding:"10px", fontSize:"20px", borderRadius:"8px", backgroundColor:"skyblue"}} type='button'>click me to try useReducer with if else statement</button>
      </header>
    </div>
  );
}

export default UsingSwitchCase;
import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { ADD, RESET, SUB } from '../action/actionConstants'

    const initialState = {
        count:0
    }
    const counterReducer = (state, action)=>{
        if (action.type === ADD){
            return{
                ...state,
                count:state.count + action.payload
            }
        }
        else if (action.type === SUB){
            return{
                ...state,
                count:state.count - action.payload
            }
        }
        else if (action.type === RESET){
            return{
                ...state,
                count:0
            }
        }
        else{
            return state
        }
    }


const UsingIfElse = () => {

    const [newCount, dispatch] = useReducer(counterReducer, initialState)
    const navigate = useNavigate()
    
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
          <button onClick={()=>{ dispatch({type:"RESET"})}} type='button' style={{fontSize:"20px", fontWeight:"bold", marginRight:"20px", backgroundColor:"greenyellow", padding:"5px", borderRadius:"8px"}} >Reset</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:2})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-2</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:3})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-3</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:4})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-4</button>
          <button onClick={()=>{ dispatch({type:"SUB", payload:5})}} type='button'style={{fontSize:"20px", fontWeight:"bold"}}>-5</button>
        </div>
        <button onClick={()=>{navigate("/")}} type='button' style={{marginTop:"40px", padding:"10px", fontSize:"20px", borderRadius:"8px", backgroundColor:"skyblue"}} >Back</button>
      </header>
    </div>
  )
}

export default UsingIfElse
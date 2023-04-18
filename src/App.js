import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsingIfElse from './pages/UsingIfElse'
import UsingSwitchCase from './pages/UsingSwitchCase'

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsingSwitchCase />}></Route>
        <Route path='/if-else-useReducer' element={<UsingIfElse />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
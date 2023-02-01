import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData]= useState('');
    const dispatch = useDispatch();
  return (
    <>
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here </figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="add Item..." value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
          <i className="fas fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData))}></i>
        </div>
      </div>
    </div>
   </>
 
  )
}

export default Todo

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData]= useState('');
    const dispatch = useDispatch();
    // console.log(dispatch);
    // console.log(inputData);
    const list = useSelector((state)=>state.todoReducer.list)
    // console.log(list);

    const add = () => {
      if (inputData === "" ) {
        alert("Input is Empty");
      } else {
        dispatch(addTodo(inputData));
      }
    };

  return (
    <>
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here </figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="add Item..." value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
          <i className="fas fa-plus add-btn" onClick={add} ></i>
        </div>
        <div className="showItems">

      {
          list.map((ele)=>{
           return (<div className="eachItem" key={ele.id}>
            <h3>
              {ele.data}
            </h3>
            <div className="todo-btn">
            <i className="fas fa-trash add-btn" title='delete item' onClick={()=>dispatch(deleteTodo(ele.id))}></i>
            </div>
          </div>)
           
          }) 
        }
         
        </div>
        <div className="showItems">
          <button className="btn" onClick={()=>dispatch(removeTodo())}>Remove All </button>
        </div>


      </div>
    </div>
   </>
 
  )
}

export default Todo

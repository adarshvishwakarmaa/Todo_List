import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

const Home = () => {
    const [todos, settodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:7000/get')
        .then(result =>settodos(result.data))
        .catch(err=>console.log(err))
    }, []);

    const handleDelete = (id) =>{
        axios.delete('http://localhost:7000/delete/'+id)
        .then(result =>{location.reload()})
        .catch(err=>console.log(err))
    }

    const handleEdit = (id)=>{
        axios.put('http://localhost:7000/update/'+id)
        .then(result =>{location.reload()})
        .catch(err=>console.log(err))
    }
  return (
    <div className='home'>
       <h2>Todo List</h2>
       <Create/>
        {  
          todos.length === 0
          ?
          <div><h2>No Record</h2></div>
          :
          todos.map(todo=>(
            <div className='task' key={todo._id}>
                <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                    {todo.done ?
                      <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                      : <BsCircleFill className='icon'/>
                    }
                   <p className={todo.done ? "line_thought" :""}>{todo.task}</p>
                </div>
                <div>
                    <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
                </div>
              
            </div>
          ))
       }
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [task, settask] = useState();
     
    const addHandler =()=> {
        axios.post("http://localhost:7000/add",{task:task})
        .then(result =>{
            location.reload()
        })
        .catch(error =>console.log(error));
    }
  return (
    <div className='create'>
      <input type="text" name='' id='' placeholder='Enter Task' onChange={(e)=>settask(e.target.value)}/>
      <button type='button' onClick={addHandler}>Add</button>
    </div>
  )
}

export default Create

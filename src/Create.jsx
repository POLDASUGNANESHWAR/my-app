import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task,setTask] = useState()

    const SubmitTask = () => {
        axios.post('http://localhost:2130/add', {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <input type='text' placeholder='Enter Task' onChange={(event) => setTask(event.target.value)}/>
        <button type='button' onClick={SubmitTask}>Add</button>
    </div>
  )
}

export default Create
import { useState,useEffect} from 'react'
import { BsCircleFill, BsFillCheckCircleFill,BsFillTrashFill} from "react-icons/bs";
import React from 'react'
import Create from './Create'
import axios from 'axios'
import './Home.css'

function Home() {
    const [todos, setTodos] = useState([])

    useEffect (()=>{
        axios.get('http://localhost:2130/get')
        .then(result => setTodos(result.data))
        .catch(error => console.log(error))
    },[])

    const handlEdit = (id) => {
        axios.put('http://localhost:2130/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(error => console.log(error))
    }

    const handleDelete = (id) => {
        axios.put('http://localhost:2130/delete/'+id)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

  return (
    <div>
        <h1>Todo List</h1>
        <Create/>
        <br/>
        {
            todos.length === 0 
            ? 
            <div><h1>No Record</h1></div>
            :
            todos.map(todo => (
                <div className='task'>
                    <div className='icon'>
                        <BsCircleFill className='icon' onClick={() => handlEdit(todo._id)}/>
                            {todo.done  ?
                             <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill> 
                             :
                             <BsCircleFill className='icon'/>   
                        }
                    <p className={todo.task ? "line_through" : ""}></p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home
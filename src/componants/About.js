import React, { useEffect, useState } from 'react'
import{Table} from 'react-bootstrap'


export default function About() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            result.json().then((res)=>{
    
                console.warn("result",res);
                setData(res)
            })
        })
    },[])
    console.log(data);
  return (
    <>
    <h1>About</h1>
    <Table striped bordered hover >
       <tbody>
       <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
        </tr>
        {
            data.map((items)=> <tr>
            <td>{items.id}</td>
            <td>{items.email}</td>
            <td>{items.username}</td>
            
        </tr>
            )
        }
       </tbody>
</Table>
    </>
  )
}

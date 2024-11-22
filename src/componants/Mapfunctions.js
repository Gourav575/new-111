import React from 'react';
import{Table} from 'react-bootstrap'

const student = [
    { name: 'Ram', email : 'test1@gmail.com', address: [
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
    ] },
    { name: 'Shyam', email : 'test2@gmail.com', address: [
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
    ] },
    { name: 'Laxam', email : 'test3@gmail.com', address: [
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
     { hn:'223', city:'delhi', country:'india'},  
    ] },
    { name: 'manish', email : 'tes41@gmail.com', address: [
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
       ] },
    { name: 'Rahul', email :'test5@gmail.com', address: [
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
        { hn:'223', city:'delhi', country:'india'},  
       ] },
]

function Mapfunctions() {
    return ( 
    <div>
    <h1>TAble</h1>
    <Table striped bordered hover >
       <tbody>
       <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
        </tr>
        {
            student.map((items)=> <tr>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>
            <Table striped bordered hover >
            <tbody>
                {
                    items.address.map((data)=>
                        <tr>
                        <td>{data.hn}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                    </tr>
                    )
                }
                
                
            </tbody>
            </Table>

            </td>
        </tr>
            )
        }
       </tbody>
</Table>

    </div>
    );
}
export default Mapfunctions;
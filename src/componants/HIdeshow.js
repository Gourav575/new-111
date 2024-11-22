import React,{useState} from 'react'
function Hideshow(){
    const [setuats,setStuats]=useState(true)

return( 
<div>
    {
        setuats? <h1>Hello</h1>:null
    }

    {/* <button onClick={()=>setStuats(false)}>Hide</button>
    <button onClick={()=>setStuats(true)}>Show</button> */}
    <button onClick={()=>setStuats(!setuats)}>Toggle</button>

</div>


);
}

export default Hideshow;
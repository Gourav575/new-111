import React,{useState} from "react";
function Dataget(){
    const [data,setData] =useState(null)
    const [print,setPrint]= useState(false)
    function Datachange(val){
        setData(val.target.value)
        setPrint()
    }
return(
    <div>
       {
        print?
        <h1>{data}</h1>
        :null
       }
       <input name="" type="text" onChange={Datachange} />
       <button onClick={()=>setPrint(true)}>Submit</button>
    </div>
);
}

export default Dataget
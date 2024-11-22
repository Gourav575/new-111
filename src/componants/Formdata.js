import React,{useState} from "react";
function Formdata(){

    const [name,setName]=useState("");
    const [opt,setOpt]=useState("");
    const [chek,setchek]=useState("");
    function getFormdata(e){
        console.warn(name,opt,chek)
        e.preventDefault()
    }
    return(
        <div className="container p-3">
            
       <form onSubmit={getFormdata}>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" onChange={(e)=>setName(e.target.value)} /><br/>
  <label for="lname">Last name:</label><br/>
  <select  onChange={(e)=>setOpt(e.target.value)}>
    <option>Select-1</option>
    <option>Select-2</option>
    <option>Select-3</option>
    <option>Select-4</option>
  </select><br/>
  <input type="checkbox"  onChange={(e)=>setchek(e.target.checked)}/>i habve accept detail <br/>
   <input type="submit" value="Submit" />
</form> 



    </div>
    );
}

export default Formdata;
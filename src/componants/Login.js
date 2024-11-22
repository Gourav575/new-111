import React,{useState} from "react";
function Login(){
    let [mail,setuserMail]=useState("");
    let [password,setPassword]=useState(false);
    function loginform(e){
        e.preventDefault()
    }
    function setMail(e){
        let item = e.target.value;
        if(item.length<3){
            setuserMail(true)
        }
        else{
            setuserMail(false)
        }
    }
    return(
        <div>
            <form onSubmit={loginform}>
                <label>Email
               </label>
                <input type="email" placeholder="email" onChange={setMail}/>  {
                setuserMail?<span>not found</span>:""} <br/>
                <label>Password</label>
                <input type="password" placeholder="email" onChange={setPassword}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Login;
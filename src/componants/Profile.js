import React,{useState} from "react";
function Profile(){
    const [login,setlogin]=useState(null);
    
    return(
        <div>
            {
                login==1?<h1>Helo Profile1</h1>:login==2?<h1>Helo Profile2</h1>:<h1>Helo Profile</h1>
            }
            

        </div>
    );
}
export default Profile;


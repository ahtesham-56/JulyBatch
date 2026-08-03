import React from "react";

function Noti(){
    alert('Applied')
}

function button(){

    return(

        <div>
            <button onClick={Noti} style={{ backgroundColor: 'blue', padding: '10px', borderRadius:'5px', border:'none', color:'white'}} >Apply Now</button>
        </div>
    )
}

export default button
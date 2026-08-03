import React from "react";
import Button from "./Button";

function ProfileCard(){


    return(

        <div>

            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWnyk9GWP3WrUuJrj7qvFUwMnbo9NGxVLyz6C4tsLeA&s=10" style={{ height : '200px', width : '200px'}} />
            <h2>John Smith</h2>
            <p>Web Developer</p>
            <Button />

        </div>
    )
}

export default ProfileCard
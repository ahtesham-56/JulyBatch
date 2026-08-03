import React from "react";
import ProfileCard from "./ProfileCard";

function App(){

  var company = "Amzone"

  return(

    <div style={{ marginLeft:'10px'}}>
      <h1>ProfileCard For {company}</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  )


}

export default App
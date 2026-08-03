// import React from "react";

// function App(){

//   let count = 0
  
//   function Increase(){

//     count = count + 1;
//     console.log(count)
//   }

//   return(
//     <div>
//       <h1>Hello This React + Vite </h1>
//       <h2>Cpunter : {count} </h2>
//       <button onClick={Increase}>Increase</button>
//     </div>
//   )
// }

// export default App


// import { useState } from "react";

// // Example of insta Like Button

// function App(){

//   function increase(){
//     setLikes(Likes+1)
//     console.log(Likes)
//   }

//   const [Likes, setLikes] = useState(10);

//   return(

//     <div>
//       <h1>Likes :  {Likes}</h1>
//       <button onClick={increase}>♥️ likes</button>
//     </div>
//   )
// }

// export default App

import { useState } from "react";

function App(){

  const [show, setshoow] = useState(false)

  return(

    <div>
      <input type= { show ? "text" : "password"} placeholder="Enter your password" />
      <button onClick={ () => setshoow(!show) }>
        Show/Hide
      </button>
    </div>
  )
}

export default App

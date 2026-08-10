// // import React from "react";

// // function App(){

// //   function handlClick(){
// //     alert("Logged in Successfully")
// //   }

// //   return(

// //     <div>
// //       <button onClick={handlClick}>Click Me</button>
// //     </div>
// //   )
// // }

// // export default App

// import { useState } from "react";

// function App(){

//   const[isFollowed, setIsFollwed] = useState(false)

//   return(

//     <div>
//       <button onClick={ ()=> setIsFollwed(!isFollowed)}>
//         {isFollowed ? "Following" : "Follow"}
//       </button>
//     </div>
//   )
// }
// export default App


// Ex Live Search Shoping

// import { useState } from "react";

// function App(){

//   const[text, setText] = useState("")

//   return(

//     <div>
//       <input placeholder="search..."
//       onChange={(e)=> setText(e.target.value) }
//       />

//       <h3>You Typed : {text}</h3>
//     </div>
//   )
// }
// export default App


import { useState } from "react";

function App(){

  function handlClick(){
    setColor("black")
    setDark(!dark)
  }

  const[color, setColor] = useState("White")
  const[dark, setDark] = useState("false")

  return(

    <div style={{backgroundColor: 'color', height:'100vh' }}>
      <button onClick={handlClick}>
        {dark? "☀️" : "🌙"}
      </button>
    </div>
  )
}
export default App
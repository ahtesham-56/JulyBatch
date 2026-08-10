// import { useEffect } from "react"
// function App(){

//   useEffects(()=>{
//     console.log("Component Loaded")
//   }, [])

//   return(
//     <div>
//       <h1>React Hooks</h1>
//     </div>
//   )
// }

// export default App


// import { useEffect, useState } from "react"
// function App(){

//   const[users, setUsers] = useState([])

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")

//     .then(response => response.json())
//     .then(data => setUsers(data) );


//   }, []);

//   return(
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(xyz =>(
//           <p key={xyz.id}>{xyz.name}</p>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from "react"
function App(){

  const[users, setUsers] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())
    .then(data => setUsers(data) );


  }, []);

  return(
    <div>
      <h1>Employee Dashboard</h1>
      <ul>
        {users.map(xyz =>(
          
          <div key={xyz.id} style={{backgroundColor:'beige', padding:'10px', border: '2px solid black', borderRadius:'12px'}}>
            <h3>{xyz.name}</h3>
            <p>{xyz.email}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
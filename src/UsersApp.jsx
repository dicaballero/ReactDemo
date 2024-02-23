import { useState, useEffect } from "react"
import { UserList } from "./UserList";

export const UsersApp = () => {

   const [endpoint, setEndpoint] = useState('users');

   const handleFetch =()=>{
    setEndpoint('comments');
   }

  {/* useEffect(()=>{
      fetchUsers();
   },[]);*/}

  return (
    <>
    <h1>Lista de usuarios</h1>
    <UserList endpoint={endpoint}></UserList>
    <button onClick={handleFetch}>Lista</button>
    </>
  )
}

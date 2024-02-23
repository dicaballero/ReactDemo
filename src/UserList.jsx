import { useFetchHook } from "./hooks/useFetchHook"


export const UserList = ({endpoint}) => {

  const {data, isLoading } = useFetchHook(endpoint);
  
  return (
    <>
    <ul>
       {
       isLoading ? <p>Cargando...</p>
                 : endpoint == 'users' 
                 ? data.map(user=><li key={user.id}>{user.id}</li>)
                 : data.map(user=><li key={user.id}>{user.body}</li>)
        } 
    </ul>
    </>
  )
}

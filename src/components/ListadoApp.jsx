import { useState } from "react"
import { AgregarTarea } from "./Components/AgregarTarea"

const Items1 = ({ nombre, visto }) => {
    return(
    <li>{nombre} 
    {visto ? '🆗':'❌'}
    {/*{visto && '✔'}  Operador ternario ALTERNATIVO evalua la primer opcion y si es true ejecuta la siguiente*/}
    </li>
    )
}


export const ListadoApp = () => {

let listadoSecciones =[
   {id:0,nombre:'Lain',visto:true},
   {id:1,nombre:'Lain1',visto:true},
   {id:2,nombre:'Lain2',visto:true}
]

const [arreglo, setArreglo] = useState(listadoSecciones);
  
  const onChildEvent =(val)=>
  {
      if(val<1) return
      const envio = {
       id:arreglo.length,
       nombre:val,
       visto:false
      }
      setArreglo([...arreglo, envio]);
      console.log(arreglo);
  }
 
  return (
    <>
    <h1>Listado de Lains en el Curso1</h1>
    <AgregarTarea agregarTarea={onChildEvent}></AgregarTarea>
    <ol>

        {arreglo.map(item => <Items1 key={item.id} nombre={item.nombre} visto={item.visto}></Items1>)}

    </ol>
    </>
  )
}

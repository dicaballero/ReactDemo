import React, { useState } from 'react'

export const AgregarTarea = ({agregarTarea}) => {
   
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    const onInputSubmit = (event)=>{
      event.preventDefault();
      agregarTarea(inputValue);
    }
  return (
    <form onSubmit={onInputSubmit}>
    <input type="text" placeholder='Indica una tarea de Lain' value={inputValue} onChange={onInputChange}/>
    </form>
  )
}

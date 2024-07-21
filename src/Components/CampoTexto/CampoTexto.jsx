import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ({mandatory, type, placeholder, label, valor, aoAlterado}) => {
    
    const aoDigitar = (event) => {
      aoAlterado(event.target.value)
    }

    return (
        <div className='campoTexto'>
            <label htmlFor={label}>{label}</label>
            <input value={valor} type={type} placeholder={placeholder} required={mandatory} onChange={aoDigitar} />
        </div>
    )
}

export default CampoTexto
import React from 'react'
import './ListaSuspensa.css'

export default function ListaSuspensa({mandatory, label, times, valor, aoAlterado}) {
  return (
    <div className='containerlistaSuspensa'>
        <label>{label}</label>
        <select onChange={event => aoAlterado(event.target.value)} required={mandatory} value={valor}>
           {times.map( time => (
             <option key={time}>{time}</option>
           ))}
        </select>
    </div>
  )
}

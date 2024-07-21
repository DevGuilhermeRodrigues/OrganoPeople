import React from 'react'
import './ListaSuspensa.css'

export default function ListaSuspensa({label, times}) {
    console.log(times)
  return (
    <div className='containerlistaSuspensa'>
        <label>{label}</label>
        <select>
           {times.map( time => (
             <option>{time}</option>
           ))}
        </select>
    </div>
  )
}

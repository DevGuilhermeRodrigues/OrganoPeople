import React from 'react'
import './Time.css'

function Time({time, corPrimaria, corSecundaria}) {
  return (
    <section className='containerTime' style={{backgroundColor: corSecundaria}}>
        <h3 style={{borderBottom: `3px solid ${corPrimaria}`}}>{time}</h3>
    </section>
  )
}

export default Time;

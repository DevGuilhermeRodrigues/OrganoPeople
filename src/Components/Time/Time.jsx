import React from 'react'
import './Time.css'
import Colaborador from '../Colaborador/Colaborador';

function Time({time, corPrimaria, corSecundaria, colaboradores}) {
  return (
    <section className='containerTime' style={{backgroundColor: corSecundaria}}>
        <h3 style={{borderBottom: `3px solid ${corPrimaria}`}}>{time}</h3>
        <div className='colaboradores'>
          {colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} time={colaborador.time}/> )}
        </div>
    </section>
  )
}

export default Time;

import React from 'react'
import './Time.css'
import Colaborador from '../Colaborador/Colaborador';

function Time({time, corPrimaria, corSecundaria, colaboradores}) {
  return (

    (colaboradores.length > 0) && <section className='containerTime' style={{backgroundColor: corSecundaria}}>
          <h3 style={{borderBottom: `3px solid ${corPrimaria}`}}>{time}</h3>
          <div className='colaboradores'>
            {colaboradores.map( colaborador => (
              <Colaborador 
                key={colaborador.nome}
                nome={colaborador.nome}   
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem} 
                time={colaborador.time}
                corPrimaria={corPrimaria}
                />
            ) )}
          </div>
      </section>
    
  )
}

export default Time;

import React from 'react'
import './Colaborador.css'

export default function Colaborador({nome, cargo, imagem}) {
  return (
    <div className='containerColaborador'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}
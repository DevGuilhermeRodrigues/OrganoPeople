import React from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import Button from '../Button/Button'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'

export default function Formulario() {
 
  const times = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão'
  ]

  return (
    <section className='containerForm'>
        <form>
          <h2 className='tituloForm'>Preencha os dados para criar o card do colaborador.</h2>
          <CampoTexto type="texto" placeholder="Digite seu nome" label="Nome" />
          <CampoTexto type="texto" placeholder="Digite seu cargo" label="Cargo" />
          <CampoTexto type="texto" placeholder="Informe o endereço da imagem" label="Imagem" />
          <ListaSuspensa label="Time" times={times} />
          <Button />
        </form>
    </section>
  )
}

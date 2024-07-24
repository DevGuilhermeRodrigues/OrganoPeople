import React, { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import Button from '../Button/Button'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

export default function Formulario({colaboradorAdicionado, times}) {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const handlerSubmit = (event) => {
     event.preventDefault()

     colaboradorAdicionado({
        nome,
        cargo,
        imagem,
        time 
     })

     setNome('')
     setCargo('')
     setImagem('')
     setTime(time[0])
  }

  return (
    <section className='containerForm'>
        <form onSubmit={handlerSubmit}>
          <h2 className='tituloForm'>Preencha os dados para criar o card do colaborador.</h2>
          <CampoTexto 
              mandatory={true} 
              type="texto" 
              placeholder="Digite seu nome" 
              label="Nome" 
              valor={nome}
              aoAlterado={valor => setNome(valor)}
          />

          <CampoTexto 
              mandatory={true} 
              type="texto" 
              placeholder="Digite seu cargo" 
              label="Cargo"
              valor={cargo}
              aoAlterado={valor => setCargo(valor)} 
          />

          <CampoTexto 
              type="texto" 
              placeholder="Informe o endereço da imagem ex: http://github.com/nomedeusuario.png" 
              label="Imagem"
              valor={imagem}
              aoAlterado={valor => setImagem(valor)} 
          />

          <ListaSuspensa 
              mandatory={true} 
              label="Time" 
              times={times} 
              valor={time}
              aoAlterado={valor => setTime(valor)}
          />

          <Button 
              texto='Criar card' 
          />
        </form>
    </section>
  )
}

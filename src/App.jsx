import { useState } from "react"
import './style.css'
import Banner from "./Components/Banner/Banner"
import Formulario from "./Components/Formulario/Formulario"
import Time from "./Components/Time/Time"

function App() {

  const times = [
    { time: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    { time: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    { time: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    { time: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    { time: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    { time: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    { time: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    

  ]
  
  const [colaborador, setColaborador] = useState([])

  const aoNovoColaboradorAdicionado = (colaboradores) => {
     setColaborador([...colaborador, colaboradores ])
     console.log(colaborador)
  }

  return (
    <>
      <Banner />
      <Formulario colaboradorAdicionado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)} />

      {times.map( time => (
        <Time  
          key={time.time} 
          time={time.time}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria} 
        />
      ))} 
       
      {/* <Time time="Programação" />
      <Time time="Front-End" />
      <Time time="Data Science" />
      <Time time="Devops" />
      <Time time="UX e Design" />
      <Time time="Mobile" />
      <Time time="Inovação e Gestão" /> */}
    </>
  )
}

export default App

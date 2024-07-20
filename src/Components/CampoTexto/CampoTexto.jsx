import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className='campoTexto'>
            <label>Nome</label>
            <input type='text' placeholder='Digite seu nome'/>

            <label>Cargo</label>
            <input type='text' placeholder='Digite seu cargo'/>

            <label>Imagem</label>
            <input type="text" placeholder='Informe o endereço da imagem'/>
        </div>
    )
}

export default CampoTexto
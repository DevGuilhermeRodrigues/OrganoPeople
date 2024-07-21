import './CampoTexto.css'

const CampoTexto = ({type, placeholder, label}) => {
    return (
        <div className='campoTexto'>
            <label htmlFor={label}>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto
import imgBanner from "../../assets/imagens/banner.png";
import './Banner.css'

function Banner() {
    return (
        <header className="banner">
          <img src={imgBanner} alt="Banner principal da pagina organo" />
        </header>
    )
}

export default Banner;
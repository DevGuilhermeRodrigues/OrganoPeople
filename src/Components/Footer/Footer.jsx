import React from 'react'
import './Footer.css'
import Facebook from '../../assets/imagens/fb.png'
import Twitter from '../../assets/imagens/tw.png'
import Instagram from '../../assets/imagens/ig.png'
import LogoOrgano from '../../assets/imagens/logo.png'


export default function Form() {
  return (
    <footer className='containerFooter'>
        <div>
            <ul>
                <li><a href='#'>
                  <img src={Facebook} alt='Logo facebook' />    
                </a></li>

                <li><a href='#'>
                  <img src={Twitter} alt='Logo facebook' />    
                </a></li>

                <li><a href='#'>
                  <img src={Instagram} alt='Logo facebook' />    
                </a></li>
            </ul>
        </div>

        <img src={LogoOrgano} alt='Logo organo' />

        <a href='#'>Guilherme Rodrigues</a>
    </footer>
  )
}

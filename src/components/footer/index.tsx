import React from 'react';
import Image from 'next/image'
import Logo from '../../../public/img/logo.png'
import localizacao from '../../../public/icones/icon-location.svg'
import phone from '../../../public/icones/icon-phone.svg'
import email from '../../../public/icones/icon-email.svg'
import phone2 from '../../../public/icones/phone.svg'
import face from '../../../public/icones/face2.svg'
import wats from '../../../public/img/wats.svg'
import insta from '../../../public/icones/ista2.svg'
 import { Footer } from './styles'
import Link from 'next/link'
const footer: React.FC = () => {
    function handleToggle() {
      const text = ''
      const phone = '5511977955519'
      window.location.href = `https://api.whatsapp.com/send?text=${text}&phone=${phone}`
    }
    return (
      <Footer>
        {' '}
        <div className="footer-logo">
          <img src={Logo} alt="Logo" id="logo-fylo-footer" />
        </div>
        <div className="footer-info">
          <div className="localizacao">
            <img src={localizacao} alt="localizacao" id="localizacao-imagem" />

            <p>
              {' '}
              Av. Washington Luís
              <br /> 4511 - Santo Amaro São Paulo
              <br />
              SP 04627-00
            </p>
          </div>
          <div className="contatos">
            <div className="icones-contatos">
              {' '}
              <img src={phone} alt="telefone" />
              <img src={email} alt="email" />
            </div>
            <div className="textos-contatos">
              <a href="/" className="numero">
                + 1-543-123-4567
              </a>

              <a href="/">example@fylo.com</a>
            </div>
          </div>

          <div className="termos">
            <nav className="footer-div-dois4">
              <ul>
                <li>
                  <a href="/">Envelopamentos</a>
                </li>
                <li>
                  <a href="/">PPF</a>
                </li>
                <li>
                  <a href="/">quem somos</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icones">
            <nav className="/">
              <ul>
                <li>
                  <a
                    onClick={handleToggle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={phone2} className="fa fa-wats"></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/freewet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={face} className="fa fa-face"></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/m2tuningoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={insta} className="fa fa-ista"></img>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Footer>
    )
}

export default footer;
import {  FaWhatsapp} from 'react-icons/fa'
import * as S from './styles'
import Link from 'next/link'
export function WatzapButton() {
    function handleToggle() {
      const text = ''
      const phone = '5511977955519'
      window.location.href = `https://api.whatsapp.com/send?text=${text}&phone=${phone}`
    }
  const isUserLoggendIn = false
  return isUserLoggendIn ? (
    <S.Container>
      <Link href="/" passHref>
        <button type="button" className="precaution1">
          {' '}
          <FaWhatsapp color="#04d361" />
          Contato
        </button>
      </Link>
    </S.Container>
  ) : (
    <S.Container>

        <button
          onClick={handleToggle}


          type="button"
          className="precaution1"
        >
          {' '}
          <FaWhatsapp color="#096800" />
          Whatsapp
        </button>

    </S.Container>
  )
}

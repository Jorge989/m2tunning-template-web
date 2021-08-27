import {  FaWhatsapp} from 'react-icons/fa'
import * as S from './styles'
import Link from 'next/link'
export function WatzapButton() {
  const isUserLoggendIn = false
  return isUserLoggendIn ? (
    <S.Container>
      <Link href="/precaution" passHref>
        <button type="button" className="precaution1">
          {' '}
          <FaWhatsapp color="#04d361" />
          Contato
        </button>
      </Link>
    </S.Container>
  ) : (
    <S.Container>
      <Link href="/precaution" passHref>
        <button type="button" className="precaution1">
          {' '}
          <FaWhatsapp color="#096800" />
          Whatsapp
        </button>
      </Link>
    </S.Container>
  )
}

import { FaPhone } from 'react-icons/fa'
import * as S from './styles'
import Link from 'next/link'
export function ContatoButton() {
  const isUserLoggendIn = false
  return isUserLoggendIn ? (
    <S.Container>
      <Link href="/precaution" passHref>
        <button type="button" className="precaution1">
          {' '}
          <FaPhone color="#04d361" />
          Contato
        </button>
      </Link>
    </S.Container>
  ) : (
    <S.Container>
      <Link href="/precaution" passHref>
        <button type="button" className="precaution1">
          {' '}
          <FaPhone color="#eba417" />
          Contato
        </button>
      </Link>
    </S.Container>
  )
}


import styles from './header.module.css'

import Image from 'next/image'

const Header: React.FC = () => {


  return (
    <header className={styles.header}>
      <Image
        className={styles.image}
        src="/img/logo.png"
        alt="logo"
        width={150}
        height={60}
        quality={75}
      />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <a href="#sobre" className={styles.a}>
              Envelopamentos
            </a>
          </li>
          <li>
            <a href="#team" className={styles.a}>
              insulfilm
            </a>
          </li>
          <li>
            <a href="#signin" className={styles.a}>
              limpeza técnica
            </a>
          </li>
          <li>
            <a href="#signin" className={styles.a}>
             contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

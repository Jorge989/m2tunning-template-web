import React from 'react';
import styles from '../Main/main.module.css'
import MainLogo from '../../../public/img/1.png'
import inslogo from '../../../public/img/instagram.png'
import carro1 from '../../../public/img/env1.jpg'
const Main: React.FC = () => {
  return (
    <body>
      <div className={styles.container}>
        <div className={styles.textos}>
          <h1 className={styles.h1}>
            Trabalhos
            <br />
            <strong className={styles.strong}>Evelopamentos</strong>
          </h1>
        </div>
        <div className={styles.insta}>
          <img src={inslogo} className={styles.instalogo} />
          <a
            href="https://www.instagram.com/p/COcyH-KsKty/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ainsta}
          >
            m2tuningoficial
          </a>
        </div>
        <div className={styles.carroswraper}>
          <div className={styles.carroscontainer}>
            <img
              src={carro1}
              className={styles.carros}
            />
            <img src={carro1} className={styles.carros} />
            <img src={carro1} className={styles.carros} />
            <img src={carro1} className={styles.carros} />
          </div>
          <div className={styles.carroscontainer2}>
            <img src={carro1} className={styles.carros} />
            <img src={carro1} className={styles.carros} />
            <img src={carro1} className={styles.carros} />
            <img src={carro1} className={styles.carros} />
          </div>
        </div>
      </div>
    </body>
  )
}

export default Main;
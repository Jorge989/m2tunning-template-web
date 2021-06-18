import styles from './carrousel.module.css'
import React, { useState, useContext, useEffect } from "react";
import { slides } from "../Slides/slides";
import { ReactElement } from 'react'
import wats from '../../../public/img/wats.png'
import yelo from '../../../public/img/yelo.png'
import {faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CarrouselContext = React.createContext();

export const Carrousel = ({ children }) => {
  return (
    <CarrouselContext.Provider value={useState(0)}>
      <div>{children}</div>
    </CarrouselContext.Provider>
  );
};

export const SlideNav = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export const SlideNavItems = () => {
  const [activeIndex, setActiveIndex] = useContext(CarrouselContext);
  return (
    <>
      {slides.map((image, index) => (
        <li
          role="button"
          tabIndex="0"
          onClick={() => setActiveIndex(index)}
          className={activeIndex === index ? "isActive" : ""}
        >
          {""}
        </li>
      ))}
    </>
  );
};

export const Slides = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useContext(CarrouselContext);
  const isPlaying = true;

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % slides.length);
      }, 3000);
    }
  });

  return <ul>{children}</ul>;
};

export const Slide = () => {
  const [activeIndex] = useContext(CarrouselContext);
  return (
    <div className={styles.container}>
      <div className={styles.wraper1}>
        <div className={styles.textos}>
          <h1 className={styles.h1}>
            M2 Tuning
            <br /> Envelopamento Premium <br />
            Insulfilm e Estética Automotiva
          </h1>

          <a className={styles.a}>
            Whatsapp online{' '}
            <img src={wats} alt={wats} className={styles.wats} />
          </a>
        </div>
        <div className={styles.yellow}>
          {' '}
          <img src={yelo} alt={wats} className={styles.yelo} />
        </div>
        <div className={styles.wraper}></div>
        {slides.map((image, index) => {
          if (activeIndex === index) {
            return (
              <div className={styles.slide}>
                <li key={index}>
                  <img
                    src={image.img}
                    alt={image.title}
                    className={styles.imagem}
                  />
                </li>
              </div>
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
};



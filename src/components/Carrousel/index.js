import styles from './carrousel.module.css'
import React, { useState, useContext, useEffect } from "react";
import { slides } from "../Slides/slides";




const CarrouselContext = React.createContext();

export const Carrousel = ({ children }) => {
  return (
    <CarrouselContext.Provider value={useState(0)}>
      <div className={styles.pai}>{children}</div>
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
      }, 2500);
    }
  });

  return <ul>{children}</ul>;
};

export const Slide = () => {
  const [activeIndex] = useContext(CarrouselContext);
  return (
    
    <>
      <div className={styles.wraper}>
      <div className={styles.mapa}>
        {' '}
  
          <iframe
            className={styles.frame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0256628867373!2d-46.67560258538197!3d-23.639251970357677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6481ea7683%3A0x519a85c11abac95e!2sM2%20Tuning%20-%20Envelopamento%20Premium%2C%20Insulfilm%20Est%C3%A9tica%20Automotiva%20e%20PPF%20(%20PROTE%C3%87%C3%83O%20DE%20PINTURA%20)!5e0!3m2!1spt-BR!2sbr!4v1624203940280!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        
      </div>
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
    </>
  )
};



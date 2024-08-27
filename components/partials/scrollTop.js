import { useState, useEffect } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import styles from '../../styles/Home.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Fonction pour afficher ou masquer le bouton en fonction de la position du scroll
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajoutez un écouteur d'événements pour le scroll une fois que le composant est monté
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour faire défiler vers le haut lorsque le bouton est cliqué
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button className={styles.scrollToTop} onClick={scrollToTop} style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: 'transparent',
            border:'none',
            height: '35px',
            width: '35px',
            boxShadow: '1px 1px 8px 1px rgba(0,0,0,0.4)',
            borderRadius: '50%',
        }}>
          <AiOutlineArrowUp style={{marginTop:'-2px', height:'35px',paddingLeft:'10px',width:'25px' }} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

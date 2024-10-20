import React from 'react';
import YouTubePlayer from 'react-youtube';
import styles from '@/styles/Demo.module.css';
import style from '@/styles/app.module.css';
import PlanComparison from 'components/partials/PlanComparison';


const Demo = () => {
  const opts = {
    height: '200',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      rel: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
    <section id="demo" className={styles.demo}>
      <div className="container">
        <div className={styles.demoContent}>
          <div className={styles.videoWrapper}>
            <YouTubePlayer videoId="xaJzA47EjQc" opts={opts} onReady={_onReady} />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>DEMO</h2>
            <p className={styles.description}>
              Rejoignez la communauté mondiale croissante des utilisateurs de KEI, qui comprend des individus et des équipes de certains des principaux acteurs de l'industrie.
              Demandez des fonctionnalités sur mesure et organisez une démonstration de l'application KEI pour vous et votre entreprise.
            </p>
            <a className={`${styles.button} btn rounded-pill`} href="/template/contact">
              Obtenir une démo
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Demo;
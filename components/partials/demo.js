

import React from 'react';
import YouTubePlayer from 'react-youtube';
import styles from '@/styles/Demo.module.css';
import style from '@/styles/app.module.css';
import DownloadApp from "pages/component/DownloadApp";
import Link from 'next/link';



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
    <section id="demo" className={styles.demo}>
      <div className="container ">
        <div className={styles.demoContent}>
          <div className={styles.videoWrapper}>
            <YouTubePlayer videoId="xaJzA47EjQc" opts={opts} onReady={_onReady} />
          </div>
          <div className={styles.textContent}>
            <center>
              <h2 className={styles.title}>DEMO</h2>
            </center>
            <p className={styles.description}>
              Rejoignez la communauté mondiale croissante des utilisateurs de KEI, qui comprend des individus et des équipes de certains des principaux acteurs de l&apos;industrie.
              Demandez des fonctionnalités sur mesure et organisez une démonstration de l&apos;application KEI pour vous et votre entreprise.
            </p>
            <center>
              <Link className={`${styles.button} btn rounded-pill`} href="/demo">
                Obtenir une démo
              </Link>
            </center>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default Demo;






















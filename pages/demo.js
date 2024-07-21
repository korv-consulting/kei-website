import React from 'react';
import YouTubePlayer from 'react-youtube';
import styles from '@/styles/Demo.module.css';
import style from '@/styles/app.module.css';
import PlanComparison from 'pages/component/PlanComparison';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation('demo');

  return (
    <section id="demo" className={styles.demo}>
      <div className="container">
        <div className={styles.demoContent}>
          <div className={styles.videoWrapper}>
            <YouTubePlayer videoId="xaJzA47EjQc" opts={opts} onReady={_onReady} />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>DEMO</h2>
            <p className={styles.description}>
              {t('description')}
            </p>
            <a className={`${styles.button} btn rounded-pill`} href="/template/contact">
              {t('btnContact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

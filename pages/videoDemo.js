

'use client'
import React,{ useEffect} from 'react';
import YouTubePlayer from 'react-youtube';
import styles from '@/styles/VideoDemo.module.css';
import style from '@/styles/Targets.module.css';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import {useRouter} from 'next/router';

const VideoDemo = () => {



  const router = useRouter()
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


  const handleClick = () => {
router.push('/demo')  };

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
            <center>
              <button className={`${styles.button} btn rounded-pill`} onClick ={handleClick}>
                {t('btnContact')}
              </button>
            </center>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;

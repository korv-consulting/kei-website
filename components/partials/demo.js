import styles from '@/styles/app.module.css'
import YouTube from "react-youtube";
const Demo = () => {

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // Cette fonction est appelée lorsque le lecteur vidéo est prêt
    // Ici, nous mettons la vidéo en pause juste après le démarrage de l'autoplay
    event.target.pauseVideo();
  }


  return (
    <div>
      <section id="about" className={`${styles.about} ${styles.section} `}>


        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2 className="">Démo</h2>
        </div>

        <div className="container">

          <div className="row gy-4">
            <div class="col-sm col-lg-6">
              <YouTube videoId="xaJzA47EjQc" opts={opts} onReady={_onReady}  />
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <p className='d-flex  text-justify' >
                Rejoignez la communauté mondiale croissante des utilisateurs de KEI, qui comprend des individus et des équipes de certains des principaux acteurs de l'industrie.
                Demandez des fonctionnalités sur mesure et organisez une démonstration de l'application KEI pour vous et votre entreprise.
              </p>
              <a className={`btn rounded-pill ${styles.btn_demo}`} href="/demo">
                Obtenir une démo
              </a>

              {/* <a href="#" className={styles.btn_getstarted}><span>Obtenir une démo</span><i className="bi bi-arrow-right"></i></a> */}
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}

export default Demo;
import styles from '@/styles/app.module.css'
import style from '@/styles/Landing.module.css'
import Link from 'next/link';
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import MyCarousel from './carousel';

export default function LandingPage() {
  const filteredItems = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "camera",
      price: 200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Phone",
      price: 100,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Laptop",
      price: 500,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Headephone",
      price: 40,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Keyboard",
      price: 140,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Gaming Mouse",
      price: 140,
    },
  ];
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
    return (
        <div>
    <section id="home" className={`${styles.hero} ${styles.section} `}>

      <div className="container">
        <div className={styles.box}>
          <div className="row gy-4 d-flex justify-content-between d-flex" >
            <div className={`col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-between mb-3 ${styles.textPart}`}>
              <h1 className="mb-1">Bienvenue chez <br></br> Korv Estatement Inventory</h1>
              <p className="">Une plateform d'inspection et d'inventaire de propriété simplifié conçue et construite pour le marché immobilier, créez des rapports d'inspections illimités pour capturer l'état de la propriété, des photos et des problèmes directement depuis votre mobile ou votre tablette à l'aide de notre application d'inspection. </p>
              <p className="">Produisez des inventaires professionnels, des enregistrements, des départs, des inspections intermédiaires, des inspections de bâtiments, des évaluations de risques et bien plus encore à l'aide de notre logiciel d'inspection primé. </p>
              <div className="d-flex">
                <a href="#about" className={styles.btn_get_started}>Essai Gratuit</a>
                <a href="" className={`glightbox btn-watch-video d-flex align-items-center ${styles.btn_watch_video}`}><span> </span></a>
              </div>
            </div>
            <div className= {`col-lg-6 order-1 d-flex flex-column justify-content-center order-lg-2`} >
              <MyCarousel />
            </div>
          </div>
        </div>
      </div>

    </section>
    {/* <div className={style.trending}>
        <div className={style.container}>
          <div className={style.title_btns}>
            <h3></h3>
            <div className={style.btns}>
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className={style.rowcontainer} id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className={style.row_item}>
                <Link href={`L`} className={style.link}>
                  <div>
                    <div className={style.item_header}>
                      <img src={item.img} alt="product" />
                    </div>
                    <div className={style.itemDescription}>
                      <p>{item.description}</p>
                      <p className={style.itemPrice}>{item.price}$</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> */}
        </div>
    );
}

// export async function getServerSideProps(ctx){
//     return {
//         props:{
//             data:null
//         }
//     }
// }

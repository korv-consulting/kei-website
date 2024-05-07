import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "@/styles/app.module.css"

const MyCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className={`carousel slide pb-2`}
        data-bs-ride="carousel"
      >
        <div className={`carousel-inner mb-5 ${styles.carousel}`}>
          <div className="carousel-item active">
            <Image
              src="/imgslide1.jpg"
              className="d-block w-100"
              height={600}
              width={950}
              layout="responsive"
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/imgslide3.jpg"
              className="d-block w-100"
              height={600}
              width={950}
              layout="responsive"
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/imgslide2.png"
              className="d-block w-100"
              height={600}
              width={950}
              layout="responsive"
              alt="Picture of the author"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default MyCarousel;

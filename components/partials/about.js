import styles from '@/styles/app.module.css'

const About = () => {
    return (
        <div>
            <section id="about" className={`${styles.about} ${styles.section} `}>


<div className={`container ${styles.section_title}`} data-aos="fade-up">
  <h2 className="">About Us</h2>
</div>

<div className="container">

  <div className="row gy-4">

    <div className={`col-lg-6 ${styles.content}`}  data-aos="fade-up" data-aos-delay="100">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <ul>
        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
        <li><i className="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
      </ul>
    </div>

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
      <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      <a href="#" className={styles.read_more}><span>Read More</span><i className="bi bi-arrow-right"></i></a>
    </div>

  </div>

</div>

</section>
        </div>
    );
}

export default About;
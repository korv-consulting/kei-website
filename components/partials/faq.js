import styles from '@/styles/app.module.css'

const Faq = () => {
  return (
    <div>
      <section id="faq-2" className={` ${styles.section} ${styles.faq_2} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.faq_container}>
                <div
                  className={`${styles.faq_item} ${styles.faq_active} `} 
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className={`bi bi-question-circle ${styles.faq_icon}`}></i>
                  <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                  <div className={styles.faq_content}>
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                  <i className={`bi bi-chevron-right ${styles.faq_toggle}`}></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className={styles.faq_item} data-aos="fade-up" data-aos-delay="300">
                <i className={`bi bi-question-circle ${styles.faq_icon}`}></i>
                  <h3>
                    Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque?
                  </h3>
                  <div className={styles.faq_content}>
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                  <i className={`bi bi-chevron-right ${styles.faq_toggle}`}></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className={styles.faq_item} data-aos="fade-up" data-aos-delay="400">
                <i className={`bi bi-question-circle ${styles.faq_icon}`}></i>
                  <h3>
                    Dolor sit amet consectetur adipiscing elit pellentesque?
                  </h3>
                  <div className={styles.faq_content}>
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                  <i className={`bi bi-chevron-right ${styles.faq_toggle}`}></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className={styles.faq_item} data-aos="fade-up" data-aos-delay="500">
                  <i className={`bi bi-question-circle ${styles.faq_icon}`}></i>
                  <h3>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </h3>
                  <div className={styles.faq_content}>
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                  <i className={`bi bi-chevron-right ${styles.faq_toggle}`}></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className={styles.faq_item} data-aos="fade-up" data-aos-delay="600">
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat?
                  </h3>
                  <div className={styles.faq_content}>
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </p>
                  </div>
                  <i className={`bi bi-chevron-right ${styles.faq_toggle}`}></i>
                </div>
                {/* <!-- End Faq item--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

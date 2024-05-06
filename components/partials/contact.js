import styles from "@/styles/app.module.css";

const Contact = () => {
  return (
    <div>
      <section id="contact" className={`${styles.contact} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2> Contact </h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit{" "}
          </p>
        </div>{" "}
        {/* <!-- End Section Title --> {styles.}*/}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className={styles.info_wrap}>
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"> </i>{" "}
                  <div>
                    <h3> Address </h3>
                    <p> A108 Adam Street, New York, NY 535022 </p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> */}
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone flex-shrink-0"> </i>
                  <div>
                    <h3> Call Us </h3>
                    <p> +1 5589 55488 55 </p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> */}
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope flex-shrink-0"> </i>{" "}
                  <div>
                    <h3> Email Us </h3> <p> info @example.com </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item --> */}{" "}
              </div>{" "}
            </div>
            <div className="col-lg-7">
              <form
                action="forms/contact.php"
                method="post"
                className={styles.php_email_form}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label for="name-field" className="pb-2">
                      Your Name{" "}
                    </label>{" "}
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="email-field" className="pb-2">
                      Your Email{" "}
                    </label>{" "}
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="subject-field" className="pb-2">
                      Subject{" "}
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      id="message-field"
                      required=""
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className={styles.loading}> Loading </div>
                    <div className={styles.error_message}> </div>
                    <div className={styles.sent_message}>
                      Your message has been sent.Thank you!
                    </div>
                    <button type="submit"> Send Message </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import styles from "@/styles/app.module.css";

const NewsLetter = () => {
  return (
    <div>
      <div className={styles.footer_newsletter}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4> Join Our Newsletter </h4>{" "}
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>{" "}
              <form
                action="forms/newsletter.php"
                method="post"
                className={styles.php_email_form}
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>{" "}
                <div className={styles.loading}> Loading </div>{" "}
                <div className={styles.error_message}> </div>{" "}
                <div className={styles.sent_message}>
                  Your message has been sent.Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

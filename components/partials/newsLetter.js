import styles from "@/styles/app.module.css";

const NewsLetter = () => {
  return (
    <div>
      <div className={styles.footer_newsletter}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4> Abonnement à notre Newsletter </h4>{" "}
              <p>
                {/* Subscribe to our newsletter and receive the latest news about our products and services! */}
                Abonnez-vous à notre newsletter  et recevez les récentes informations sur notre application!
              </p>{" "}
              <div
                // action=""
                // method="post"
                className={styles.php_email_form}
                // onSubmit={() => console.log("Vous vous êtes abonné!")}
              >
                <div className={styles.newsletter_form}>
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" onClick={(e) => alert("Vous vous êtes abonné!")} />
                </div>{" "}
                <div className={styles.loading}> Loading </div>{" "}
                <div className={styles.error_message}> </div>{" "}
                <div className={styles.sent_message}>
                  Vous êtes abonné à notre newsletter!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

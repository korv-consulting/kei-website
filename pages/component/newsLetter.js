import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from "@/styles/app.module.css";

const NewsLetter = () => {
  const { t } = useTranslation('newsletter');

  return (
    <div>
      <div className={styles.footer_newsletter}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>{t('newsletter_title')}</h4>
              <p>{t('newsletter_description')}</p>
              <div
                // action=""
                // method="post"
                className={styles.php_email_form}
                // onSubmit={() => console.log("Vous vous êtes abonné!")}
              >
                <div className={styles.newsletter_form}>
                  <input type="email" name="email" />
                  <input type="submit" value={t('subscribe_button')} onClick={(e) => alert(t('subscription_success'))} />
                </div>
                <div className={styles.loading}>{t('loading')}</div>
                <div className={styles.error_message}>{t('error_message')}</div>
                <div className={styles.sent_message}>
                  {t('subscription_success')}
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

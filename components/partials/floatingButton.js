// components/FloatingButton.js
import styles from '@/styles/FloatingButton.module.css';

const FloatingButton = () => {
  return (
    <div className={styles.floatingButton}>
      <a href="template/demo" className={styles.button}>
        Demander une démo
      </a>
    </div>
  );
};

export default FloatingButton;

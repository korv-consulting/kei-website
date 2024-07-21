// components/FloatingButton.js
import styles from '@/styles/FloatingButton.module.css';
import { useTranslation } from 'react-i18next';

const FloatingButton = () => {
  const { t } = useTranslation('demo');
  return (
    <div className={styles.floatingButton}>
      <a href="template/demo" className={styles.button}>
        {t('btnContact')}
      </a>
    </div>
  );
};

export default FloatingButton;

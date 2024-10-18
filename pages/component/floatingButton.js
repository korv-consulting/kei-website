// components/FloatingButton.js
import styles from '@/styles/FloatingButton.module.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const FloatingButton = () => {
  const { t } = useTranslation('demo');
  return (
    <div className={styles.floatingButton}>
      <Link  href="/demo" >
        <a className={styles.button}>
          {t('btnContact')}
        </a>
      </Link>
    </div>
  );
};

export default FloatingButton;

import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/app.module.css';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  // Si locale ou locales est undefined, afficher un message d'erreur ou un retour
  if (!locale || !locales) {
    console.error("Locale or locales are undefined. Ensure your i18n configuration is correct.");
    return null;
  }

  const handleLocaleChange = (event) => {
    const selectedLocale = event.target.value;
    if (selectedLocale !== locale) {
      router.push(asPath, asPath, { locale: selectedLocale });
    }
  };

  return (
    <div className='d-flex align-items-center'>
      {locale === 'en' && <Image src="/flags/uk.png" className={styles.sitename} width={25} height={25} alt="anglais" />}
      {locale === 'fr' && <Image src="/flags/fr.png" className={styles.sitename} width={25} height={25} alt="français" />}
      {locale === 'es' && <Image src="/flags/spain.png" className={styles.sitename} width={25} height={25} alt="español" />}
      {locale === 'zh' && <Image src="/flags/zh.png" className={styles.sitename} width={25} height={25} alt="中文" />}
      <select className={`${styles.select} ms-3`} id="loc" value={locale} onChange={handleLocaleChange}>
        {locales.map((local, index) => (
          <option key={index} value={local}>
            {local === 'en' ? 'English' : 
             local === 'fr' ? 'Français' : 
             local === 'es' ? 'Español' : 
             local === 'zh' ? '中文' : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;

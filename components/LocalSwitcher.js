/*  */


import { useRouter } from 'next/router';
import Image from 'next/image';
import Select from 'react-select';
import styles from '@/styles/app.module.css';

// Define the options for react-select
const localeOptions = [
  { value: 'en', label: 'English', image: '/flags/uk.png' },
  { value: 'fr', label: 'Français', image: '/flags/fr.png' },
  { value: 'es', label: 'Español', image: '/flags/spain.png' },
  { value: 'zh', label: '中文', image: '/flags/zh.png' }
];

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  if (!locale || !locales) {
    console.error("Locale or locales are undefined. Ensure your i18n configuration is correct.");
    return null;
  }

  const handleChange = (event) => {
    const selectedLocale = event.value;
    if (selectedLocale !== locale) {
      router.push(asPath, asPath, { locale: selectedLocale });
    }
  };

  const customSingleValue = ({ data }) => (
    <div className="d-flex align-items-center">
      <Image src={data.image} className={styles.sitename} width={25} height={25} alt={data.label} />
      <span className="ms-2">{data.label}</span>
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} className="d-flex align-items-center p-2">
        <Image src={data.image} className={styles.sitename} width={25} height={25} alt={data.label} />
        <span className="ms-2">{data.label}</span>
      </div>
    );
  };

  return (
    <Select
      value={localeOptions.find(option => option.value === locale)}
      onChange={handleChange}
      options={localeOptions}
      components={{ SingleValue: customSingleValue, Option: customOption }}
      className={styles.select}
    />
  );
};

export default LocaleSwitcher;

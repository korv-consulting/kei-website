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

   const filteredLocaleOptions = asPath === '/template/demo'
    ? localeOptions.filter(option => option.value !== 'es' && option.value !== 'zh')
    : localeOptions;

  const handleChange = (selectedOption) => {
    const selectedLocale = selectedOption.value;
    if (selectedLocale !== locale) {
      router.push(asPath, asPath, { locale: selectedLocale });
    }
  };

  const customSingleValue = ({ data }) => (
    <div className="d-flex align-items-center">
      <Image src={data.image} className={styles.sitename} width={25} height={25} alt={data.label} />
      <span className="ms-2 fs-6">{data.label}</span>
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} className="d-flex align-items-center p-2">
        <Image src={data.image} className={styles.sitename} width={25} height={25} alt={data.label} />
        <span className="ms-2 fs-6">{data.label}</span>
      </div>
    );
  };

  return (
    <Select
      value={filteredLocaleOptions.find(option => option.value === locale)}
      onChange={handleChange}
      options={filteredLocaleOptions}
      components={{ SingleValue: customSingleValue, Option: customOption }}
      
      classNamePrefix="locale-select"
      styles={{
        control: (provided) => ({
          ...provided,
          boxShadow: 'none',
          border: 'none',
          minHeight: '20px',
          paddingBottom: '18px',
        }),
        menu: (provided) => ({
          ...provided,
          marginTop: 0,
          padding: 0,
        }),
        menuList: (provided) => ({
          ...provided,
          padding: 0, 
        }),
        option: (provided) => ({
          ...provided,
          padding: 0,
          margin: 0,
        }),
        placeholder: (provided) => ({
          ...provided,
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          opacity: 0, 
          margin: 0,
          padding: 0,
        }),
        input: (provided) => ({
          ...provided,
          opacity: 0,
          margin: 0,
          padding: 0,
          
        }),
        singleValue: (provided) => ({
          ...provided,
          margin: 0,
          padding: 0, 
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          paddingTop: '20px',
          display: 'none',
        }),
      }}
    />
  );
};

export default LocaleSwitcher;

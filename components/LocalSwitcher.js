import { useRouter } from 'next/router';
import Link from 'next/link';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  console.log(locales);

  // Si locale ou locales est undefined, afficher un message d'erreur ou un retour
  if (!locale || !locales) {
    console.error("Locale or locales are undefined. Ensure your i18n configuration is correct.");
    return null;
  }

  const otherLocale = locales.find((loc) => loc !== locale);

  return (
    <Link href={asPath} locale={otherLocale}>
      <button className="btn btn-info mb-3 text-white">{locale === 'en' ? 'FR' : 'EN'}</button>
    </Link>
  );
};

export default LocaleSwitcher;


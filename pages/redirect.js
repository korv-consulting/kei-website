import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Détection de l'appareil qui scanne le QR code
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Redirection vers le Play Store
      router.push('https://play.google.com/store/apps/details?id=com.whatsapp');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirection vers l'App Store
      router.push('https://apps.apple.com/us/app/whatsapp-messenger/id310633997');
    } else {
      // Redirection vers un site générique ou la page d'accueil
      router.push('https://example.com'); // Remplacez par votre page d'accueil
    }
  }, []);

  return null;
};

export default RedirectPage;

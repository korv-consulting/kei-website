import {react, useState} from 'react';
import { useTranslation } from 'react-i18next';

const SwitchButtonPartenariat = ({ setShowMPartenariat }) => {
  const [selectedOption, setSelectedOption] = useState('partenariat');
  const { t } = useTranslation('switchBtn');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowMPartenariat(option === 'partenariat');
  };

  return (
    <center>
      <div
        style={{
          width: '300px',
          display: 'flex',
          backgroundColor: '#37517e',
          borderRadius: '50px',
          padding: '5px',
          height: '45px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: selectedOption === 'info' ? 0 : '50%',
            width: '50%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50px',
            transition: 'left 0.3s ease',
          }}
        ></div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            cursor: 'pointer',
            position: 'relative',
            fontWeight: 'bold',
            zIndex: 3,
          }}
          onClick={() => handleOptionChange('partenariat')}
        >
          {t('info')}
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 3,
            fontWeight: 'bold',
          }}
          onClick={() => handleOptionChange('info')}
        >
          {t('partenariat')}
        </div>
      </div>
    </center>
  );
};

export default SwitchButtonPartenariat;

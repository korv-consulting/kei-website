import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

const SwitchButtonPartenariat = ({ setShowInfo }) => {
  const { t } = useTranslation('switchBtn');
  const [selectedOption, setSelectedOption] = useState('info');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowInfo(option === 'info');
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
            zIndex: 3, // Ensure text is above the pseudo-element
          }}
          onClick={() => handleOptionChange('info')}
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
            zIndex: 3, // Ensure text is above the pseudo-element
            fontWeight: 'bold',
          }}
          onClick={() => handleOptionChange('partenariat')}
        >
          {t('partenariat')}
        </div>
      </div>
    </center>
  );
};

export default SwitchButtonPartenariat;

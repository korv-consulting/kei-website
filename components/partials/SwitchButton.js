

import React, { useState } from 'react';

const SwitchButton = ({setShowMonthly }) => {
  const [selectedOption, setSelectedOption] = useState('annually');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowMonthly(option === 'annually');
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
            left: selectedOption === 'monthly' ? 0 : '50%',
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
            fontWeight:'bold',
            zIndex: 3, // S'assurer que le texte reste au-dessus du pseudo-élément
          }}
          onClick={() => handleOptionChange('annually')}
        >
          Mensuellement
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
            zIndex: 3, // S'assurer que le texte reste au-dessus du pseudo-élément
            fontWeight:'bold',

          }}
          onClick={() => handleOptionChange('monthly')}
        >
          Annuellement
        </div>
      </div>
    </center>
  );
};

export default SwitchButton;

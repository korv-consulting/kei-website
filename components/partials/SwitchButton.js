import React, { useState } from 'react';

const SwitchButton = ({ showMonthly, setShowMonthly }) => {
  const [selectedOption, setSelectedOption] = useState('monthly');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowMonthly(option === 'monthly');
  };


 
  return (
    <>
      <center>
        <div
          style={{
            width: '300px',
            display: 'flex',
            backgroundColor: '#37517e',
            borderRadius: '50px',
            padding: '5px',
            height: '45px'
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              backgroundColor:
                selectedOption === 'monthly' ? '#c47814' : 'transparent',
              borderRadius: '50%',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
            onClick={() => handleOptionChange('monthly')}
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
              backgroundColor:
                selectedOption === 'annually' ? '#c47814' : 'transparent',
              borderRadius: '50%',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
            onClick={() => handleOptionChange('annually')}
          >
            Annuellement
          </div>
        </div>
      </center>
    </>
  );
};

export default SwitchButton;

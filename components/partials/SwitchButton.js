// import React, { useState } from 'react';

// const SwitchButton = ({ showMonthly, setShowMonthly }) => {
//   const [selectedOption, setSelectedOption] = useState('monthly');

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setShowMonthly(option === 'monthly');
//   };


 
//   return (
//     <>
//       <center>
//         <div
//           style={{
//             width: '300px',
//             display: 'flex',
//             backgroundColor: '#37517e',
//             borderRadius: '50px',
//             padding: '5px',
//             height: '45px'
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: 'white',
//               backgroundColor:
//                 selectedOption === 'monthly' ? '#c47814' : 'transparent',
//               borderRadius: '0%',
//               padding: '10px 20px',
//               cursor: 'pointer',
//             }}
//             onClick={() => handleOptionChange('monthly')}
//           >
//             Mensuellement
//           </div>
//           <div
//             style={{
//               flex: 1,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: 'white',
//               backgroundColor:
//                 selectedOption === 'annually' ? '#c47814' : 'transparent',
//               borderRadius: '50%',
//               padding: '10px 20px',
//               cursor: 'pointer',
//             }}
//             onClick={() => handleOptionChange('annually')}
//           >
//             Annuellement
//           </div>
//         </div>
//       </center>
//     </>
//   );
// };

// export default SwitchButton;















import React, { useState } from 'react';

const SwitchButton = ({setShowMonthly }) => {
  const [selectedOption, setSelectedOption] = useState('monthly');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowMonthly(option === 'monthly');
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
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
            zIndex: 1, // S'assurer que le texte reste au-dessus du pseudo-élément
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
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1, // S'assurer que le texte reste au-dessus du pseudo-élément
          }}
          onClick={() => handleOptionChange('annually')}
        >
          Annuellement
        </div>
      </div>
    </center>
  );
};

export default SwitchButton;

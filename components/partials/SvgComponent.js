



// import React from 'react';

// const SVGComponent = () => (
//   <div className="loading-container">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="100"
//       height="100"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="xMidYMid"
//     >
//       <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#000" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
//         <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
//       </circle>
//     </svg>
//     <style jsx>{`
//       .loading-container {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//       }
//     `}</style>
//   </div>
// );

// export default SVGComponent;




import React from 'react';
import styles from '@/styles/SVGComponent.module.css';

const SVGComponent = () => (
  <div className={styles.spinner}>
    <div className={styles.doubleBounce1}></div>
    <div className={styles.doubleBounce2}></div>
  </div>
);

export default SVGComponent;








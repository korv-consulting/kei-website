import React from 'react';
import '@/styles/MagnifierEffect.module.css';

const MagnifierEffect = () => {
  return (
    // <svg
    //   width="800"
    //   height="500"
    //   viewBox="0 0 800 200"
    //   xmlns="http://www.w3.org/2000/svg"
    //   style={{ backgroundColor: '#f3f4f6' }}
    // >



<svg width="600px" height="400px" viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    {/* <rect x="10" y="20" width="280" height="160" rx="15" ry="15" fill="#EAEDED" stroke="#333" stroke-width="2" />
                    <rect x="10" y="180" width="280" height="10" fill="#333" /> */}
      {/* Main Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="#333"
        fontSize="60"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        dy=".3em"
      >
        Inspection
      </text>

      {/* Magnifying Glass */}
      <g>
        <circle
          id="lens"
          cx="400"
          cy="100"
          r="50"
          stroke="#333"
          strokeWidth="5"
          fill="none"
        >
          <animate
            attributeName="cx"
            values="100; 700; 100"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        <line
          x1="440"
          y1="140"
          x2="490"
          y2="190"
          stroke="#333"
          strokeWidth="5"
        >
          <animate
            attributeName="x1"
            values="140; 740; 140"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="190; 790; 190"
            dur="8s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      {/* Clipping Path for Zoom */}
      {/* <defs>
        <clipPath id="clip-path">
          <circle id="clip-circle" cx="400" cy="100" r="40">
            <animate
              attributeName="cx"
              values="100; 700; 100"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </clipPath>
      </defs> */}

      {/* Group with Transform for Zoom */}
      <g id="zoom-group" clipPath="url(#clip-path)">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#333"
          fontFamily="Arial, sans-serif"
          dy=".3em"
          fontSize="60"
        >
          Inspection
        </text>
      </g>

      {/* Animation for Zoom Effect */}
      <animateTransform
        xlinkHref="#zoom-group"
        attributeName="transform"
        type="scale"
        values="1; 2; 1"
        keyTimes="0; 0.5; 1"
        dur="8s"
        repeatCount="indefinite"
        begin="0s"
      />
    </svg>
  );
};

export default MagnifierEffect;
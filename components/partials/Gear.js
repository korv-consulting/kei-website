import React from 'react';

// Composant pour la roue d'engrenage
const Gear = ({ cx, cy, r, teeth, rotation, duration, text }) => {
  const toothAngle = (2 * Math.PI) / teeth;
  const pathData = [];
  const innerRadius = r - 200;
  const outerRadius = r;

  for (let i = 0; i < teeth; i++) {
    const angle = i * toothAngle;

    const x1 = cx + innerRadius * Math.cos(angle);
    const y1 = cy + innerRadius * Math.sin(angle);
    const x2 = cx + outerRadius * Math.cos(angle);
    const y2 = cy + outerRadius * Math.sin(angle);

    const x3 = cx + outerRadius * Math.cos(angle + toothAngle / 3);
    const y3 = cy + outerRadius * Math.sin(angle + toothAngle / 3);
    const x4 = cx + (outerRadius + 20) * Math.cos(angle + toothAngle / 3);
    const y4 = cy + (outerRadius + 20) * Math.sin(angle + toothAngle / 3);

    const x5 = cx + (outerRadius + 20) * Math.cos(angle + toothAngle * 2 / 3);
    const y5 = cy + (outerRadius + 20) * Math.sin(angle + toothAngle * 2 / 3);
    const x6 = cx + outerRadius * Math.cos(angle + toothAngle * 2 / 3);
    const y6 = cy + outerRadius * Math.sin(angle + toothAngle * 2 / 3);

    const x7 = cx + outerRadius * Math.cos(angle + toothAngle);
    const y7 = cy + outerRadius * Math.sin(angle + toothAngle);
    const x8 = cx + innerRadius * Math.cos(angle + toothAngle);
    const y8 = cy + innerRadius * Math.sin(angle + toothAngle);

    pathData.push(`M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4} L${x5},${y5} L${x6},${y6} L${x7},${y7} L${x8},${y8}`);
  }

  return (
    <svg width="300" height="300" viewBox="0 0 500 500">
      <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: `rotate ${duration}s linear infinite ${rotation}` }}>
        <circle cx={cx} cy={cy} r={innerRadius - 5} fill="#4682B4" />
        {pathData.map((d, i) => (
          <path key={i} d={d} fill="#87CEEB" />
        ))}
        <text x={cx - 22} y={cy + 22} fill="#fff" fontSize="90" fontFamily="Arial Black">{text}</text>
      </g>
    </svg>
  );
};

// Composant pour le formulaire avec lignes animées
const FormWithAnimation = () => (
  <svg width="400" height="300" viewBox="0 0 400 300">
    {/* Écran fixe */}
    <rect x="50" y="50" width="300" height="200" fill="#f0f0f0" stroke="#ccc" />

    {/* Champs de texte */}
    <rect x="70" y="70" width="250" height="30" fill="#fff" />
    <rect x="70" y="120" width="250" height="30" fill="#fff" />
    <rect x="70" y="170" width="250" height="30" fill="#fff" />

    {/* Lignes animées */}
    <line x1="70" y1="85" x2="320" y2="85" stroke="#87CEEB" strokeWidth="2">
      <animate attributeName="x2" values="320; 70; 320" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="70" y1="135" x2="320" y2="135" stroke="#87CEEB" strokeWidth="2">
      <animate attributeName="x2" values="320; 70; 320" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </line>
    <line x1="70" y1="185" x2="320" y2="185" stroke="#87CEEB" strokeWidth="2">
      <animate attributeName="x2" values="320; 70; 320" dur="2s" repeatCount="indefinite" begin="1s" />
    </line>
  </svg>
);

// Composant principal
const GearCom = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative', width: '400px', height: '400px', marginBottom: '20px' }}>
      <div style={{ position: 'absolute', left: '50%', top: '30%', transform: 'translate(-50%, -50%)' }}>
        <Gear cx={150} cy={150} r={100} teeth={12} rotation="normal" duration={7} text="K" />
      </div>
    </div>
    <FormWithAnimation />
  </div>
);

export default GearCom;

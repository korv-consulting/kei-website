import React from 'react';

const Gear = ({ cx, cy, r, teeth, rotation, duration, text }) => {
  const toothAngle = (2 * Math.PI) / teeth;
  const pathData = [];
  const innerRadius = r - 20;
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
    <svg width="500" height="500" viewBox="0 0 500 500">
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

const HouseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="150" height="150">
    <path fill="#ffffff" d="M32 3L2 33h10v28h16V45h8v16h16V33h10z"/>
  </svg>
);





const SVGComponent = () => (
  <div style={{ position: 'relative', width: '110vw', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative', width: '800px', height: '800px', marginBottom: '20px' }}>
      <div style={{ position: 'absolute', left: '50%', top: '1%', transform: 'translate(-50%, -10%)' }}>
        <Gear cx={250} cy={250} r={150} teeth={12} rotation="normal" duration={7} text="K" />
      </div>
      <div style={{ position: 'absolute', left: '-2%', bottom: '10%' }}>
        <Gear cx={250} cy={250} r={150} teeth={12} rotation="reverse" duration={7} text="E" />
      </div>
      <div style={{ position: 'absolute', right: '-1%', bottom: '10%' }}>
        <Gear cx={250} cy={250} r={150} teeth={12} rotation="normal" duration={7} text="I" />
      </div>
      <div style={{ position: 'absolute', left: '49%', top: '46%', transform: 'translate(-50%, -50%)' }}>
        <HouseIcon />
      </div>
    </div>

    <style>{`
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes rotate-reverse {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
    `}</style>
  </div>
);








export default SVGComponent
import { Tooltip,Button } from 'antd';

const Tip = ({offer,content}) => {

  return (
    <h3>
      {offer}{' '}
      <Tooltip
     title={
        <div>
          <p>{content[0]}</p>
          <hr />
          <p>{content[1]}</p>
          <hr />
          <p>{content[2]}</p>
          <hr />
          <p>{content[3]}</p>
          <hr />
          <p>{content[4]}</p>
        </div>
      }
      
        placement="topRight"
        arrowPointAtCenter
      >
              <sup
          style={{
            position: 'absolute',
            top: '40px', // Ajustez cette valeur pour positionner verticalement
            right: '173px', // Ajustez cette valeur pour positionner horizontalement
            backgroundColor: '#37517e',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'lighter',
          }}
        >
          i
        </sup>
      </Tooltip>
    </h3>
  );
};

export default Tip;

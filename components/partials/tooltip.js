import { Tooltip } from 'antd';

const Tip = ({ offer, content }) => {
  return (
    <h3>

      {offer}{' '}
      <Tooltip
        title={
          <div className="custom-tooltip-content">
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
        overlayClassName="custom-tooltip"
      >
        <sup className="tooltip-trigger">
          <center>i</center>
        </sup>
      </Tooltip>

      <style jsx global>{`
        .custom-tooltip-content {
          background-color: #37517e;
          color: white;
          padding: 10px;
          border: none;
        }

        .custom-tooltip .ant-tooltip-arrow {
          border-top-color: #37517e !important;
        }

        .custom-tooltip .ant-tooltip-inner {
          background-color: #37517e !important;
          color: white;
          border: none !important;
        }

        .tooltip-trigger {
          position: absolute;
          top: 30px;
          right: 173px;
          background-color: #37517e;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: lighter;
        }
      `}</style>
    </h3>
  );
};

export default Tip;

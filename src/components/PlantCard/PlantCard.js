import { IconRowItem } from "../Main/IconRow/IconRowItem/IconRowItem";

import "./PlantCard.scss";

export const PlantCard = ({ title, count, url, icon }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="cardTitle">{title}</div>
      <div className="cardCountRow">
        {count}
        <div className="icon">
          <IconRowItem size="small" url={icon} />
        </div>
      </div>
    </div>
  );
};

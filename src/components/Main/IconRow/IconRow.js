import { IconRowItem } from "./IconRowItem/IconRowItem";

import "./IconRow.scss";
import { plantsIcons } from "../../constants";

export const IconRow = () => {
  return (
    <div className="iconRow">
      {plantsIcons.map((url, index) => {
        return <IconRowItem url={url} key={url+index}/>;
      })}
    </div>
  );
};

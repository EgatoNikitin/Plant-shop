import "./Modal.scss";
import { ListItem } from "./ListItem";



export const Modal = ({ isOpen, arrayOfItems }) => {
  return (
    isOpen && (
      <div className="modalWrapper">
        <div className="modalTitle">
          <h3>Foliage for plants</h3>
          <p>21 PLANTS</p>
        </div>
        <ul>
          {arrayOfItems.map(({ title, icon, isLeft }, index) => (
            <ListItem title={title} icon={icon} isLeft={isLeft} key={index+title}/>
          ))}
        </ul>
        <div className="arrow-down"></div>
      </div>
    )
  );
};

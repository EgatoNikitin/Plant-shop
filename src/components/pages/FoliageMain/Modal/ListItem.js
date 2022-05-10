import "./Modal.scss";

export const ListItem = ({ isLeft, title, icon }) => {
  return (
    <>
      {isLeft && (
        <li>
          <img alt="#" src={icon} /> {title}
        </li>
      )}
      {!isLeft && (
        <li>
          Calathea Veitchiana Hook.
          <img alt="#" src={icon} className="basket" />
        </li>
      )}
    </>
  );
};

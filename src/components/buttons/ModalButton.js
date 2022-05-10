import "./ModalButton.scss";
import closeIcon from "../../assests/icons/X.svg";

export const ModalButton = ({ onClick, isOpen }) => {
  return (
    <>
      {!isOpen && (
        <button className='modalButton' onClick={onClick}>
          <div>
            <span></span>
          </div>
        </button>
      )}
      {isOpen && (
        <button className="openedModal" onClick={onClick}>
          <img src={closeIcon} className="modalIcon" alt="modalIcon" />
        </button>
      )}
    </>
  );
};

import { Modal } from "../Modal/Modal";
import { useState } from "react";

import './FoliageMain.scss'

export const FoliageMain = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handlerModal = () => isOpen ? setIsOpen(false) : setIsOpen(true);
    return (
        <>
            <div className="FoliageSection">
                <div className="FoliageContent">
                    <h1>
                        Foliage for
                        <br />
                        <span>plants.</span>
                    </h1>
                    <p>Add some color to your home, give it a little attention, the plants will accompany you quietly</p>
                </div>
                <div className="ModalContant">
                    <button onClick={handlerModal}>
                        X
                    </button>
                    <Modal isOpen={isOpen} />
                </div>
            </div>
        </>
    );
};

import { useState } from "react";
import { ButtonLink } from "../buttons/ButtonLink";
import { BUTTONS } from "../constants";
import { Modal } from "../Modal/Modal";

import './BlogMain.scss'

export const BlogMain = () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonText = "Buy ME";
    const handlerModal = ()=> isOpen ? setIsOpen(false) : setIsOpen(true);
    return (
        <>
            <div className="BlogContant">
                <button onClick={handlerModal}>
                    Открыть модалку
                </button>
                <Modal isOpen={isOpen}/>
            </div>
        </>
    );
};

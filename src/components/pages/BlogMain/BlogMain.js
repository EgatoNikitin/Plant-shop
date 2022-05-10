import { useState } from "react";
import { Modal } from "../FoliageMain/Modal/Modal";

import './BlogMain.scss'

export const BlogMain = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handlerModal = () => isOpen ? setIsOpen(false) : setIsOpen(true);
    return (
        <>
            <div className="BlogContant">
                <button onClick={handlerModal}>
                    Открыть модалку
                </button>
                <Modal isOpen={isOpen} />
            </div>
        </>
    );
};

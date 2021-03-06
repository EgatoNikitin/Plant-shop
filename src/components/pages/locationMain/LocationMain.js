import { ButtonLink } from "../../buttons/ButtonLink";
import MainIcon from "../../../assests/icons/Logo.svg";
import { BUTTONS } from "../../constants";

import './LocationMain.scss'

export const LocationMain = () => {
    const buttonText = "Contact Me";
    return (
        <>
            <section className="Location">
                <div className="ContantWrapper">
                    <div className="Locationlieves">
                        <div className="ContantContainer">
                            <img src={MainIcon} alt="#" />
                            <h1>Location</h1>
                            <p>No. 100, Ln. 00, Chifeng St., Datong<br /> Dist., Taipei City 103, Taiwan (R.O.C.)
                                <br />
                                <br />
                                Open  11:00 - 22:00</p>
                            <ButtonLink type={BUTTONS.SERVICES} text={buttonText} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

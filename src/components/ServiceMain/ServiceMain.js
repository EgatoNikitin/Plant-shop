import { ButtonLink } from "../buttons/ButtonLink";
import { BUTTONS } from "../constants";

import './ServiseMain.scss'

export const ServiceMain = () => {
    const buttonText = "Try for service";
    return (
        <>
            <div className='ServiceContainer'>
                <div className='ServiceContent'>
                    <div className='BackgraundColor'>
                        <div className='ContantContainer'>
                            <h1>
                                Service for
                                <br />
                                <span> home plants.</span>
                            </h1>
                            <p>If you don’t know what plants you can add to the space,we can provide you with selected plants,and configure your space.</p>
                            <ButtonLink type={BUTTONS.SERVICES} text={buttonText} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

import { ButtonLink } from "../buttons/ButtonLink";
import MainIcon from "../assests/icons/Ellipse4.png";
import { PlantCard } from '../PlantCard/PlantCard'
import { BUTTONS, EXAMPLE_CARDS } from "../constants";
import { Link } from "react-router-dom";

import './ShopMain.scss'

export const ShopMain = () => {
    const buttonText = "Try for service";
    return (
        <>
            <div className='ShopContainer'>
                <div className='ShopContent'>
                    <div className='ContantContainer'>
                        <h1>
                            Service for
                            <br />
                            <span> home plants.</span>
                        </h1>
                        <p><span>7-14 DayS waiting</span><br />If you don’t know what plants you can add to the space,we can provide you with selected plants,and configure your space.</p>
                        <ButtonLink type={BUTTONS.SERVICES} text={buttonText} />
                        <span className="ShopMiniText">Gardener By</span>
                        <img src={MainIcon} />
                    </div>
                    <div className="ShopCards">
                        {EXAMPLE_CARDS.map((el, index) => {
                            if (index < 2)
                                return <Link to={el.path}>
                                    <PlantCard
                                        title={el.title}
                                        count={el.count}
                                        url={el.url}
                                        icon={el.icon}
                                        key={el + index}
                                    />
                                </Link>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

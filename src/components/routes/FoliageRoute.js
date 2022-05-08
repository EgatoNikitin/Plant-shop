import { Header } from "../Header/Header";
import { FoliageMain } from "../FoliageMain/FoliageMain";

import "../App.scss";
import "../assests/fonts/index.scss";

export const Foliage = () => {
    return (
        <>
            <div className="FoliageWrapper">
                <Header />
                <FoliageMain />
            </div>
        </>
    );
}
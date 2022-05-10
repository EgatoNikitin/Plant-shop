import { Header } from "../Header/Header";
import { LocationMain } from "../pages/locationMain/LocationMain";

import "../App.scss";
import "../../assests/fonts/index.scss";

export const LocationRoute = () => {
    return (
        <>
            <div className="LocationWrapper">
                <Header />
                <LocationMain />
            </div>
        </>
    );
}

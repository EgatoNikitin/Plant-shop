import { Header } from "../Header/Header";
import { ShopMain } from "../pages/ShopMain/ShopMain";

import "../App.scss";
import "../../assests/fonts/index.scss";


export const ShopRoute = () => {
    return (
        <>
            <div className="ShopWrapper">
                <Header />
                <ShopMain />
            </div>
        </>
    );
}
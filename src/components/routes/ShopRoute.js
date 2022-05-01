import { Header } from "../Header/Header";
import { ShopMain } from "../ShopMain/ShopMain";

import "../App.scss";
import "../assests/fonts/index.scss";


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
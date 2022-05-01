import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Examples } from "../Examples/Examples";

import "../App.scss";
import "../assests/fonts/index.scss";

export const MainRoute = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
      <div className="servicesSection">
        <Examples />
      </div>
    </>
  );
}

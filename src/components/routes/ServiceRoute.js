import { Header } from "../Header/Header";
import { ServiceMain } from "../pages/ServiceMain/ServiceMain";

import "../App.scss";
import "../../assests/fonts/index.scss";


export const ServiceRoute = () => {
  return (
    <>
      <div className="servicesWrapper">
        <Header />
        <ServiceMain />
      </div>
    </>
  );
}

import { Header } from "../Header/Header";
import { ServiceMain } from "../ServiceMain/ServiceMain";

import "../App.scss";
import "../assests/fonts/index.scss";


export const ServiceRoute = () => {
  return (
    <>
      <div className="canvas">
        <div className="servicesWrapper">
          <Header />
          <ServiceMain />
        </div>
      </div>
    </>
  );
}

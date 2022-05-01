import { ButtonLink } from "../buttons/ButtonLink";
import { PlantCard } from '../PlantCard/PlantCard'
import { BUTTONS, EXAMPLE_CARDS } from "../constants";

import "./Examples.scss";

export const Examples = () => {
  const buttonText = "Try for service";
  return (
    <>
      <div className="buttonWrapper">
        <ButtonLink type={BUTTONS.SERVICES} text={buttonText} />
      </div>
      <div className="exampleText">
        <h3 className="exampleTitle">Get a beautiful home</h3>
        <p className="exampleSubTitle">
          If you don’t know what plants you can add to the space We can provide
          you with selected plants And configure your space
        </p>
      </div>
      <div className="exampleGalery">
        <h2 className="examplePlants">
          4 types of plants
        </h2>
        <div className="exampleCardRow">
          {EXAMPLE_CARDS.map((el, index) => {
            return <PlantCard
              title={el.title}
              count={el.count}
              url={el.url}
              icon={el.icon}
              key={el + index}
            />
          })}
        </div>
      </div>
    </>
  );
};

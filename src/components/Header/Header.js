import { ButtonHeader } from "./ButtonHeader/ButtonHeader";
import { CheckOut } from "./CheckOut/CheckOut";
import { titles } from "../constants";
import "./Header.scss";
import icon from "../assests/icons/Logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ButtonHeader icon={icon} />
        {titles.map(({ name, path }, index) => (
          <ButtonHeader key={index} title={name} path={path} />
        ))}
        <CheckOut number="0" />
      </nav>
    </header>
  );
};

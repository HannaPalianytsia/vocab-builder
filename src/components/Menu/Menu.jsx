import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";
import illustration from "../../assets/images/illustration.png";
import Icon from "../Icon";

const Menu = ({ name, buildLinkClass }) => {
  return (
    <div className={css.menu}>
      <div className={css.user}>
        <p className={css.username}>{name}</p>
        <div className={css.usericon}>
          <Icon
            id={"icon-user"}
            width={14}
            height={14}
            className={"user-svg"}
            fillColor={"rgba(252, 252, 252, 0.7)"}
          />
        </div>
      </div>

      <nav className={css.nav}>
        <NavLink to="/dictionary" className={buildLinkClass}>
          Dictionary
        </NavLink>

        <NavLink to="/recommend" className={buildLinkClass}>
          Recommend
        </NavLink>

        <NavLink to="/training" className={buildLinkClass}>
          Training
        </NavLink>
      </nav>

      <button type="button">Log out</button>

      <img src={illustration} alt="illustration" />
    </div>
  );
};

export default Menu;

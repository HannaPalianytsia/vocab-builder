import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";
import clsx from "clsx";
import illustration from "../../assets/images/illustration.png";
import Icon from "../Icon";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Menu = ({ name }) => {
  return (
    <div className={css.menu}>
      <div className={css.menuheader}>
        <div className={css.user}>
          <p className={css.username}>{name}</p>
          <div className={css.usericon}>
            <Icon
              id={"icon-user"}
              width={14}
              height={14}
              className={"user-svg"}
              fillColor={"var(--main-color)"}
            />
          </div>
        </div>
        <button className={css.closebutton}>
          <Icon
            id={"icon-close"}
            width={20}
            height={20}
            className={"close-svg"}
            strokeColor={"var(--background-color-2)"}
          />
        </button>
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

        <button type="button" className={clsx(css.link, css.logoutBtn)}>
          Log out
        </button>
      </nav>

      <div className={css.illustration}>
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Menu;

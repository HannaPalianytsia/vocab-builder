import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";
import clsx from "clsx";

const UserNav = ({ place, handleClose }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  console.log(place);

  return (
    <nav className={clsx(css.nav, css[place])}>
      <NavLink
        onClick={handleClose}
        to="/dictionary"
        className={buildLinkClass}
      >
        Dictionary
      </NavLink>

      <NavLink onClick={handleClose} to="/recommend" className={buildLinkClass}>
        Recommend
      </NavLink>

      <NavLink onClick={handleClose} to="/training" className={buildLinkClass}>
        Training
      </NavLink>
    </nav>
  );
};

export default UserNav;

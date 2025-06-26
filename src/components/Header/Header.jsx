import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import Icon from "../Icon";
import { selectAuthName } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth/operations";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { useState } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const name = useSelector(selectAuthName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  function openBurger() {
    setShowBurgerMenu(true);
  }

  function closeBurger() {
    setShowBurgerMenu(false);
  }

  return (
    <header className={css.header}>
      <Logo />

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

      <div className={css.usermenu}>
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

        <button onClick={openBurger} className={css.burgerbtn}>
          <Icon
            id={"icon-menu"}
            width={32}
            height={22}
            className={"menu-svg"}
            strokeColor={"#121417"}
          />
        </button>

        <button type="button" onClick={handleLogOut} className={css.logoutBtn}>
          Log out
        </button>
      </div>
      {showBurgerMenu && (
        <Menu name={name} close={closeBurger} logOut={handleLogOut} />
      )}
    </header>
  );
};

export default Header;

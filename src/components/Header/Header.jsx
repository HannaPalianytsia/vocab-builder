import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import Icon from "../Icon";
import { selectAuthName } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const name = useSelector(selectAuthName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  function openBurger() {
    // setShowBurgerMenu(true);
    console.log("Open burger menu");
  }

  //   function closeBurger() {
  //     setShowBurgerMenu(false);
  //   }

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <Icon
          id={"icon-logo-2"}
          width={36}
          height={36}
          fillColor={"#fcfcfc"}
          className={"logo-svg"}
        />
      </Link>

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

      <p>
        {name}
        <Icon
          id={"icon-user"}
          width={32}
          height={32}
          className={"user-svg"}
          strokeColor={"#121417"}
        />
      </p>

      <button onClick={openBurger} className={css.burgerbtn}>
        <Icon
          id={"icon-menu"}
          width={32}
          height={32}
          className={"menu-svg"}
          strokeColor={"#121417"}
        />
      </button>

      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </header>
  );
};

export default Header;

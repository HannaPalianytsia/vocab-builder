import css from "./Header.module.css";
import Icon from "../Icon";
import { selectAuthName } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth/operations";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { useState } from "react";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";

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

      <UserNav place={"header"} />

      <div className={css.usermenu}>
        <UserBar name={name} place={"header"} />

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

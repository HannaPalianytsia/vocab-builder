import css from "./Menu.module.css";
import clsx from "clsx";
import illustration from "../../assets/images/illustration.png";
import Icon from "../Icon";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";

const Menu = ({ name, close, logOut }) => {
  return (
    <div className={css.menu}>
      <div className={css.menuheader}>
        <UserBar name={name} place={"menu"} />

        <button onClick={close} className={css.closebutton}>
          <Icon
            id={"icon-close"}
            width={20}
            height={20}
            className={"close-svg"}
            strokeColor={"var(--background-color-2)"}
          />
        </button>
      </div>

      <nav className={css.menuNav}>
        <UserNav place={"menu"} handleClose={close} />

        <button
          onClick={logOut}
          type="button"
          className={clsx(css.link, css.logoutBtn)}
        >
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

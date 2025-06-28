import css from "./UserBar.module.css";
import clsx from "clsx";
import Icon from "../Icon";

const UserBar = ({ place, name }) => {
  const iconColor =
    place === "header" ? "rgba(252, 252, 252, 0.7)" : "var(--main-color)";

  return (
    <div className={clsx(css.user, css[place])}>
      <p className={css.username}>{name}</p>
      <div className={css.usericon}>
        <Icon
          id={"icon-user"}
          width={14}
          height={14}
          className={"user-svg"}
          fillColor={iconColor}
        />
      </div>
    </div>
  );
};

export default UserBar;

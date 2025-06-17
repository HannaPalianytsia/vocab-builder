import css from "./Logo.module.css";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <div className={css.logoicon}>
        <Icon
          id={"icon-logo-2"}
          width={24}
          height={24}
          fillColor={"#fcfcfc"}
          className={"logo-svg"}
        />
      </div>
      <p className={css.logotext}>VocabBuilder</p>
    </Link>
  );
};

export default Logo;

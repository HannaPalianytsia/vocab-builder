import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import css from "./LoginPage.module.css";
import illustration from "../../assets/images/illustration.png";

const LoginPage = () => {
  return (
    <div className={css.container}>
      <LoginRegisterForm operation={"Login"} />
      <div className={css.imageWrap}>
        <img src={illustration} alt="illustration" className={css.image} />

        <ul className={css.list}>
          <li>Word</li>
          <li>·</li>
          <li>Translation</li>
          <li>·</li>
          <li>Grammar</li>
          <li>·</li>
          <li>Progress</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginPage;

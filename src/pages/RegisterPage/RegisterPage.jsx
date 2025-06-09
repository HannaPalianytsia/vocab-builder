import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import illustration from "../../assets/images/illustration.png";
import css from "../LoginPage/LoginPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <LoginRegisterForm operation={"Register"} />
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

export default RegisterPage;

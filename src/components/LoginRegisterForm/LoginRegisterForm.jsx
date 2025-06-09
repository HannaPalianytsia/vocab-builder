import css from "./LoginRegisterForm.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../redux/auth/operations";
import Icon from "../Icon";

const LoginRegisterForm = ({ operation }) => {
  const isRegister = operation === "Register";

  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: isRegister
      ? yup.string().required("Name is required")
      : yup.string().notRequired(),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (isRegister) {
      dispatch(signUp(data));
    } else {
      dispatch(signIn(data));
    }
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.title}>{operation}</h3>
      {operation === "Register" ? (
        <p className={css.text}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      ) : (
        <p className={css.text}>
          {" "}
          Please enter your login details to continue using our service:
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        {isRegister && (
          <div>
            <input {...register("name")} type="text" placeholder="Name" />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>
        )}

        <div>
          <input {...register("email")} type="email" placeholder="Email" />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div className={css.inputButton}>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <button
            type="button"
            onClick={() => toggleVisibility("password")}
            className={css.toggleVisibility}
          >
            {showPassword ? (
              <Icon id="icon-eye" width={20} height={20} className={css.eye} />
            ) : (
              <Icon
                id="icon-eye-off"
                width={20}
                height={20}
                className={css.eye}
              />
            )}
          </button>
        </div>
        <button type="submit" className={css.submit}>
          {operation}
        </button>
      </form>
      {operation === "Register" ? (
        <Link to="/login" className={css.link}>
          Login
        </Link>
      ) : (
        <Link to="/register" className={css.link}>
          Register
        </Link>
      )}
    </div>
  );
};

export default LoginRegisterForm;

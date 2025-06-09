import css from "./LoginRegusterForm.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginRegisterForm = ({ operation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, operation) => {
    if (operation === "Register") {
      console.log("Register Form submitted:", data);
    } else {
      console.log("Login Form submitted:", data);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: 300,
        }}
      >
        {operation === "Register" && (
          <div>
            <label>Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>
        )}
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            type="email"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit">{operation}</button>
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

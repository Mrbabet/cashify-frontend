import React, { useState } from "react";
import css from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { createUser } from "../../redux/auth/operations";
import logo from "../../assets/logo.svg";
import googleLogo from "../../assets/google-logo.svg";

const AuthForm = () => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    setIsEmailInvalid(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordInvalid(false);
  };
  const handleSubmit = async (e, action) => {
    e.preventDefault();

    if (!userEmail || !password) {
      if (!userEmail) setIsEmailInvalid(true);
      if (!password) setIsPasswordInvalid(true);
      return;
    }

    if (action === "login") {
      dispatch(
        loginUser({
          email: userEmail,
          password: password,
        })
      );
    } else if (action === "register") {
      dispatch(
        createUser({
          email: userEmail,
          password: password,
        })
      );
    }

    setUserEmail("");
    setPassword("");
  };
  return (
    <section className={css.loginSection}>
      <div className={css.wrapper}>
        <img src={logo} alt="" />
        <div className={css.formContainer}>
          <div className={css.paragraphDiv}>
            <p className={css.paragraph}>
              You can log in with your Google Account:
            </p>
            <button className={css.googleBttn}>
              <img src={googleLogo} alt="" />
            </button>
            <p className={css.paragraph}>
              Or log in using an email and password, after registering:
            </p>
          </div>
          <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <label className={css.label}>
              Email:
              <input
                className="emailinput"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={userEmail}
                onChange={handleEmailChange}
              />
              {isEmailInvalid && (
                <span className={css.requiredSpan}>This field is required</span>
              )}
            </label>
            <label className={css.label}>
              Password:
              <input
                className="passwordinput"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {isPasswordInvalid && (
                <span className={css.requiredSpan}>This field is required</span>
              )}
            </label>
            <div className={css.bttnsDiv}>
              <button type="submit" onClick={(e) => handleSubmit(e, "login")}>
                LOG IN
              </button>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e, "register")}
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, password } from "../../redux/actions/actions";
import { LOGIN, PASSWORD } from "../../constants/constants";
import "./styles.css";

export const LoginPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlerLogin = (event) => {
    dispatch(login(LOGIN, event.target.value));
    console.log(state.login, event.target.value);
  };

  const handlerPassword = (event) => {
    dispatch(password(PASSWORD, event.target.value));
    console.log(state.password);
  };

  return (
    <form className="form">
      <input
        placeholder="admin123"
        onChange={handlerLogin}
        className="form__input"
      />
      <input
        placeholder="123456"
        onChange={handlerPassword}
        className="form__input"
      />
      <Link
        to="/profile"
        className={`form__link ${
          state.login === "admin123" && state.password === "123456"
            ? ""
            : "form__link--disabled"
        }`}
      >
        Войти
      </Link>
    </form>
  );
};

// export default withRouter(LoginPage)

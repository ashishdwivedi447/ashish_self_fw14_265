import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/auth.action";
import { useNavigate,useLocation} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location=useLocation();
  console.log(location ,"from login")
  const token = useSelector((state) => state.auth.token);
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth, token);
  const dispatch = useDispatch();
  const userNameInput = useRef();
  const emailInput = useRef();

  const submit = (e) => {
    e.preventDefault();
    let data = {
      email: userNameInput.current.value,
      password: emailInput.current.value,
    };

    console.log(data);
    login(dispatch, data);
  };
  useEffect(() => {
    if (isAuth) {
      navigate(location.state.from.pathname);
    }
  }, [isAuth]);

  return (
    <div>
      <form action="" onSubmit={submit}>
        <label>
          {"email : "}
          <input ref={userNameInput} type="text" value={"eve.holt@reqres.in"} />
        </label>
        <br />
        <label>
          {" password : "}
          <input ref={emailInput} type="text" value={"cityslicka"} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

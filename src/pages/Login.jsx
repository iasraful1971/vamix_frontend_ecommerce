import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../extra/spinners/Spinner";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsloading] = useState(false);

  const auth = getAuth();
  const signin = async () => {
    try {
      setIsloading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem('currentUser' ,JSON.stringify(result))
      setIsloading(false);
      toast.success("Login Successfully");
      setEmail('')
      setPassword('')
      window.location.href="/"
    } catch (error) {
      setIsloading(false);
      toast.error("Something wrong occurred");
    }
  };

  return (
    <div className="login-parent">
      {loading && <Spinner />}
      <div className="login-top"></div>
      <div className="row justify-content-center g-5">
        <div className="col-md-4 z1">
          <div className="log-in-form">
            <h2>Log In</h2>
            <hr />

            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button  onClick={signin} className="register" type="button">
              Log in
            </button>
            <br />
            <h6 className="pt-2">or</h6>
            <div className="d-flex-google ">
              <FcGoogle className="google" />
              <h6>Sign in with Google</h6>
            </div>
            <hr />
            <Link className="convert" to="/register">
              New user? Register
            </Link>
          </div>
        </div>
        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_yupefrh2.json"
            background="transparent"
            speed="1"
            className="img-login"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Login;

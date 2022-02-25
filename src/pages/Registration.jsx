import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../extra/spinners/Spinner";

const Registration = () => {
  const [loading, setIsloading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const auth = getAuth();

  const register = async() => {
    try {
      setIsloading(true);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setIsloading(false);

      toast.success("User Register Successfully");
      setEmail('')
      setName('')
      setPassword('')
      setCpassword('')
      window.location.href="/login"
      
    } catch (error) {
      setIsloading(false);
      toast.error("Something wrong occurred");
    }
  };
  return (
    <div className="register-parent">
      {loading && <Spinner />}
      <div className="register-top"></div>
      <div className="row justify-content-center g-5">
        <div className="col-md-5">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_6wutsrox.json"
            background="transparent"
            speed="1"
            className="img-fluid"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="col-md-4 z1">
          <div className="log-in-form">
            <h2>Register Now!</h2>
            <hr />
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button className="register" type="button" onClick={register}>
              Register
            </button>
            <br />
            <br />
            <Link className="convert" to="/login">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

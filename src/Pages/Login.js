import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages/Login.styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log(formValues.username);
    console.log(formValues.password);
    console.log(formValues);
    e.preventDefault();
    axios
      .post("https://express-t4.onrender.com/api/login", {
        username: formValues.username,
        password: formValues.password,
      })
      .then((response) => {
        if (response.data.message === "Login success!") {
          navigate("/users");
        }
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="container_login">
        <div className="card_login">
          <div className="card-header">
            <label>Login</label>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="login_form">
              <label className="titles">Username:</label>
              <input
                placeholder="username"
                type="text"
                id="username"
                className="login_input"
                value={formValues.username}
                onChange={handleChange}
                name="username"
              />
              <label className="titles">Password:</label>
              <input
                placeholder="Password"
                type="password"
                id="password"
                className="login_input"
                value={formValues.password}
                onChange={handleChange}
                name="password"
              />
              <button className="login_button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

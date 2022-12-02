import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ updateUser }) {
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const { user_name, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      user_name,
      password,
    };
    console.log(user);
    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          history.push('/')
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form className="login-form" onSubmit={onSubmit}>
        <p> Log In Here! </p>
        <input
          type="text"
          onChange={handleChange}
          name="user_name"
          value={formData.user_name}
          placeholder="username"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="password"
        />
        <input type="submit" value="Log In"/>
      </form>
    </div>
  );
}

export default Login;

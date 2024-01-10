import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/Users/z4/Documents/mindx/perfum/Perfum-Web/Perfum/src/styles/Login.css";

const LoginForm = () => {
  const [form, setForm] = useState("login");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === user.email &&
      storedUser.password === user.password
    ) {
      alert("Đăng nhập thành công!");
      navigate("/");
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng ký thành công!");
    setForm("login");
  };

  return (
    <div className="form-container">
      {form === "login" ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="form-title">Đăng nhập</h2>
          <div className="input-group">
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Mật khẩu:
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </div>
          <input type="submit" value="Đăng nhập" className="submit-btn" />
          <button type="button" onClick={() => setForm("register")}>
            Đăng ký
          </button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="register-form">
          <h2 className="form-title">Đăng ký</h2>
          <div className="input-group">
            <label>
              Tên:
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Mật khẩu:
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </div>
          <input type="submit" value="Đăng ký" className="submit-btn" />
        </form>
      )}
    </div>
  );
};

export default LoginForm;

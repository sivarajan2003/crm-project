import { useState } from "react";
import { Mail, Eye } from "lucide-react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email === "admin@gmail.com" && password === "12345678") {

      localStorage.setItem("auth", "true");
      window.location.href = "/dashboard";

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (
    <div className="login-wrapper">

      <div className="login-card">

        {/* LOGO */}
        <div className="logo-box">
          <img src="/logo.png" width="28" />
        </div>

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-sub">Sign in to your account</p>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email</label>

          <div className="input-box">
            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Mail size={18} color="#9ca3af"/>
          </div>
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <label>Password</label>

          <div className="input-box">
            <input
              type="password"
              placeholder="12345678"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Eye size={18} color="#9ca3af"/>
          </div>
        </div>

        {/* BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>

        <div className="divider"></div>

        <p className="footer-text">
          Application Developed and maintained by
        </p>

        <p className="company-name">
          Atelier Technology Solutions
        </p>

      </div>

    </div>
  );
}
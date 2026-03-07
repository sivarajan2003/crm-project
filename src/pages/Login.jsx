import { useState } from "react";
import { Mail, Eye,  Lock } from "lucide-react";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await authService.login(email, password);
      
      if (response.success) {
        navigate("/");
      } else {
        setError(response.message || "Invalid Email or Password");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
  return (
    <div className="login-wrapper relative min-h-screen flex items-center justify-center bg-[#f1f5f9] overflow-hidden">

{/* Animated CRM SVG Background */}
<svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 1200 800"
  xmlns="http://www.w3.org/2000/svg"
>

  {/* Floating circles */}
  <circle cx="200" cy="200" r="120" fill="#3b82f6" opacity="0.1">
    <animate attributeName="cy" values="200;230;200" dur="8s" repeatCount="indefinite"/>
  </circle>

  <circle cx="950" cy="150" r="160" fill="#6366f1" opacity="0.08">
    <animate attributeName="cy" values="150;180;150" dur="10s" repeatCount="indefinite"/>
  </circle>

  <circle cx="1050" cy="650" r="200" fill="#8b5cf6" opacity="0.08">
    <animate attributeName="cy" values="650;680;650" dur="12s" repeatCount="indefinite"/>
  </circle>

  {/* CRM dashboard blocks */}
  <rect x="160" y="420" width="200" height="120" rx="16" fill="#3b82f6" opacity="0.15">
    <animate attributeName="y" values="420;440;420" dur="9s" repeatCount="indefinite"/>
  </rect>

  <rect x="480" y="320" width="220" height="140" rx="16" fill="#6366f1" opacity="0.15">
    <animate attributeName="y" values="320;350;320" dur="7s" repeatCount="indefinite"/>
  </rect>

  <rect x="780" y="440" width="200" height="120" rx="16" fill="#8b5cf6" opacity="0.15">
    <animate attributeName="y" values="440;470;440" dur="11s" repeatCount="indefinite"/>
  </rect>

  {/* connecting CRM lines */}
  <line x1="260" y1="420" x2="590" y2="320" stroke="#c7d2fe" strokeWidth="2">
    <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" repeatCount="indefinite"/>
  </line>

  <line x1="700" y1="380" x2="880" y2="440" stroke="#c7d2fe" strokeWidth="2">
    <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" repeatCount="indefinite"/>
  </line>

</svg>

{/* LOGIN CARD */}
<div className="login-card relative z-10">

        {/* LOGO 
        <div className="logo-box">
          <img src="/logo.png" width="28" />
        </div>*/}
        {/* LOGIN ICON */}


<div className="login-icon">
  <Briefcase size={28} color="#ffffff" />
</div>

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-sub">Sign in to your account</p>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email</label>

          <div className="input-box">
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <Mail size={18} color="#9ca3af"/>
          </div>
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <label>Password</label>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <Eye
              size={18}
              color="#9ca3af"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div style={{
            padding: '10px',
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            borderRadius: '6px',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        {/* BUTTON */}
        <button 
          className="login-btn" 
          onClick={handleLogin}
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Signing In...' : 'Sign In'}
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
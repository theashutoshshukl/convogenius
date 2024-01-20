import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/styles/login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  // Login Submit Button
  const loginSubmitBtn = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return toast.warning("Please Enter Email & Password", {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }

    setButtonClicked(true);

    const url = "https://convogenius.onrender.com/user/login";
    const data = {
      email: email,
      password: password
    }
    // Request Object
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }

    try {
      // Sending login fetch request
      const response = await fetch(url, requestOptions);

      const responseData = await response.json();
      if (responseData.error) {
        toast.error(`${responseData.error}`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        return setButtonClicked(false);
      }

      // If No Error
      toast.success(`${responseData.message}`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });

      setButtonClicked(false);
      // Saving token to localStorage
      if (responseData.token) {
        localStorage.setItem("token", responseData.token);
      }
      navigate("/chat")

      // clearing input field
      setEmail("");
      setPassword("");

    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }

  return (
    <div className="login">
      {/* Form */}
      <form className="login-form">
        <h1 className="login-form-heading">Welcome Back</h1>
        {/* Email */}
        <label htmlFor="email">Your Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Your Email -" />

        {/* Password */}
        <label htmlFor="password">Your Password:</label>
        <input type="tel" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter Your Password -" />
        <span className="forget-password"><Link to="/forget-password">Forget Password?</Link></span>

        {/* Button */}
        <button type="submit" className={`${buttonClicked ? "disabled" : ""} submitBtn`} onClick={loginSubmitBtn}>Login</button>

        {/* Other */}
        <div className="other">
          <p>Dont have an account?</p>
          <Link to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
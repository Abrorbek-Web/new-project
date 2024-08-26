import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import bgImg from "./../assets/bg-image.jpg";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../slices/authSlice";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    login(email, password)
      .then((res) => {
        setIsLoading(false);
        dispatch(signIn(res));
        toast.success("Login successful!");
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err.response?.data?.error || "Unknown error");
        if (err.response?.data?.error === "Awaiting confirmation") {
          navigate("/waiting");
        } else {
          dispatch(signOut());
          toast.error("Login failed. Please try again.");
        }
      });
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="login-form-content">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleOnSubmit} className="login-form" action="#">
              <div>
                <label htmlFor="email" className="login-label">
                  Email
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="login-input"
                  placeholder="Enter your email..."
                />
              </div>
              <div>
                <label htmlFor="password" className="login-label">
                  Password
                </label>
                <div className="password-wrapper">
                  <input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={isShowingPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password..."
                    className="login-input"
                  />
                  {isShowingPassword ? (
                    <AiOutlineEye
                      onClick={() => setIsShowingPassword(!isShowingPassword)}
                      className="password-toggle-icon"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsShowingPassword(!isShowingPassword)}
                      className="password-toggle-icon"
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="login-submit-button"
              >
                {!isLoading ? (
                  <>Sign In</>
                ) : (
                  <PropagateLoader color="white" className="loader" />
                )}
              </button>
              <p className="login-register-link">
                You don't have an account?{" "}
                <Link to="/register" className="login-link">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

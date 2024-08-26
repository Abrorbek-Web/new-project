import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import bgImg from "./../assets/bg-img.png";
import { register } from "../services/authService";
import Select, { SingleValue } from "react-select";

interface PositionOption {
  value: string;
  label: string;
}

const positionOptions: PositionOption[] = [
  { value: "Project Manager", label: "Project Manager" },
  { value: "Project Engineer Manager", label: "Project Engineer Manager" },
  { value: "Project Coordinator", label: "Project Coordinator" },
  { value: "Planning & Control", label: "Planning & Control" },
  { value: "Document Control (DCC)", label: "Document Control (DCC)" },
  {
    value: "Head of Engineering Discipline",
    label: "Head of Engineering Discipline",
  },
  { value: "Engineer", label: "Engineer" },
  { value: "Draftman", label: "Draftman" },
];

function Register() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    const user = {
      email,
      first_name: firstName,
      last_name: lastName,
      position,
      phone_number: phoneNumber,
      password,
    };

    register(user)
      .then((res) => {
        toast.success("Successfully registered!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Problem to register.");
      });
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <div className="register-form-container">
          <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={handleOnSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="Email">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Enter your email..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="FirstName">Firstname</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="Enter your firstname..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Lastname</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your lastname..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position">Position</label>
                  <Select
                    className="flex-1 text-sm"
                    placeholder="Select Position..."
                    options={positionOptions}
                    onChange={(e: SingleValue<PositionOption>) => {
                      if (e === null) {
                        setPosition("");
                      } else {
                        setPosition(e.value);
                      }
                    }}
                    isClearable
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone</label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone..."
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <div className="password-input-container">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={isShowingPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password..."
                      required
                    />
                    {isShowingPassword ? (
                      <AiOutlineEye
                        onClick={() => setIsShowingPassword((prev) => !prev)}
                        className="password-icon"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() => setIsShowingPassword((prev) => !prev)}
                        className="password-icon"
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={
                  email === "" ||
                  firstName === "" ||
                  lastName === "" ||
                  position === "" ||
                  phoneNumber === "" ||
                  password === ""
                }
              >
                Register
              </button>
              <p>
                You already have an account? <Link to="/login">Log In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Register };

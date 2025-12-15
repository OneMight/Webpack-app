import React, { useState } from "react";
import "./registration.css";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import FormInput from "../../components/inputs/formInput/formInput";
import Button from "../../components/button/button";
import type { BaseUser } from "../../types/types";
import { usePostUserMutation } from "../../api/userApi";
import { AlertMui } from "../../components/alert/alert";
export default function Registration() {
  const handlePreventDefault = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState<BaseUser>({
    name: "",
    email: "",
    password: "",
  });
  const [checkPolicy, setCheckPolicy] = useState<boolean>(false);
  const [cPassword, setcPassword] = useState<string>("");
  const [adduser] = usePostUserMutation();
  const handleRegister = () => {
    if (newUser.password !== cPassword) {
      setError("Passwords mismatch");
      return;
    }
    if (newUser.name.length < 6) {
      setError("Username is small");
      return;
    }
    adduser(newUser);
  };
  return (
    <main className="registration-page">
      {error && <AlertMui setError={setError}>{error}</AlertMui>}
      <div className="registration">
        <div className="registration-con">
          <div className="registration-text">
            <h2 className="registration-title">Signup</h2>
            <p className="redirect">
              Already Have An Account,{" "}
              {
                <Link to={ROUTES.LOGIN} className="registration-login">
                  Login
                </Link>
              }
              .
            </p>
          </div>
          <form onSubmit={handlePreventDefault} className="registration-form">
            <div className="registration-inputs">
              <FormInput
                label="Username"
                name="Username"
                placeholder="Enter username"
                type="text"
                func={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewUser((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <FormInput
                label="Email"
                name="email"
                placeholder="Enter email"
                type="text"
                func={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="registration-inputs">
              <FormInput
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                func={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <FormInput
                label="Confirm Password"
                name="c-password"
                placeholder="Confirm password"
                type="password"
                func={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setcPassword(e.target.value)
                }
              />
            </div>
            <label className="registration-terms">
              <input
                type="checkbox"
                required
                checked={checkPolicy}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCheckPolicy(e.target.checked)
                }
              />
              I have read and agreed to the Terms of Service and Privacy Policy
            </label>
            <Button
              width="100%"
              padding="10px 0"
              borderradius="30px"
              fontSize="20px"
              textcolor="#fff"
              disabled={!checkPolicy}
              func={() => handleRegister()}
            >
              Create Account
            </Button>
          </form>
        </div>
        <div className="img">
          <img className="image" src="/images/registration-img.jpg" />
        </div>
      </div>
    </main>
  );
}

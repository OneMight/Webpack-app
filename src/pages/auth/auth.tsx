import "./auth.css";
import "../registration/registration.css";
import Button from "../../components/button/button";
import FormInput from "../../components/inputs/formInput/formInput";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useState } from "react";
import type { User } from "../../types/types";
import { useGetTokenMutation } from "../../api/userApi";
import { AlertMui } from "../../components";
export default function Auth() {
  const [loginFunc, { isLoading }] = useGetTokenMutation();
  const [error, setError] = useState<string>(null);
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleGetToken = async () => {
    try {
      if (user.password != "" || user.username != "") {
        const response = await loginFunc(user).unwrap();
        if (!isLoading) {
          document.cookie = `accessToken=${response.accessToken}`;
          document.cookie = `refreshToken=${response.refreshToken}`;
        }
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      setError(error.data.message);
      return;
    }
  };
  const handlePreventDefault = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  return (
    <main className="auth-page">
      {error && <AlertMui setError={setError}>{error}</AlertMui>}
      <div className="auth">
        <section className="auth-con">
          <div className="auth-text">
            <h2 className="auth-title">Login</h2>
            <p className="redirect">
              Do not have an account,
              <Link className="registration-login" to={ROUTES.REGISTER}>
                create a new one
              </Link>
              .
            </p>
          </div>
          <form className="auth-inputs" onSubmit={handlePreventDefault}>
            <FormInput
              label="Enter Your Email"
              name="email"
              placeholder="Enter email"
              type="text"
              func={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUser((prev) => ({ ...prev, username: e.target.value }))
              }
              width="95%"
            />
            <FormInput
              label="Enter Your Password"
              name="password"
              placeholder="Enter password"
              type="password"
              func={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              width="95%"
            />
            <Button
              width="100%"
              padding="10px 0"
              borderradius="30px"
              fontSize="20px"
              textcolor="#fff"
              func={() => handleGetToken()}
            >
              Login
            </Button>
          </form>
        </section>
        <div className="img">
          <img
            className="image"
            loading="lazy"
            src="/images/registration-img.jpg"
            alt="auth-image"
          />
        </div>
      </div>
    </main>
  );
}

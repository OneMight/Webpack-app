import "./auth.css";
import "../registration/registration.css";
import Button from "../../components/button/buttonUI";
import FormInput from "../../components/inputs/formInput/formInput";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useState } from "react";
import type { AlertProps, User } from "../../types/types";
import { useGetTokenMutation } from "../../api/userApi";
import { AlertMui } from "../../components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
export default function Auth() {
  const [loginFunc] = useGetTokenMutation();
  const [addAlert, setAlert] = useState<AlertProps>({
    message: "",
    type: "success",
  });
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleGetToken = async () => {
    try {
      const response = await loginFunc(user).unwrap();
      document.cookie = `accessToken=${response.accessToken}`;
      document.cookie = `refreshToken=${response.refreshToken}`;
      navigate(ROUTES.HOME);
    } catch (error) {
      setAlert({ message: error.data.message, type: "error" });
      return;
    }
  };
  const handlePreventDefault = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const handleSetUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, username: e.target.value }));
  };
  return (
    <Box component={"main"} className="auth-page">
      {addAlert.message && <AlertMui setAlert={setAlert}>{addAlert}</AlertMui>}
      <Stack direction={"row"} className="auth">
        <Box component={"section"} className="auth-con">
          <Box className="registration-text">
            <Typography component={"h4"} variant="h4" className="auth-title">
              Login
            </Typography>
            <Typography component={"p"} className="redirect">
              Do not have an account,
              <Link className="registration-login" to={ROUTES.REGISTER}>
                create a new one
              </Link>
              .
            </Typography>
          </Box>
          <FormControl
            className="auth-inputs"
            required
            onSubmit={handlePreventDefault}
          >
            <FormInput
              label="Enter Your Username"
              name="username"
              placeholder="Enter username"
              type="text"
              onChange={handleSetUsername}
              width="95%"
            />
            <FormInput
              label="Enter Your Password"
              name="password"
              placeholder="Enter password"
              type="password"
              onChange={handleSetUserPassword}
              width="95%"
            />
            <Button
              width="100%"
              padding="10px 0"
              radius="30px"
              fontSize="20px"
              tint="#fff"
              onClick={handleGetToken}
            >
              Login
            </Button>
          </FormControl>
        </Box>
        <Box className="img">
          <img
            className="image"
            loading="lazy"
            src="/images/registration-img.jpg"
            alt="auth-image"
          />
        </Box>
      </Stack>
    </Box>
  );
}

import React, { useState } from "react";
import "./registration.css";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import FormInput from "../../components/inputs/formInput/formInput";
import Button from "../../components/button/buttonUI";
import type { AlertProps, BaseUser } from "../../types/types";
import { usePostUserMutation } from "../../api/userApi";
import { AlertMui } from "../../components/alert/alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormLabel from "@mui/material/FormLabel";
export default function Registration() {
  const handlePreventDefault = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const [addAlert, setAlert] = useState<AlertProps>({
    message: "",
    type: "success",
  });
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
      setAlert({ message: "Passwords mismatch", type: "error" });
      return;
    }
    if (newUser.name.length < 6) {
      setAlert({ message: "Username is small", type: "error" });
      return;
    }
    adduser(newUser);
  };
  const handleSetNewUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleSetNewUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleSetNewUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleSetConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcPassword(e.target.value);
  };
  const handleSetCheckPolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPolicy(e.target.checked);
  };
  return (
    <Box component={"main"} className="registration-page">
      {addAlert.message && <AlertMui setAlert={setAlert}>{addAlert}</AlertMui>}
      <Box className="registration">
        <Stack direction={"column"} className="registration-con">
          <Box className="registration-text">
            <Typography
              component={"h2"}
              variant="h4"
              className="registration-title"
            >
              Signup
            </Typography>
            <Typography component={"p"} className="redirect">
              Already Have An Account,{" "}
              {
                <Link to={ROUTES.LOGIN} className="registration-login">
                  Login
                </Link>
              }
              .
            </Typography>
          </Box>
          <FormControl
            required
            onSubmit={handlePreventDefault}
            className="registration-form"
          >
            <Stack direction={"row"} className="registration-inputs">
              <FormInput
                label="Username"
                name="Username"
                placeholder="Enter username"
                type="text"
                onChange={handleSetNewUsername}
              />
              <FormInput
                label="Email"
                name="email"
                placeholder="Enter email"
                type="text"
                onChange={handleSetNewUserEmail}
              />
            </Stack>
            <Stack direction={"row"} className="registration-inputs">
              <FormInput
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={handleSetNewUserPassword}
              />
              <FormInput
                label="Confirm Password"
                name="c-password"
                placeholder="Confirm password"
                type="password"
                onChange={handleSetConfirmPassword}
              />
            </Stack>
            <FormLabel
              sx={{ color: "--var(--total-black)" }}
              className="registration-terms"
            >
              <Input
                type="checkbox"
                required
                aria-checked={checkPolicy}
                onChange={handleSetCheckPolicy}
              />
              I have read and agreed to the Terms of Service and Privacy Policy
            </FormLabel>

            <Button
              width="100%"
              padding="10px 0"
              radius="30px"
              fontSize="20px"
              tint="#fff"
              disabled={!checkPolicy}
              onClick={handleRegister}
            >
              Create Account
            </Button>
          </FormControl>
        </Stack>
        <Box className="img">
          <img className="image" src="/images/registration-img.jpg" />
        </Box>
      </Box>
    </Box>
  );
}

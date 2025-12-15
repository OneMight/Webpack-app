import React from "react";
import "./footer.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
export default function Footer() {
  const handlePreventDefult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Box component={"footer"} className="footer">
      <Stack direction={"column"} className="footer-describe">
        <img src="/images/logo-70-white.svg" alt="logo-white" />
        <Typography component={"h2"} variant="h4" className="footer-title">
          Subscribe To Your Newsletter to Stay Updated About Discounts
        </Typography>
        <FormControl
          component={"form"}
          onSubmit={handlePreventDefult}
          className="footer-form"
        >
          <input
            type="text"
            name="email-subscription"
            placeholder="example@email.com"
            className="email-subscription"
          />
          <button type="button" name="submit-button" className="submit-button">
            <img
              className="arrow-right"
              src="/images/right-arrow.svg"
              alt="arrow-right"
            />
          </button>
        </FormControl>
      </Stack>
      <Box className="sub-footer">
        <Typography component={"p"} className="sub-footer_copyright">
          Copyright © 2023 Renew Bariatrics, Inc
        </Typography>
      </Box>
    </Box>
  );
}

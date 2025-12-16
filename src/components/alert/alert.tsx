import { Alert, Box, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import type { AlertProps } from "../../types/types";
export interface Alert {
  children: AlertProps;
  setAlert: (addAlert: AlertProps) => void;
}

export const AlertMui = ({ children, setAlert }: Alert) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleCloseAlert = () => {
    setOpen(false);
    setAlert({ message: "", type: "success" });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      setAlert({ message: "", type: "success" });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        position: "fixed",
        top: "80px",
        zIndex: 10,
      }}
    >
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity={children.type}
          sx={{ display: "flex", alignItems: "center" }}
          action={
            <IconButton aria-label="close" onClick={handleCloseAlert}>
              <CloseIcon />
            </IconButton>
          }
        >
          {children.message}
        </Alert>
      </Collapse>
    </Box>
  );
};

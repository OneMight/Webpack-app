import { IAlert } from "../../types/intefaces";
import { Alert, Box, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export const AlertMui = ({ children, setError }: IAlert) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleCloseAlert = () => {
    setOpen(false);
    setError(null);
  };
  return (
    <Box sx={{ position: "fixed", top: "80px", zIndex: 10 }}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton aria-label="close" onClick={handleCloseAlert}>
              <CloseIcon />
            </IconButton>
          }
        >
          {children}
        </Alert>
      </Collapse>
    </Box>
  );
};

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { IModalUI } from "../../types/intefaces";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "250px",
  fontFamily: "Oxygen, sans-serif",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 2,
};

export default function ModalUI({ setOpen, open }: IModalUI) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const handleExit = () => {
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
    window.location.reload();
    navigate(ROUTES.HOME);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 250 }}>
        <h2 id="parent-modal-title">Exit</h2>
        <p id="parent-modal-description">Are you sure you wont to exit? </p>
        <Button onClick={handleExit}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </Box>
    </Modal>
  );
}

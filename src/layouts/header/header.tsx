import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./header.css";
import ButtonUI from "../../components/button/buttonUI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyUserQuery } from "../../api/userApi";
import ModalUI from "../modalUI/modalUI";
import { PositionedMenu } from "../index";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Header = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [openedBurger, setOpenedBurger] = useState<boolean>(false);
  const handleNavigate = (route: string) => {
    navigate(route);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleGetToken = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  const accessToken = handleGetToken("accessToken");
  const { isSuccess } = useVerifyUserQuery(accessToken, {
    skip: accessToken == null,
  });
  useEffect(() => {
    if (isSuccess) {
      setIsLogged(true);
    }
  }, [isSuccess]);
  return (
    <Stack component={"header"} direction={"row"} className="header">
      <ModalUI setOpen={setOpen} open={open}></ModalUI>
      <Box className="header-image">
        <img src="/images/logo-70.svg" alt="logo" />
      </Box>
      <Stack component={"nav"} direction={"row"} className="header_nav">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.CATEGORIES}>Categories</Link>
      </Stack>
      <Box className="burger-menu">
        <PositionedMenu
          opened={openedBurger}
          setOpenModal={handleOpenModal}
          setOpened={setOpenedBurger}
          isLogged={isLogged}
        />
      </Box>

      {!isLogged ? (
        <Box className="header-log-buttons">
          <ButtonUI
            children="Registration"
            onClick={() => handleNavigate(ROUTES.REGISTER)}
            width="120px"
            padding="5px 5px"
            radius="20px"
            fontSize="16px"
            tint={"#fff"}
          />
          <ButtonUI
            children="Login"
            onClick={() => handleNavigate(ROUTES.LOGIN)}
            width="120px"
            padding="5px 5px"
            radius="20px"
            fontSize="16px"
            tint={"#fff"}
          />
        </Box>
      ) : (
        <Box className="header_controll">
          <Button className="header_buttons" onClick={() => handleOpenModal()}>
            <img src="/images/account.svg" alt="account" />
            <img src="/images/bottom-arrow.svg" alt="bottom-arrow" />
          </Button>
          <Button
            className="header_buttons"
            onClick={() => handleNavigate(ROUTES.BASKET)}
          >
            <img src="/images/orders.svg" alt="orders" />
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default Header;

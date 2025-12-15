import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./header.css";
import Button from "../../components/button/buttonUI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyUserQuery } from "../../api/userApi";
import ModalUI from "../modalUI/modalUI";
import { PositionedMenu } from "../index";
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
  const { data, isSuccess } = useVerifyUserQuery(accessToken, {
    skip: accessToken == null,
  });
  useEffect(() => {
    if (isSuccess) {
      setIsLogged(true);
    }
  }, [isSuccess]);
  return (
    <header className="header">
      <ModalUI setOpen={setOpen} open={open}></ModalUI>
      <div className="header-image">
        <img src="/images/logo-70.svg" alt="logo" />
      </div>
      <nav className="header_nav">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.CATEGORIES}>Categories</Link>
      </nav>
      <div className="burger-menu">
        <PositionedMenu
          opened={openedBurger}
          setOpenModal={handleOpenModal}
          setOpened={setOpenedBurger}
          isLogged={isLogged}
        />
      </div>

      {!isLogged ? (
        <div className="header-log-buttons">
          <Button
            children="Registration"
            onClick={() => handleNavigate(ROUTES.REGISTER)}
            width="120px"
            padding="5px 5px"
            borderRadius="20px"
            fontSize="16px"
            textColor={"#fff"}
          />
          <Button
            children="Login"
            onClick={() => handleNavigate(ROUTES.LOGIN)}
            width="120px"
            padding="5px 5px"
            borderRadius="20px"
            fontSize="16px"
            textColor={"#fff"}
          />
        </div>
      ) : (
        <div className="header_controll">
          <button className="header_buttons" onClick={() => handleOpenModal()}>
            <img src="/images/account.svg" alt="account" />
            <img src="/images/bottom-arrow.svg" alt="bottom-arrow" />
          </button>
          <button
            className="header_buttons"
            onClick={() => handleNavigate(ROUTES.BASKET)}
          >
            <img src="/images/orders.svg" alt="orders" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

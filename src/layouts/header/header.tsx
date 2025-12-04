import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./header.css";
import Button from "../../components/button/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyUserQuery } from "../../hooks/userApi";
const Header = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const handleGetToken = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  const accessToken = handleGetToken("accessToken");
  const { data, isSuccess } = useVerifyUserQuery(accessToken, {
    skip: !accessToken,
  });
  useEffect(() => {
    if (isSuccess) {
      setIsLogged(true);
    }
  }, [isSuccess]);
  return (
    <header className="header">
      <div className="header-image">
        <img src="./images/logo-70.svg" alt="logo" />
      </div>
      <nav className="header_nav">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={""}>Categories</Link>
        <Link to={""}>Contact Us</Link>
        <Link to={""}>Blog</Link>
      </nav>
      {!isLogged ? (
        <div className="header-log-buttons">
          <Button
            children="Registration"
            func={() => handleNavigate(ROUTES.REGISTER)}
            width="120px"
            padding="5px 5px"
            borderRadius="20px"
            fontSize="16px"
            textColor={"#fff"}
          />
          <Button
            children="Login"
            func={() => handleNavigate(ROUTES.LOGIN)}
            width="120px"
            padding="5px 5px"
            borderRadius="20px"
            fontSize="16px"
            textColor={"#fff"}
          />
        </div>
      ) : (
        <div className="header_controll">
          <button className="header_buttons">
            <img src="./images/account.svg" alt="account" />
            <img src="./images/bottom-arrow.svg" alt="bottom-arrow" />
          </button>
          <Link to={""}>
            <img src="./images/orders.svg" alt="orders" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

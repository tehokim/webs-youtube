import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = function () {
  return (
    <header id="header" role="banner">
      <Logo />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;

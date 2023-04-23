import { useState } from "react";

// components
import Avatar from "../Avatar";
import Cart from "../../components/Cart";
import Button from "../UI/Button";

// assets
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";
import AvatarSrc from "../../assets/images/image-avatar.png";

// style
import {
  NavbarContainer,
  NavLeft,
  NavRight,
  NavItem,
  NavList,
  CartQty,
} from "./Navbar.style";

// constants
const NAV_ITEMS = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [cartIsActivated, setCartIsActivated] = useState(false);

  return (
    <NavbarContainer>
      <NavLeft>
        <h1>
          <Logo />
        </h1>
        <NavList>
          {NAV_ITEMS.map((nav, index) => {
            return <NavItem key={index}>{nav}</NavItem>;
          })}
        </NavList>
      </NavLeft>
      <NavRight>
        <Button clickFunc={() => setCartIsActivated(!cartIsActivated)}>
          <CartIcon />
          <CartQty>1</CartQty>
        </Button>
        <Avatar src={AvatarSrc} />
        {cartIsActivated && (
          <Cart mouseLeaveHandler={() => setCartIsActivated(false)} />
        )}
      </NavRight>
    </NavbarContainer>
  );
};

export default Navbar;

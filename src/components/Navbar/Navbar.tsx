import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/utils";

// components
import Avatar from "../Avatar";
import Cart from "../../components/Cart";
import MobileNav from "../MobileNav";
import Button from "../UI/Button";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// assets
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/icon-menu.svg";
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
import { size } from "../../styles/breakpoints";

// constants
import { NAV_ITEMS } from "../../constants/nav-item.constants";

const Navbar = () => {
  const [cartIsActivated, setCartIsActivated] = useState(false);
  const [mobileNavIsActivated, setMobileNavIsActivated] = useState(false);
  const { windowWidth } = useWindowDimensions();
  const { cartList } = useAppSelector((state) => state.cart);
  const isInMobile = windowWidth <= +size.md.split("px")[0];

  useEffect(() => {
    if (!isInMobile && mobileNavIsActivated) {
      setMobileNavIsActivated(false);
    }
  }, [isInMobile]);

  return (
    <NavbarContainer>
      {mobileNavIsActivated && (
        <MobileNav
          navItems={NAV_ITEMS}
          onToggle={() => setMobileNavIsActivated((prev) => !prev)}
        />
      )}
      <NavLeft>
        {isInMobile && (
          <Button
            shouldHoverEffect={false}
            clickFunc={() => setMobileNavIsActivated(true)}
          >
            <MenuIcon />
          </Button>
        )}
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
          <CartQty>{cartList.length}</CartQty>
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

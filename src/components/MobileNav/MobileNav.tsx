// components
import Modal from "../UI/Modal";
import Button from "../UI/Button";

// assets
import { ReactComponent as CloseIcon } from "../../assets/icons/icon-close.svg";

// styles
import { Container, Nav, NavList } from "./MobileNav.style";

interface Props {
  navItems: string[];
  onToggle: () => void;
}

const MobileNav = ({ navItems, onToggle }: Props) => {
  return (
    <Modal align="flex-start" center={false}>
      <Container>
        <Button clickFunc={onToggle} shouldHoverEffect={false}>
          <CloseIcon />
        </Button>
        <NavList>
          {navItems.map((nav, index) => {
            return <Nav key={index}>{nav}</Nav>;
          })}
        </NavList>
      </Container>
    </Modal>
  );
};

export default MobileNav;

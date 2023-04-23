import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const NavbarContainer = styled.nav`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorderBottom};

  @media ${device.md} {
    padding: 24px 16px;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  h1 {
    cursor: pointer;
  }

  @media ${device.md} {
    gap: 24px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  svg {
    cursor: pointer;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  @media ${device.md} {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  padding: 30px 12px;
  color: ${({ theme }) => theme.colors.normalText};
  transition: color 0.2s ease;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    &:after {
      height: 3px;
    }
  }
`;

export const CartQty = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
  border-radius: 8px;
  padding: 2px;
  font-size: 10px;
`;

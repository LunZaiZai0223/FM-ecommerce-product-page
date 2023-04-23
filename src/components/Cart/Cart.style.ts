import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const CartContainer = styled.div`
  z-index: 999;
  position: absolute;
  bottom: -250%;
  right: 16px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 15px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  @media ${device.md} {
    left: 16px;
    padding: 24px;
  }
`;

export const CartList = styled.ul`
  margin-top: 16px;

  @media ${device.md} {
    margin-top: 24px;
  }
`;

export const CartItem = styled.li`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const CartThumbnail = styled.div`
  width: 50px;
  border-radius: 5px;
  overflow: hidden;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CartHeader = styled.h4`
  font-weight: 700;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorderBottom};

  @media ${device.md} {
    padding-bottom: 24px;
  }
`;

export const CartActionWrapper = styled.div`
  margin-top: 20px;
`;

export const ProductText = styled.span`
  color: ${({ theme }) => theme.colors.normalText};
`;

export const ProductStrongText = styled(ProductText)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`;

import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const ProductImgList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 24px;
  gap: 24px;

  @media ${device.md} {
    display: none;
  }
`;

export const ProductImgWrapper = styled.div<{
  widthBorder?: boolean;
}>`
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 10px;
    border: ${(props) =>
      props.widthBorder ? `3px solid ${props.theme.colors.primary}` : "unset"};
  }

  @media ${device.md} {
    display: none;
  }
`;

export const ProductImgItem = styled.li<{ isActivated?: boolean }>`
  transition: opacity 0.2s ease;
  cursor: pointer;
  opacity: ${({ isActivated }) => (isActivated ? 0.4 : "unset")};

  &:hover {
    opacity: 0.4;
  }
`;

export const ControllerBtn = styled.button<{ direction: "NEXT" | "PREV" }>`
  position: absolute;
  top: 50%;
  right: ${({ direction }) => (direction === "NEXT" ? "-5%" : "unset")};
  left: ${({ direction }) => (direction === "PREV" ? "-5%" : "unset")};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

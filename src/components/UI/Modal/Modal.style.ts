import styled from "styled-components";
import { BackdropProps } from "./Modal";

export const BackdropStyle = styled.div<BackdropProps>`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.lightBoxBackground};
  z-index: 999;
  display: flex;
  align-items: ${({ center }) => (center ? "center" : "auto")};
  justify-content: ${({ align }) => (align ? align : "center")};
`;

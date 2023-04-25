import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SlideContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: none;

  @media ${device.md} {
    display: block;
  }
`;

export const SlideWrapper = styled.div<{ activatedIndex: number }>`
  white-space: nowrap;
  transform: translate3d(
    ${({ activatedIndex }) => `-${activatedIndex * 100}%, 0, 0`}
  );
  transition: transform 0.5s ease;
`;

export const Slide = styled.div`
  display: inline-block;
`;

export const Action = styled.button<{ direction: "PREV" | "NEXT" }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => `${direction === "PREV" ? "left" : "right"}: 5%}`};
  border: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 999;
`;

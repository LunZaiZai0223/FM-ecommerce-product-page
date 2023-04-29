import styled from "styled-components";
import { Props } from "./Button";

export const BasicButton = styled.button<Props>`
  padding: 6px;
  position: relative;

  &:hover {
    background-color: ${({ theme, shouldHoverEffect }) =>
      shouldHoverEffect ? theme.colors.secondary : "transparent"};
    border-radius: 50%;
  }

  &:disabled {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const FilledButton = styled(BasicButton)`
  background-color: ${(props) =>
    props.fillType
      ? props.theme.colors[props.fillType as string]
      : "transparent"};
  border-radius: 8px;
  padding: 16px;
  transition: background-color 0.2s ease;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
  }
`;

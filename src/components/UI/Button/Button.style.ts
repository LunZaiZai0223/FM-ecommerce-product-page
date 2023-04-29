import styled from "styled-components";
import { Props } from "./Button";

export const BasicButton = styled.button<Props>`
  padding: 6px;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ disabled }) => disabled && "background-color: unset;"} }

  &:hover {
    ${({ shouldHoverEffect, theme, disabled }) =>
      shouldHoverEffect &&
      !disabled &&
      `background-color: ${theme.colors.secondary};`}
    border-radius: 50%;
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

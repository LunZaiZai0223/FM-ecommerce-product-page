import styled from "styled-components";

export const AvatarStyle = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;

  &:after {
    position: absolute;
    inset: 0;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    overflow: hidden;
  }

  &:hover {
    &:after {
      content: "";
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  width: 40vw;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
`;

export const Nav = styled.li`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

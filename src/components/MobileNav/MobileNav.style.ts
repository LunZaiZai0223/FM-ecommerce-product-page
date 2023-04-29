import styled, { css } from "styled-components";

// 這個方法可以建立原子性的 style -> 建立成一個常數，之後直接在不同的 styled-component 內使用
// 也可以透過定義型別，為 styled-component 增加彈性
const TestCss = css<{ backgroundColor?: string }>`
  padding: 24px;
  width: 40vw;
  background-color: ${({ backgroundColor }) =>
    backgroundColor as string | "auto"};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  // 引用的方式
  ${TestCss}//padding: 24px;
  //width: 40vw;
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

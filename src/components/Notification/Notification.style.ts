import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
	0% {
		opacity: 0;
		bottom: 0;
	}
	100% {
		opacity: 1;
    bottom: 5%;
	}
`;

export const Container = styled.div`
  position: fixed;
  right: 50%;
  bottom: 5%;
  min-width: 250px;
  text-align: center;
  transform: translateX(50%);
  padding: 16px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  animation: ${fadeIn} 0.5s linear;
`;

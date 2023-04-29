import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  width: 46%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const ProductInfoCol = styled(Col)`
  @media ${device.md} {
    padding: 0 24px;
    margin: 30px 0 0;
  }
`;

export const ProductImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

export const ProductContainer = styled.div`
  max-width: 1120px;
  margin: 40px auto;
  padding: 0 40px;

  @media ${device.md} {
    width: 100%;
    margin: 0 0 40px;
    padding: 0;
  }
`;

export const ProductDetailWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;

  .action-header {
    text-align: end;
    margin-bottom: 14px;

    &:hover {
      svg {
        path {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

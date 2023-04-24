import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const CompanyName = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 24px;
`;

export const ProductName = styled.h3`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 36px;
`;

export const ProductDescription = styled.p`
  line-height: 1.5;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.normalText};
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 24px;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PriceInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const NewPrice = styled.span`
  font-size: 24px;
  font-weight: 800;
`;

export const DiscountWrapper = styled.div`
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
  }
`;

export const OriginalPrice = styled.span`
  color: ${({ theme }) => theme.colors.lightenText};
  text-decoration: line-through;
  font-weight: 800;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 30px;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(1) {
      background-color: ${({ theme }) => theme.colors.controllerBackground};
      border-radius: 8px;
      padding: 8px;
    }
  }

  > div:nth-child(2) {
    flex: 2;
  }

  @media ${device.md} {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;

export const ActionController = styled.span<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.lightenText : theme.colors.primary};
  font-weight: 800;
  font-size: 20px;
`;

export const NumberText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 700;
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.white};

  svg {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

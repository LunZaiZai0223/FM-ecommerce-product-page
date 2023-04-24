// hooks
import useProductQty from "../../hooks/useProductQty";

// components
import Button from "../../components/UI/Button";

// assets
import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";

// styles
import {
  CompanyName,
  ProductName,
  ProductDescription,
  ProductPriceContainer,
  PriceInfoWrapper,
  NewPrice,
  DiscountWrapper,
  OriginalPrice,
  ActionContainer,
  ActionController,
  NumberText,
  ButtonContent,
} from "./ProductInfo.style";

const ProductInfo = () => {
  const { qty, handleChangeQty } = useProductQty();

  console.log(handleChangeQty);

  return (
    <>
      <CompanyName>Sneaker Company</CompanyName>

      <ProductName>Fall Limited Edition Sneakers</ProductName>

      <ProductDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </ProductDescription>
      <ProductPriceContainer className="price-container">
        <PriceInfoWrapper>
          <NewPrice>$125.00</NewPrice>
          <DiscountWrapper>
            <span>50%</span>
          </DiscountWrapper>
        </PriceInfoWrapper>
        <OriginalPrice>$250.00</OriginalPrice>
      </ProductPriceContainer>
      <ActionContainer className="action-wrapper">
        <div>
          <Button
            clickFunc={() => handleChangeQty("decrease")}
            disabled={qty - 1 <= 0}
          >
            <ActionController disabled={qty - 1 <= 0}>-</ActionController>
          </Button>
          <NumberText>{qty}</NumberText>
          <Button clickFunc={() => handleChangeQty("increase")}>
            <ActionController>+</ActionController>
          </Button>
        </div>
        <div>
          <Button fillType="primary">
            <ButtonContent>
              <CartIcon />
              Add to cart
            </ButtonContent>
          </Button>
        </div>
      </ActionContainer>
    </>
  );
};

export default ProductInfo;

import { useAppDispatch, useAppSelector } from "../../store/utils";
import { addCart } from "../../store/cartSlice";
import { activateNotification } from "../../store/notificationSlice";

// hooks
import useProductQty from "../../hooks/useProductQty";

// components
import Button from "../../components/UI/Button";
import Notification from "../../components/Notification";

// assets
import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";
import ProductThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";

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

// interface
interface ProductInfoContent {
  companyName: string;
  productName: string;
  description: string;
  price: number;
  discount: number;
  originalPrice: number;
  productThumbnail: string;
}

const PRODUCT_INFO_CONTENT: ProductInfoContent = {
  companyName: "Sneaker Company",
  productName: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
  discount: 50,
  originalPrice: 250,
  productThumbnail: ProductThumbnail,
};

const ProductInfo = () => {
  const dispatch = useAppDispatch();
  const { isActivated } = useAppSelector((state) => state.notification);
  const { qty, handleChangeQty } = useProductQty();

  const handleCheckout = () => {
    dispatch(
      addCart({
        productName: PRODUCT_INFO_CONTENT.productName,
        productThumbnail: PRODUCT_INFO_CONTENT.productThumbnail,
        productPrice: PRODUCT_INFO_CONTENT.price,
        productQty: qty,
        id: Date.now(),
      })
    );
    handleChangeQty("init");
    dispatch(activateNotification({ type: "ADD_CART" }));
  };

  return (
    <>
      <CompanyName>{PRODUCT_INFO_CONTENT.companyName}</CompanyName>

      <ProductName>{PRODUCT_INFO_CONTENT.productName}</ProductName>

      <ProductDescription>
        {PRODUCT_INFO_CONTENT.description}
      </ProductDescription>
      <ProductPriceContainer className="price-container">
        <PriceInfoWrapper>
          <NewPrice>${PRODUCT_INFO_CONTENT.price.toFixed(2)}</NewPrice>
          <DiscountWrapper>
            <span>%{PRODUCT_INFO_CONTENT.discount}</span>
          </DiscountWrapper>
        </PriceInfoWrapper>
        <OriginalPrice>${PRODUCT_INFO_CONTENT.originalPrice}</OriginalPrice>
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
          <Button fillType="primary" clickFunc={handleCheckout}>
            <ButtonContent>
              <CartIcon />
              Add to cart
            </ButtonContent>
          </Button>
        </div>
      </ActionContainer>
      {isActivated && <Notification />}
    </>
  );
};

export default ProductInfo;

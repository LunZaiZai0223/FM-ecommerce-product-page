// assets
import ProductThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/icon-delete.svg";

// components
import Button from "../../components/UI/Button";

// styles
import {
  CartContainer,
  CartContent,
  CartHeader,
  CartList,
  CartItem,
  CartThumbnail,
  CartActionWrapper,
  ProductText,
  ProductStrongText,
} from "./Cart.style";

interface Props {
  mouseLeaveHandler: () => void;
}

const Cart = ({ mouseLeaveHandler }: Props) => {
  return (
    <CartContainer onMouseLeave={mouseLeaveHandler}>
      <CartHeader>Cart</CartHeader>
      <CartList>
        <CartItem>
          <CartThumbnail>
            <img src={ProductThumbnail} alt="product thumbnail" />
          </CartThumbnail>
          <CartContent>
            <ProductText>Fall Limited Edition Sneakers</ProductText>
            <ProductText>
              $125.00 x 3 <ProductStrongText>$375.00</ProductStrongText>
            </ProductText>
          </CartContent>
          <Button>
            <DeleteIcon />
          </Button>
        </CartItem>
      </CartList>
      <CartActionWrapper>
        <Button fillType="primary">Checkout</Button>
      </CartActionWrapper>
    </CartContainer>
  );
};

export default Cart;

// store
import { useAppSelector, useAppDispatch } from "../../store/utils";
import { removeCart, checkoutCart } from "../../store/cartSlice";
import { activateNotification } from "../../store/notificationSlice";

// assets
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
  EmptyCartContainer,
  EmptyCartMessage,
} from "./Cart.style";

// interfaces
import { CartItem as CartItemInterface } from "../../store/cartSlice";
interface Props {
  mouseLeaveHandler: () => void;
}

const Cart = ({ mouseLeaveHandler }: Props) => {
  const { cartList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClickRemove = (cart: CartItemInterface) => () => {
    dispatch(activateNotification({ type: "REMOVE_CART" }));
    dispatch(removeCart(cart));
  };

  const handleClickCheckout = () => {
    dispatch(checkoutCart());
    dispatch(activateNotification({ type: "CHECKOUT" }));
  };

  const renderCartContent = () => {
    if (cartList.length) {
      return (
        <>
          <CartList>
            {cartList.map((cart) => {
              const {
                id,
                productName,
                productPrice,
                productQty,
                productThumbnail,
              } = cart;
              return (
                <CartItem key={id}>
                  <CartThumbnail>
                    <img src={productThumbnail} alt="product thumbnail" />
                  </CartThumbnail>
                  <CartContent>
                    <ProductText>{productName}</ProductText>
                    <ProductText>
                      ${productPrice} x {productQty}{" "}
                      <ProductStrongText>
                        ${(productPrice * productQty).toFixed(2)}
                      </ProductStrongText>
                    </ProductText>
                  </CartContent>
                  <Button clickFunc={handleClickRemove(cart)}>
                    <DeleteIcon />
                  </Button>
                </CartItem>
              );
            })}
          </CartList>
          <CartActionWrapper>
            <Button fillType="primary" clickFunc={handleClickCheckout}>
              Checkout
            </Button>
          </CartActionWrapper>
        </>
      );
    } else {
      return (
        <EmptyCartContainer>
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        </EmptyCartContainer>
      );
    }
  };
  return (
    <CartContainer onMouseLeave={mouseLeaveHandler}>
      <CartHeader>Cart</CartHeader>
      {renderCartContent()}
    </CartContainer>
  );
};

export default Cart;

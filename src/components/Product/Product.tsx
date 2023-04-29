import { useState, useEffect } from "react";

// assets
import { ReactComponent as CloseIcon } from "../../assets/icons/icon-close.svg";

// components
import ProductPreview from "../ProductPreview";
import ProductInfo from "../ProductInfo";
import Modal from "../UI/Modal";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// styles
import {
  Row,
  Col,
  ProductInfoCol,
  ProductContainer,
  ProductDetailWrapper,
} from "./Product.style";
import { size } from "../../styles/breakpoints";

const Product = () => {
  const [modalIsActivated, setModalIsActivated] = useState(false);
  const { windowWidth } = useWindowDimensions();

  const isInMobile = windowWidth <= +size.md.split("px")[0];

  useEffect(() => {
    if (isInMobile) {
      setModalIsActivated(false);
    }
  }, [isInMobile]);

  return (
    <ProductContainer className="product">
      {modalIsActivated && (
        <Modal center>
          <ProductDetailWrapper className="detail-wrapper">
            <div className="action-header">
              <button onClick={() => setModalIsActivated(false)}>
                <CloseIcon />
              </button>
            </div>
            <ProductPreview shouldUseArrow />
          </ProductDetailWrapper>
        </Modal>
      )}
      <Row>
        <Col>
          <ProductPreview
            toggleDetail={() => {
              if (!isInMobile) {
                return setModalIsActivated(true);
              }
            }}
          />
        </Col>
        <ProductInfoCol>
          <ProductInfo />
        </ProductInfoCol>
      </Row>
    </ProductContainer>
  );
};

export default Product;

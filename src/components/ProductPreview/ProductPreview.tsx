import { useState } from "react";

// assets
import ProductImg1 from "../../assets/images/image-product-1.jpg";
import ProductImg2 from "../../assets/images/image-product-2.jpg";
import ProductImg3 from "../../assets/images/image-product-3.jpg";
import ProductImg4 from "../../assets/images/image-product-4.jpg";
import { ReactComponent as ArrowNext } from "../../assets/icons/icon-next.svg";
import { ReactComponent as ArrowPrev } from "../../assets/icons/icon-previous.svg";

// components
import Modal from "../UI/Modal";
import ProductSlider from "../ProductSlider";

// styles
import {
  ProductImgList,
  ProductImgWrapper,
  ProductImgItem,
  ControllerBtn,
} from "./ProductPreview.style";

// constants
const IMG_LIST = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];

interface Props {
  shouldUseArrow?: boolean;
  toggleDetail?: () => void;
}

const ProductPreview = ({ shouldUseArrow, toggleDetail }: Props) => {
  const [activatedIndex, setActivatedIndex] = useState(0);
  const handleChangeIndex = (targetIndex: number) => () => {
    setActivatedIndex(targetIndex);
  };

  const handleClickArrow = (direction: "NEXT" | "PREV") => () => {
    switch (direction) {
      case "NEXT":
        setActivatedIndex(
          activatedIndex + 1 > IMG_LIST.length - 1 ? 0 : activatedIndex + 1
        );
        break;

      case "PREV":
        setActivatedIndex(
          activatedIndex - 1 >= 0 ? activatedIndex - 1 : IMG_LIST.length - 1
        );
        break;
    }
  };

  return (
    <>
      <ProductImgWrapper onClick={toggleDetail} className="product-img-wrapper">
        {shouldUseArrow && (
          <ControllerBtn direction={"PREV"} onClick={handleClickArrow("PREV")}>
            <ArrowPrev />
          </ControllerBtn>
        )}
        <img src={IMG_LIST[activatedIndex]} alt="current product" />
        {shouldUseArrow && (
          <ControllerBtn direction={"NEXT"} onClick={handleClickArrow("NEXT")}>
            <ArrowNext />
          </ControllerBtn>
        )}
      </ProductImgWrapper>
      <ProductImgList>
        {IMG_LIST.map((item, index) => {
          return (
            <ProductImgItem
              key={index}
              onClick={handleChangeIndex(index)}
              isActivated={index === activatedIndex}
            >
              <ProductImgWrapper widthBorder={index === activatedIndex}>
                <img src={item} alt="product" />
              </ProductImgWrapper>
            </ProductImgItem>
          );
        })}
      </ProductImgList>
      <ProductSlider />
    </>
  );
};

export default ProductPreview;

import { useState } from "react";

// assets
import { ReactComponent as ArrowNext } from "../../assets/icons/icon-next.svg";
import { ReactComponent as ArrowPrev } from "../../assets/icons/icon-previous.svg";

// components
import ProductSlider from "../ProductSlider";

// styles
import {
  ProductImgList,
  ProductImgWrapper,
  ProductImgItem,
  ControllerBtn,
} from "./ProductPreview.style";

// constants
import { PRODUCT_IMG_LIST } from "../../constants/img-list.constant";

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
          activatedIndex + 1 > PRODUCT_IMG_LIST.length - 1
            ? 0
            : activatedIndex + 1
        );
        break;

      case "PREV":
        setActivatedIndex(
          activatedIndex - 1 >= 0
            ? activatedIndex - 1
            : PRODUCT_IMG_LIST.length - 1
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
        <img src={PRODUCT_IMG_LIST[activatedIndex]} alt="current product" />
        {shouldUseArrow && (
          <ControllerBtn direction={"NEXT"} onClick={handleClickArrow("NEXT")}>
            <ArrowNext />
          </ControllerBtn>
        )}
      </ProductImgWrapper>
      <ProductImgList>
        {PRODUCT_IMG_LIST.map((item, index) => {
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

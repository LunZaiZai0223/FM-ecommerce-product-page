import { useState, useRef, useEffect } from "react";

// assets
import { ReactComponent as ArrowNext } from "../../assets/icons/icon-next.svg";
import { ReactComponent as ArrowPrev } from "../../assets/icons/icon-previous.svg";

// styles
import {
  SlideContainer,
  SlideWrapper,
  Slide,
  Action,
} from "./ProductSlider.style";

// constants
import { PRODUCT_IMG_LIST } from "../../constants/img-list.constant";

const ProductSlider = () => {
  const [activatedIndex, setActivatedIndex] = useState<number>(0);
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const handleClickMoveSlide = (direction: "NEXT" | "PREV") => () => {
    switch (direction) {
      case "NEXT":
        setActivatedIndex((prev) => {
          if (prev + 1 < PRODUCT_IMG_LIST.length) {
            return prev + 1;
          } else {
            return 0;
          }
        });
        break;

      case "PREV":
        setActivatedIndex((prev) => {
          if (prev - 1 >= 0) {
            return prev - 1;
          } else {
            return PRODUCT_IMG_LIST.length - 1;
          }
        });
        break;
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleClickMoveSlide("NEXT")();
    }, 5000);

    return () => {
      clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);
    };
  }, [activatedIndex]);

  return (
    <SlideContainer className="slider-container">
      <Action direction="PREV" onClick={handleClickMoveSlide("PREV")}>
        <ArrowPrev />
      </Action>
      <SlideWrapper activatedIndex={activatedIndex}>
        {PRODUCT_IMG_LIST.map((img, index) => {
          return (
            <Slide key={index}>
              <img src={img} alt="product" />
            </Slide>
          );
        })}
      </SlideWrapper>
      <Action direction="NEXT" onClick={handleClickMoveSlide("NEXT")}>
        <ArrowNext />
      </Action>
    </SlideContainer>
  );
};

export default ProductSlider;

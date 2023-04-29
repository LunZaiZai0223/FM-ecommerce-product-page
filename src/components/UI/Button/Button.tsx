import React from "react";

// styles
import { BasicButton, FilledButton } from "./Button.style";

export interface Props {
  children: React.ReactNode;
  fillType?: "primary";
  shouldHoverEffect?: boolean;
  clickFunc?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  fillType,
  shouldHoverEffect = true,
  clickFunc,
  disabled,
}: Props) => {
  const renderBtn = () => {
    switch (fillType) {
      case "primary":
        return (
          <FilledButton
            fillType={fillType}
            {...(clickFunc && { onClick: clickFunc })}
          >
            {children}
          </FilledButton>
        );

      default:
        return (
          <BasicButton
            shouldHoverEffect={shouldHoverEffect}
            {...(clickFunc && { onClick: clickFunc })}
            disabled={disabled}
          >
            {children}
          </BasicButton>
        );
    }
  };
  return renderBtn();
};

export default Button;

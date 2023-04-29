import React from "react";
import ReactDOM from "react-dom";

// styles
import { BackdropStyle } from "./Modal.style";

export interface BackdropProps {
  children: React.ReactNode;
  center?: boolean;
  align?: string;
}

interface ModalProps {
  children: React.ReactNode;
  center?: boolean;
  align?: string;
}

const targetEle = document.querySelector("#backdrop") as HTMLDivElement;

const Backdrop = ({ children, align, center }: BackdropProps) => {
  return (
    <BackdropStyle center={center} align={align}>
      {children}
    </BackdropStyle>
  );
};

const Modal = ({ children, align = "", center }: ModalProps) => {
  return ReactDOM.createPortal(
    <Backdrop center={center} align={align}>
      {children}
    </Backdrop>,
    targetEle
  );
};

export default Modal;

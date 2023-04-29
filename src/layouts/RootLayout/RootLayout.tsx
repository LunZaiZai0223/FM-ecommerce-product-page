import React from "react";

// components
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";

// style
import { RootLayoutStyle } from "./Rootlayout.style";

const RootLayout = () => {
  return (
    <RootLayoutStyle>
      <Navbar />
      <Product />
    </RootLayoutStyle>
  );
};

export default RootLayout;

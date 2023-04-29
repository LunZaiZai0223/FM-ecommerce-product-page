import { useState } from "react";

const useProductQty = () => {
  const [qty, setQty] = useState(1);
  const handleChangeQty = (type: "increase" | "decrease" | "init") => {
    switch (type) {
      case "increase":
        setQty((prevQty) => prevQty + 1);
        break;

      case "decrease":
        setQty((prevQty) => prevQty - 1);
        break;

      case "init":
        setQty(1);
        break;
    }
  };

  return {
    qty,
    handleChangeQty,
  };
};

export default useProductQty;

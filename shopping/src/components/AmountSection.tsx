import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../redux/hooks";
import { IProduct, addToCart } from "../redux/feature/productSlice";

interface IAmountSection {
  id: number;
  product: IProduct;
}

const AmountSection: React.FC<IAmountSection> = ({ id, product }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();

  const increase = () => {
    setAmount((oldState) => oldState + 1);
  };
  const decrease = () => {
    setAmount((oldState) => {
      let newAmount = oldState - 1;
      if (newAmount === 0) {
        return 1;
      }
      return newAmount;
    });
  };

  return (
    <div className='amount-section'>
      <div className='amount'>
        <button type='button'>
          <AiOutlineMinus onClick={decrease} />
        </button>
        {amount}
        <button type='button' onClick={increase}>
          <AiOutlinePlus />
        </button>
      </div>
      <button
        type='button'
        className='add-to-cart'
        onClick={() => dispatch(addToCart({ id, amount, product }))}
      >
        <FaShoppingCart />
        Add to cart
      </button>
    </div>
  );
};
export default AmountSection;

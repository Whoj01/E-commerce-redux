// Styles
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item";
import * as Styles from "./styles";

//redux
import { useSelector } from "react-redux";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer)

  const totalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products && products.map(product => (
          <CartItem product={product}/>
        ))}

        <Styles.CartTotal>
         Total: R${totalPrice}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;

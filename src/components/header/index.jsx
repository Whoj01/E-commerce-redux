import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Types
import UserActionTypes from '../../redux/user/action-types'
import {loginUser, logoutUser} from '../../redux/user/actions'
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)

  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()

  

  console.log({ currentUser })

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  function handleLoginClick() { 
    dispatch(loginUser({name: "josue", email: "josue.email"}))
  }

  function handleLogoutClick() {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? 
          <div onClick={handleLogoutClick}>Sair</div> : 
          <div onClick={handleLoginClick}>Login</div>
        }
        <div onClick={handleCartClick}>Carrinho  {productsCount > 0 ? `- (${productsCount})` : ''}</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;

import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import { addProduct } from "../../redux/cart/slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  function handleAddToCartClick() {
    dispatch(addProduct(product))
  }
  
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;

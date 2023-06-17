
import '../product-card/product-card.scss';
import ButtonCustom from "../ButtonCustom/button-custom.component";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {
    const { id, name, price, image } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div key={id} className='product-card-container'>
            <img src={image} alt={`${name}`}></img>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <ButtonCustom className='btn-outline-primary' onClick={addProductToCart}>Add to cart</ButtonCustom>
        </div>
    );
}

export default ProductCard;


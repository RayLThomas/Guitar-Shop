
import '../product-card/product-card.scss';
import ButtonCustom from "../ButtonCustom/button-custom.component";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, name, price, image } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div key={id} className='product-card-container col-sm-12 col-md-4'>
            <Link to={`/product/${product.id}`}>
                <img src={image} alt={`${name}`} loading="lazy"></img>
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
            </Link>
            <ButtonCustom className='btn-primary' onClick={addProductToCart}>Add to cart</ButtonCustom>
        </div>
    );
}

export default ProductCard;


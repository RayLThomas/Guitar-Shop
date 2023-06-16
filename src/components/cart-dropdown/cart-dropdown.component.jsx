import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.scss';
import Button from '../ButtonCustom/button-custom.component';
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
      };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>            
            <Button className='btn-primary' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown;
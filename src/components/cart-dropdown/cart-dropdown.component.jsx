import { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.scss';
import Button from '../ButtonCustom/button-custom.component';
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const node = useRef();

    const handleClickOutside = (e) => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click 
        setIsCartOpen(false);
    };

    useEffect(() => {
        if (isCartOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container' ref={node}>
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

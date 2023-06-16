import './cart-dropdown.scss';
import Button from '../ButtonCustom/button-custom.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>            
            <Button className='btn-primary'>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown;
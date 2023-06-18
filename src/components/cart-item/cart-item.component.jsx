import './cart-item.scss';

const CartItem = ({cartItem}) => {
    const { name, image, price, quantity } = cartItem;
    <img src={image} alt={`${name}`}></img>
    return (
        <div className='cart-item-container'>
            <img src={image} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} X ${price}
                </span>
            </div>
        </div>
    );
}

export default CartItem;
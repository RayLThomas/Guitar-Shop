import './Nav.component.scss';
import '../ButtonCustom/button-custom.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import Logo from '../../assets/Logo.png';

const Nav = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <nav className="container">
            <div className='row col-12 m-0 p-0'>
                { currentUser ?
                    (
                        <p className='text-end m-0 p-0'>{currentUser.displayName}</p>
                    ) : (
                        null
                    )
                }
            </div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href='/'>
                    <img className="img-fluid logo" src={Logo} alt="logo" />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <Link to="/">
                        <li className='px-2'>Home</li>
                    </Link>
                    <Link to="/acoustics">
                        <li className='px-2'>Acoustic</li>
                    </Link>
                    <Link to="/electrics">
                        <li className='px-2'>Electric</li>
                    </Link>
                    <Link to="/locations">
                        <li className='px-2'>Locations</li>
                    </Link>
                </ul>

                
                    {currentUser ? (
                        <div className="col-md-3 col-lg-3 d-flex justify-content-end">
                            <button onClick={signOutUser} type="button" className="btn btn-outline-primary me-2">Sign out</button>
                        </div>
                    ) : (
                        <div className="col-md-3 col-lg-3 d-flex text-end">
                            <button onClick={() => navigate('/login')} type="button" className="btn btn-outline-primary me-2">Login</button>
                            <button onClick={() => navigate('/sign-up')} type="button" className="btn btn-primary">Sign up</button>
                            <CartIcon />
                        </div>
                    )}
            </header>            
            {isCartOpen && <CartDropdown />}
        </nav>
    )
}

export default Nav;
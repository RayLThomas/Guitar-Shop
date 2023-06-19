import './Nav.component.scss';
import '../ButtonCustom/button-custom.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import Logo from '../../assets/Logo.png';

const Nav = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    const { setCurrentUser } = useContext(UserContext);
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user, { displayName: user.displayName });
        setCurrentUser(user);
    }

    const [isScrolled, setIsScrolled] = useState(false);

    const checkScrollTop = useCallback(() => {
        if (!isScrolled && window.pageYOffset > 125) {
            setIsScrolled(true);
        } else if (isScrolled && window.pageYOffset <= 125) {
            setIsScrolled(false);
        }
    }, [isScrolled, setIsScrolled]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
    }, [checkScrollTop]);

    // makes page scroll to top if Nav is present
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <nav className="nav-container container-fluid sticky-top">
            <div className='row col-12 m-0 p-0'>
                { currentUser ?
                    (
                        <p className='text-end m-0 p-0'>{currentUser.displayName}</p>
                    ) : (
                        null
                    )
                }
            </div>
            <header id='header' className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 ${isScrolled ? 'navbar-shrink' : ''}`}>
                <a className='logo-link' href='/'>
                    <img className={`img-fluid logo ${isScrolled ? 'shrink-img' : ''}`} src={Logo} alt="logo" />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <Link to="/">
                        <li className='py-2 px-3 fs-5'>Home</li>
                    </Link>
                    <Link to="/shop/acoustics">
                        <li className='py-2 px-3 fs-5'>Acoustic</li>
                    </Link>
                    <Link to="/shop/electrics">
                        <li className='py-2 px-3 fs-5'>Electric</li>
                    </Link>
{/*
                    <Link to="/locations">
                        <li className='py-2 px-3 fs-5'>Locations</li>
                    </Link>
*/}
                </ul>

                
                    {currentUser ? (
                        <div className="d-flex justify-content-end">
                            <button onClick={signOutUser} type="button" className="btn btn-outline-primary me-2">Sign out</button>
                            <CartIcon />
                        </div>
                    ) : (
                        <div className="d-flex text-end justify-content-end">
                            <button onClick={signInWithGoogle} type="button" className="btn btn-outline-primary me-2">Login</button>
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
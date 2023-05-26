import './Nav.component.scss';
import '../ButtonCustom/button-custom.component';
import ButtonCustom from '../ButtonCustom/button-custom.component';
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();

    return (
        <nav class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <img className="img-fluid" src="https://placehold.co/100x100" alt="logo" />

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
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

                <div class="col-md-3 col-lg-2 text-end">
                    <button onClick={() => navigate('/login')} type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button onClick={() => navigate('/sign-up')} type="button" class="btn btn-primary">Sign-up</button>
                </div>
            </header>
        </nav>
    )
}

export default Nav;
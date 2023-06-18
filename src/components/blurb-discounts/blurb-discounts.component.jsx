import Button from '../ButtonCustom/button-custom.component';
import './blurb-discounts.styles.scss';
import Logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const BlurbDiscounts = () => {
    const navigate = useNavigate();

    return(
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4 logo" src={Logo} alt="the company logo"/>
            <h1 className="display-5 fw-bold text-body-emphasis">Strum Your Way to Greatness</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Experience the thrill of playing your dream guitar from our extensive collection, carefully curated for music lovers of all skill levels. Whether you're an amateur, a seasoned pro, or somewhere in between, we've got the perfect instrument to match your vibe.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Button onClick={() => navigate('/shop')} className="btn-primary">Shop Now</Button>
                    <Button onClick={() => navigate('/locations')} className="btn-outline-secondary">Location Finder</Button>
                </div>
            </div>
      </div>
    );
}

export default BlurbDiscounts
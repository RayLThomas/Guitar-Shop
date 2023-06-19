import ButtonCustom from "../ButtonCustom/button-custom.component";
import './hero.styles.scss';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="hero fadeIn d-flex flex-column p-4 mt-4 justify-content-end">
            <h1 className="order-2">Find your tone.</h1>
            <div className="heroContent order-3">
                <p className="fs-3">
                Dive into our extensive collection of top-tier guitars,<br />tailored for every music enthusiast.
                </p>
                <ButtonCustom onClick={() => navigate('/shop')} className="btn-primary">NewArrivals</ButtonCustom>
            </div>
        </div>
    );
};

export default Hero;
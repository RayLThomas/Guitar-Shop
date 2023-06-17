import ButtonCustom from "../ButtonCustom/button-custom.component";
import './hero.styles.scss';

const Hero = () => {

    return (
        <div className="hero fadeIn d-flex flex-column p-4 justify-content-end">
            <h1 className="order-2">Find your tone.</h1>
            <div className="heroContent order-3">
                <p className="fs-3">
                Dive into our extensive collection of top-tier guitars,<br />tailored for every music enthusiast.
                </p>
                <ButtonCustom className="btn-primary">NewArrivals</ButtonCustom>
            </div>
        </div>
    );
};

export default Hero;
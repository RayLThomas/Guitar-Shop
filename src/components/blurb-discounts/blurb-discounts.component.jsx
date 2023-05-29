import Button from '../ButtonCustom/button-custom.component';
import './blurb-discounts.styles.scss';

const BlurbDiscounts = () => {
    return(
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://placehold.co/100x80" alt="" width="72" height="57" />
            <h1 className="display-5 fw-bold text-body-emphasis">Strum Your Way to Greatness</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Experience the thrill of playing your dream guitar from our extensive collection, carefully curated for music lovers of all skill levels. Whether you're an amateur, a seasoned pro, or somewhere in between, we've got the perfect instrument to match your vibe.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Button className="btn-primary">Shop Now</Button>
                    <Button className="btn-outline-secondary">Location Finder</Button>
                </div>
            </div>
      </div>
    );
}

export default BlurbDiscounts
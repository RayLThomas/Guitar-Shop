import { Link } from 'react-router-dom';
import './product-category-card.scss';
import { ProductContext } from '../../contexts/product.context';
import { useContext } from 'react';
import { Fragment } from 'react';

const ProductCategoryCard = ({product}) => {
    const { featured } = useContext(ProductContext);

    return (
        <div className="container py-2 bg-secondary col-sm-12 col-md-5 m-4 shadow rounded">
            {featured.length > 0 && (
                <Fragment>
                    <Link to={`/product/${product.id}`}>
                        <h3 className='fw-normal'>{product.name}</h3>
                        <img className="py-2 img-fluid product-image" src={product.image} alt="add the alt tag" loading="lazy"></img>
                    </Link>
                </Fragment>
            )}
        </div>
    )
}

export default ProductCategoryCard;

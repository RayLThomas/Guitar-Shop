import './product-category-card.scss';
import { ProductContext } from '../../contexts/product.context';
import { useContext } from 'react';

const ProductCategoryCard = () => {
    const products = useContext(ProductContext);
    console.log(products);
    
    return (
        <div className="container py-2 bg-secondary col-sm-12 col-md-6">
            <h3>Product Category Title</h3>
            <img className="py-2 img-fluid product-image" src='https://placehold.co/600x400' alt="add the alt tag"></img>
        </div>
    )
}

export default ProductCategoryCard;
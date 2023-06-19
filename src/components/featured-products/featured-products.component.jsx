import ProductCategoryCard from "../ProductCategoryCard/product-category-card.component";
import { ProductContext } from "../../contexts/product.context";
import { useContext } from "react";
import { Fragment } from "react";
import './featured-products.scss';


const FeaturedProducts = () => {
    const { featured } = useContext(ProductContext);

    return (
        <div className="container text-center">
            <h2 className='featured-text fs-1 fw-normal py-4 mt-5'>Featured Products</h2> 
            <Fragment>
                <div className="row d-flex justify-content-center">
                    <ProductCategoryCard product={featured[0]}/>
                    <ProductCategoryCard product={featured[1]}/>
                </div>
                <div className="row d-flex justify-content-center">
                    <ProductCategoryCard product={featured[2]}/>
                    <ProductCategoryCard product={featured[3]}/>
                </div>
            </Fragment>
        </div>
    );
};

export default FeaturedProducts;

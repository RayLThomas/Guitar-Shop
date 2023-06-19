import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from '../../components/product-card/product-card.component';
import './product-category-page.styles.scss'

const ProductCategoryPage = ({ category }) => {
    const productContext = useContext(ProductContext);
    const categoryData = productContext[category];

    return (
        <div className="custom-container fluid-container">
            <div className="row">
                {categoryData && categoryData.map((doc, index) => (
                    <ProductCard key={index} product={doc}/>
                ))}
            </div>
        </div>
    );
};

export default ProductCategoryPage;
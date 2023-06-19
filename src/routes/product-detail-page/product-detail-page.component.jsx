import { useParams } from 'react-router-dom';
import './product-detail-page.scss';
import { ProductContext } from '../../contexts/product.context';
import { useContext } from 'react';


const ProductDetailPage = () => {
    const { id } = useParams();
    const productContext = useContext(ProductContext);
    const allData = productContext.data;
    const product = allData.find((guitar) => guitar.id === Number(id));

    return product ? (
        <h1>{product.name} {product.id} {product.price}</h1>
    ) : (
        <h1>Product not found</h1>
    );
}

export default ProductDetailPage;
import { useParams } from 'react-router-dom';
import './product-detail-page.scss';
import { ProductContext } from '../../contexts/product.context';
import { useContext } from 'react';
import Nav from '../../components/Nav/Nav.component'
import { Fragment } from 'react';
import ButtonCustom from '../../components/ButtonCustom/button-custom.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';


const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const productContext = useContext(ProductContext);
    const allData = productContext.data;
    const product = allData.find((guitar) => guitar.id === Number(id));
    
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return product ? (
        <Fragment>
            <Nav />
            <div className='container py-5'>
                <div className='row g-0 shadow'>
                    <div className="col-sm-12 col-md-4">
                        <img className="img-fluid" src={product.image} alt={product.name} />  
                    </div>
                    <div className='col-sm-12 col-md-8 p-3' style={{backgroundColor: 'rgb(255, 242, 237)', zIndex: 1}}>
                        <h1 className='fs-1 fw-bold'>{product.name}</h1>      
                        <span className='fs-3 fw-semibold'>${product.price}</span>
                        <p className='fs-4 py-4'>{product.description}</p>  
                        <p className='fs-5'>{product.rating} / 5 of {product.numberOfReviews} <span className='text-decoration-underline'>reviews</span></p>  
                        <div className='row'>
                            <div className='col-12'>
                                <ButtonCustom className='btn-primary me-3' onClick={() => {goToCheckoutHandler(); addProductToCart()}}>Buy now</ButtonCustom>
                                <ButtonCustom className='btn-secondary' onClick={addProductToCart}>Add to cart</ButtonCustom>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </Fragment>
    ) : (
        <h1>Product not found</h1>
    );
}

export default ProductDetailPage;
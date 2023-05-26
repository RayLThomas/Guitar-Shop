import './product-card.scss';



const ProductCard = () => {
    const data = {
        imageLink: 'https://placehold.co/600x400'
    }

    return (
        <div className="container py-2 bg-secondary col-sm-12 col-md-6">
            <h3>Product Category Title</h3>
            <img className="py-2 img-fluid product-image" src={data.imageLink} alt="add the alt tag"></img>
        </div>
    )
}

export default ProductCard;
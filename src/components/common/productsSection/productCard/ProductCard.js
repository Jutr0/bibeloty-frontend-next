import './ProductCard.scss';
import Link from "next/link";
import AddToCartButton from "@/components/common/productsSection/productCard/AddToCartButton";
import placeholder from '@/public/images/placeholder4.webp'
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";

const ProductCard = ({product}) => {

    return <Link href={`/products/${product.id}`} className="product-card">
        <div className="image"
             style={{backgroundImage: `url(${product.main_image?.url || placeholder.src})`}}></div>
        <div className="info">
            <div className="description">
                <span className="name">{product.name}</span>
                <span className="price">{product.price} PLN</span>
            </div>
            <ReduxProvider>
                <AddToCartButton product={product}/>
            </ReduxProvider>
        </div>
    </Link>
}

export default ProductCard;
'use client'
import './CartProduct.scss';
import {Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {changeProductQuantity, removeProduct} from "@/redux/reducers/cartSlice";
import QuantitySelector from "@/components/common/quantitySelector/QuantitySelector";
import Button from "@/components/common/button/Button";

const CartProduct = ({product}) => {

    const dispatch = useDispatch();

    const handleChangeQuantity = (quantity) => {
        dispatch(changeProductQuantity({id: product.id, selectedSize: product.selectedSize, quantity}))
    }

    const handleDeleteProduct = () => {
        dispatch(removeProduct({id: product.id, selectedSize: product.selectedSize}))
    }

    return <div className="cart-product">
        <div className="image"
             style={{backgroundImage: `url(${product.main_image?.url || "/images/placeholder.webp"})`}}/>
        <div className="properties">
            <div className="name">{product.name}</div>
            {product.selectedSize && <div className="size">Rozmiar {product.selectedSize}</div>}
            <div className="quantity-wrapper">
                <QuantitySelector value={product.quantity} setValue={handleChangeQuantity}/>
                <Button icon className='delete' onClick={handleDeleteProduct}><Delete/></Button>
            </div>
        </div>
        <div className="price">{product.price} PLN</div>
    </div>
}

export default CartProduct;
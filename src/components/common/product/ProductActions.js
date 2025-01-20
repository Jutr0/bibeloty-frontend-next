'use client'
import Button from "@/components/common/button/Button";
import classnames from "classnames";
import QuantitySelector from "@/components/common/quantitySelector/QuantitySelector";
import {useDispatch} from "react-redux";
import {addProduct} from "@/redux/reducers/cartSlice";
import {useState} from "react";
import './ProductActions.scss'

const ProductActions = ({product}) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size);
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({...product, selectedSize, quantity, main_image: product.product_documents?.[0].document}))
        setQuantity(1)
    }

    return <div className="product-actions">
        {product.sizes?.length > 0 && <div className="size-select">
            <h4>ROZMIAR</h4>
            <div className="buttons">
                {product.sizes.map(size => <Button key={size.size}
                                                   className={classnames("small", {active: selectedSize === size.size})}
                                                   onClick={() => setSelectedSize(size.size)}
                >{size.size}</Button>)}
            </div>
        </div>}
        <div className="add-to-cart">
            <QuantitySelector
                value={quantity}
                setValue={setQuantity}
            />
            <Button onClick={addToCart}>Dodaj do koszyka</Button>
        </div>
        <div className='price'>{product.price} PLN</div>
    </div>

}

export default ProductActions
'use client'
import Button from "@/components/common/button/Button";
import {AddShoppingCart} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {addProduct} from "@/redux/reducers/cartSlice";

const AddToCartButton = ({product}) => {

    const dispatch = useDispatch()

    const handleAddToCart = e => {
        e.stopPropagation();
        dispatch(addProduct(product))
    }

    return <Button icon onClick={handleAddToCart}><AddShoppingCart/></Button>
}

export default AddToCartButton
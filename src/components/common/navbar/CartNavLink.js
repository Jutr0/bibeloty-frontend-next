'use client'
import {useSelector} from "react-redux";
import {ShoppingCart} from "@mui/icons-material";
import {useRouter} from "next/navigation";

const CartNavLink = () => {
    const router = useRouter();

    const navigateToCart = () => {
        router.push("/cart");
    };

    const productsCount = useSelector((state) =>
        state.cart.products.reduce((sum, value) => sum + value.quantity, 0)
    );

    return <div className="cart-icon" onClick={navigateToCart}>
        <ShoppingCart htmlColor="#fff"/>
        {productsCount > 0 && (
            <div className="products-indicator">{productsCount}</div>
        )}
    </div>
}

export default CartNavLink;
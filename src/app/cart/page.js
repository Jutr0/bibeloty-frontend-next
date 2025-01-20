'use client'
import Container from "@/components/common/container/Container";
import Button from "@/components/common/button/Button";
import {useSelector} from "react-redux";
import CartProduct from "@/components/cart/CartProduct";
import {useRouter} from "next/navigation";
import './page.scss'

const CartPage = () => {
    const products = useSelector(state => state.cart.products)
    const isEmpty = !products || products.length === 0;
    const router = useRouter();
    const navigateToCheckout = () => {
        router.push('/checkout')
    }

    return <Container className="cart-page">
        <h2 className="header">{isEmpty ? 'KOSZYK JEST PUSTY' : 'PRODUKTY W KOSZYKU'}</h2>
        {!isEmpty && <>
            <Button className="result" onClick={navigateToCheckout}>DO PODSUMOWANIA</Button>
            <div className="products">
                {products.map(p => <CartProduct key={p.id + p.selectedSize} product={p}/>
                )}
            </div>
        </>}
    </Container>
}

export default CartPage;
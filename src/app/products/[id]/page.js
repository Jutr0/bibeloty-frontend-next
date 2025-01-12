import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {buildActions} from "@/utils/actionsBuilder";
import {useDispatch} from "react-redux";

const ProductView = () => {

    const [product, setProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();

    const actions = buildActions("product")
    const dispatch = useDispatch();

    useEffect(() => {
        actions.getOne(id, product => {
            setProduct(product);
            setSelectedSize(product.sizes[0]?.size)
        })
    }, []);

    const addToCart = () => {
        dispatch(addProduct({...product, selectedSize, quantity}))
        setQuantity(1)
    }

    return <Container className="product-view">
        <Carousel autoPlay={false} showThumbs={false} emulateTouch showStatus={false}>
            <div>
                <img src="/images/placeholder2.webp"/>
            </div>
            <div>
                <img src="/images/placeholder3.webp"/>
            </div>
            <div>
                <img src="/images/placeholder4.webp"/>
            </div>
        </Carousel>
        <div className='right'>
            <div className="info">
                <h3 className="name">{product.name}</h3>
                <div className="materials">{product.materials?.map(m => m.name).join(", ")}</div>
                <div className="description">{product.description}</div>
            </div>
            <div className="actions">
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
        </div>
    </Container>
}

export default ProductView;
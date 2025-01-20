import "react-responsive-carousel/lib/styles/carousel.min.css";
import './page.scss';
import Container from "@/components/common/container/Container";
import {buildActions, get} from "@/utils/actionsBuilder";
import ProductActions from "@/components/common/product/ProductActions";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import ImageCarousel from "@/components/common/product/ImageCarousel";

export async function generateStaticParams() {
    const products = await get('products/all_ids')

    return products.map((product) => ({
        id: product.id,
    }));
}

export const dynamic = 'force-static';

const ProductView = async ({params}) => {

    const actions = buildActions('product');
    const product = await actions.getOne(params.id)

    return <Container className="product-view">
        <ImageCarousel images={product.product_documents?.map(pd => pd.document)}/>
        <div className='right'>
            <div className="info">
                <h3 className="name">{product.name}</h3>
                <div className="materials">{product.materials?.map(m => m.name).join(", ")}</div>
                <div className="description">{product.description}</div>
            </div>
            <ReduxProvider>
                <ProductActions product={product}/>
            </ReduxProvider>
        </div>
    </Container>
}

export default ProductView;
import './page.scss';
import {get} from "@/utils/actionsBuilder";
import Container from "@/components/common/container/Container";
import ProductsSection from "@/components/common/productsSection/ProductsSection";
import backgroundImage from '@/public/images/startPage.webp'

export const revalidate = 60;

const Home = async () => {
    const productsSections = await get("/products");

    return (
        <div className="home">
            <div className="carousel">
                <div className="image" style={{backgroundImage: `url('${backgroundImage.src}')`}}/>
            </div>
            <Container>
                {productsSections.map((productsSection) => (
                    <ProductsSection
                        key={productsSection.name}
                        products={productsSection.products}
                        title={productsSection.name}
                    />
                ))}
            </Container>
        </div>
    );
};

export default Home;
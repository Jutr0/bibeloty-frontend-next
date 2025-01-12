import './Navbar.scss';
import {buildActions} from "@/utils/actionsBuilder";
import CartNavLink from "@/components/common/navbar/CartNavLink";
import logo from '@/public/images/logo.png'
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import Link from "next/link";

async function fetchSections() {
    const actions = buildActions("section");
    return await actions.getAll();
}

const Navbar = async () => {
    const sections = await fetchSections();

    return (
        <nav className="navbar">
            <img className="logo" src={logo.src}/>
            <div className="links">
                {sections.map((section) => (
                    <Link key={section.name} href={`/#${section.name}`} className="item">
                        {section.name}
                    </Link>
                ))}
                <ReduxProvider>
                    <CartNavLink/>
                </ReduxProvider>
            </div>
        </nav>
    );
};

export default Navbar;
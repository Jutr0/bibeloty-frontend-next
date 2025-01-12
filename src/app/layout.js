import './layout.scss';
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="pl">
        <body>
        <main className="layout">
            <Navbar/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}

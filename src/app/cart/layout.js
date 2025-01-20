import ReduxProvider from "@/components/reduxProvider/ReduxProvider";

export default function CartLayout({children}) {
    return <ReduxProvider>
        {children}
    </ReduxProvider>
}

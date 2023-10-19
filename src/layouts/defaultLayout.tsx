import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Layout } from "./styles";
import { Footer } from "../components/footer/footer";

export function DefaultLayout() {

    return (

        <Layout>

            <Header />

            <Outlet />

            <Footer />
            
        </Layout>
    )
}
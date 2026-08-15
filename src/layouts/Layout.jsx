import {Outlet, useLocation} from "react-router-dom";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import LoginOffcanvas from "../components/auth/LoginOffcanvas.jsx";
import { CategoryStateProvider } from "../context/CategoryStateContext.jsx";

export default function Layout() {

    const { pathname } = useLocation();
    const showCategoriesOffcanvas = !pathname.startsWith('/product');

    return (

        <>
            {/*
                Gedeelde category state is beschikbaar vanaf layout niveau.
                Hierdoor kunnen verschillende onderdelen dezelfde UI status delen:
                - Header (openen van mobile categorieën)
                - Desktop sidebar
                - Mobile sidebar
                - CategoryNode (sluiten van mobile categorieën)
            */}
            <CategoryStateProvider>

                <Header showCategoriesOffcanvas = {showCategoriesOffcanvas}/>

                <Outlet/>

            </CategoryStateProvider>

            <LoginOffcanvas />

            <Footer/>

        </>

    );
}
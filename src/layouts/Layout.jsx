import {Outlet} from "react-router-dom";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import LoginOffcanvas from "../components/auth/LoginOffcanvas.jsx";
import { CategoryStateProvider } from "../context/CategoryStateContext.jsx";

export default function Layout() {

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

                <Header/>

                <Outlet/>

            </CategoryStateProvider>

            <LoginOffcanvas />

            <Footer/>

        </>

    );
}
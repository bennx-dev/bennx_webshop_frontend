import {Link} from "react-router-dom";
import {Logo} from "./Logo.jsx";
import {IconHamburger} from "../components/icons/IconHamburger.jsx";
import {IconAccount} from "../components/icons/IconAccount.jsx";
import {IconArrow} from "../components/icons/IconArrow.jsx";
import {IconWishlist} from "../components/icons/IconWishlist.jsx";
import {IconCart} from "../components/icons/IconCart.jsx";
import {useCategoryState} from "../context/CategoryStateContext.jsx";

export default function Header() {

    /*
    Header beheert de globale navigatie:
    - logo / home navigatie
    - mobiele categorie navigatie openen
    - account, wishlist en winkelmand acties
   */

    const { setOffcanvasCategorieenOpen } = useCategoryState();

    return (
        <header className="container-fluid px-2 mb-1">

            {/* Hoofdnavigatie */}
            <div className="d-flex align-items-center justify-content-between">

                {/* Links: mobiele menu + logo */}
                <div className="d-flex align-items-center">

                    <button
                        className="btn d-md-none px-1 pe-3 navButton"
                        type="button"
                        // toon de offcanvas met categorieen
                        // De offcanvas zelf wordt beheerd door CategoryState.
                        onClick={() => setOffcanvasCategorieenOpen(true)}
                        aria-controls="offcanvasCategorieen"
                    >
                        <IconHamburger/>
                    </button>

                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>

                {/* Desktop informatiebanner */}
                <div className="flex-grow-1 overflow-hidden d-none d-md-flex justify-content-center mx-3">
                    <div className="marquee">
                        🚧 Deze webshop is educatief en is in ontwikkeling met focus op praktijkervaring
                    </div>
                </div>

                {/* Rechter navigatie */}
                <nav className="d-flex align-items-center navButton">

                    <button
                        className="d-flex align-items-center px-1 navButton"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#loginOffcanvas"
                        aria-controls="loginOffcanvas"
                    >
                        <IconAccount/>
                        <span className="px-1 d-none d-md-inline">
                    Inloggen / Registreren
                    <IconArrow/>
                </span>
                    </button>

                    <button className="navButton px-1">
                        <IconWishlist/>
                    </button>

                    <button className="navButton px-1">
                        <IconCart/>
                    </button>
                </nav>
            </div>

            {/*
                Mobile UX:
                dezelfde boodschap als desktop, maar aangepast aan kleinere schermen.
            */}
            <div className="d-md-none text-center small fw-semibold mt-1">
                🚧 Educatief en in ontwikkeling met focus op praktijkervaring
            </div>

        </header>
    );
}
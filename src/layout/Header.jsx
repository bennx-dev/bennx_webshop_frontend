import {Link} from "react-router-dom";
import {Logo} from "./Logo.jsx";
import {IconHamburger} from "../components/icons/IconHamburger.jsx";
import {IconAccount} from "../components/icons/IconAccount.jsx";
import {IconArrow} from "../components/icons/IconArrow.jsx";
import {IconWishlist} from "../components/icons/IconWishlist.jsx";
import {IconCart} from "../components/icons/IconCart.jsx";
import {useCategoryState} from "../context/CategoryStateContext.jsx";

export default function Header({showCategoriesOffcanvas}) {

    /*
    Header manages the global navigation:
    - logo / home navigation
    - mobile category navigation opening
    - account, wishlist and shopping cart action
   */

    const { setOffcanvasCategorieenOpen } = useCategoryState();

    return (
        <header className="container-fluid px-2 mb-1">

            {/* main navigation */}
            <div className="d-flex align-items-center justify-content-between">

                {/* left: mobile menu + logo */}
                <div className="d-flex align-items-center">

                    {
                        showCategoriesOffcanvas &&

                        <button
                            className="btn d-md-none px-1 pe-3 navButton"
                            type="button"
                            // show offcanvas with the categories
                            // offcanvas is managed by CategoryState
                            onClick={() => setOffcanvasCategorieenOpen(true)}
                            aria-controls="offcanvasCategorieen"
                        >
                            <IconHamburger/>
                        </button>
                    }

                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>

                {/* Desktop information banner */}
                <div className="flex-grow-1 overflow-hidden d-none d-md-flex justify-content-center mx-3">
                    <div className="marquee">
                        🚧 Deze webshop is educatief en is in ontwikkeling met focus op praktijkervaring
                    </div>
                </div>

                {/* Right navigation */}
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
                    Mobile information banner
                */}
            <div className="d-md-none text-center small fw-semibold mt-1">
                🚧 Educatief en in ontwikkeling met focus op praktijkervaring
            </div>

        </header>
    );
}
import {useCategoryState} from "../../../context/CategoryStateContext.jsx";
import CategoryTree from "../CategoryTree.jsx";
import ResetCategories from "../../categories/ResetCategories.jsx";

export default function MobileCategorySidebar({categories}) {

    const { setOffcanvasCategorieenOpen } = useCategoryState();
    const { offcanvasCategorieenOpen } = useCategoryState();

    /*
        Mobile categorie navigatie:
        - toont/verbergt de offcanvas
        - gebruikt dezelfde CategoryTree als desktop
        - category state wordt centraal beheerd via Context
    */

    return (

        // logica om de offcanvas met categorieen te tonen of verbergen
        <div
            className={`
            offcanvas
            offcanvas-start
            ${offcanvasCategorieenOpen ? "show d-block" : ""}`}
            style={{visibility: offcanvasCategorieenOpen ? "visible" : "hidden"}}
            tabIndex="-1"
            id="offcanvasCategorieen"
            aria-labelledby="offcanvasCategorieenLabel"
        >

            <div className="offcanvas-header">

                <h5 id="offcanvasCategorieenLabel">Menu</h5>

                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"

                    /*
                        Mobile UX:
                        sluit het categorie menu wanneer de gebruiker
                        bewust op sluiten drukt.
                    */
                    onClick={() => setOffcanvasCategorieenOpen(false)}
                ></button>

            </div>

            <div className="offcanvas-body">
                <ResetCategories/>
                <CategoryTree categories={categories}/>

            </div>
        </div>
    );
}
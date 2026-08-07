import useCategories from "../../hooks/useCategories.jsx";
import DesktopCategoryView from "./views/DesktopCategoryView.jsx";
import MobileCategoryView from "./views/MobileCategoryView.jsx";

export default function Categories() {

    /*
        Categories haalt de categoriebron op.
        De data komt vanuit de backend via useCategories()
        en wordt gedeeld met de verschillende presentaties.
    */
    const categories = useCategories();

    /*
        Responsive presentatie:
        desktop en mobile gebruiken dezelfde categorie data.
        De UI/state logica zit lager in de category componenten.
    */

    return (
        <>
            <DesktopCategoryView categories={categories}/>

            <MobileCategoryView categories={categories}/>
        </>
    );
}
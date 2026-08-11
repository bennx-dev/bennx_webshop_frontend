import CategoryTree from "../CategoryTree.jsx";
import ResetCategories from "../../categories/ResetCategories.jsx";

export default function DesktopCategories({categories}) {

    /*
        Desktop categorie navigatie:
        bepaalt enkel de layout en zichtbaarheid op desktop.
        De categorie logica zit in CategoryTree en CategoryState.
    */

    return (

        <>

            <div className="
                 d-none
                 d-md-block"

                 style={{flex: "0 0 230px"}}
            >
                <ResetCategories/>
                <CategoryTree categories={categories}/>

            </div>

        </>

    );
}
import CategoryTree from "../CategoryTree.jsx";

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

                <CategoryTree categories={categories}/>

            </div>

        </>

    );
}
// CategoryState beheert gedeelde categorie UI state.
// Componenten kunnen deze state lezen of aanpassen via useCategoryState().
//
// Beheert bijvoorbeeld:
// - mobile categorie menu openen/sluiten
// - uitgeklapte categorieën in de boom

import { createContext, useState, useContext} from "react";

const CategoryStateContext = createContext();

export function CategoryStateProvider({ children }) {

    /*
        Mobile categorie navigatie:
        bepaalt of de offcanvas zichtbaar is.
    */
    const [offcanvasCategorieenOpen, setOffcanvasCategorieenOpen] = useState(false);

    /*
        Houdt bij welke parent categorieën opengeklapt zijn.

        Voorbeeld:
        {
            12: true,
            15: false
        }

        Elke CategoryNode gebruikt zijn eigen categorieId
        om zijn open/dicht status te bepalen.
    */
    const [expandedCategories, setExpandedCategories] = useState({});

    return (

        <CategoryStateContext.Provider value={{
            offcanvasCategorieenOpen,
            setOffcanvasCategorieenOpen,
            expandedCategories,
            setExpandedCategories
        }}>
            {children}
        </CategoryStateContext.Provider>

    );
}

export function useCategoryState() {
    return useContext(CategoryStateContext);
}
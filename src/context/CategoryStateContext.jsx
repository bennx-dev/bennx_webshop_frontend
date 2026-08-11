// CategoryState beheert gedeelde categorie UI state.
// Componenten kunnen deze state lezen of aanpassen via useCategoryState().
//
// Beheert bijvoorbeeld:
// - mobile categorie menu openen/sluiten
// - uitgeklapte categorieën in de boom

import {createContext, useState, useContext, useEffect} from "react";

const CategoryStateContext = createContext();

export function CategoryStateProvider({ children }) {

    /*
        Mobile categorie navigatie:
        bepaalt of de offcanvas zichtbaar is.
    */
    const [offcanvasCategorieenOpen, setOffcanvasCategorieenOpen] = useState(false);

    /*
        Houdt bij welke parent/branch categorieën momenteel open zijn.

        Voorbeeld:
        {
            12: true,
            15: false
        }

        Elke CategoryNode gebruikt zijn eigen categorieId
        om zijn open/dicht status te bepalen.
    */
    const [branchCategories, setBranchCategories] = useState(
        () => {
            const savedBranchCategories = localStorage.getItem("branchCategories");
            return savedBranchCategories ? JSON.parse(savedBranchCategories) : {};
        });

    useEffect(() => {
        localStorage.setItem(
            "branchCategories",
            JSON.stringify(branchCategories)
        );
    }, [branchCategories]);


    // Leaf Categories
    const [leafCategoryId, setLeafCategoryId] = useState(
        () => {
        const savedLeafCategoryId = localStorage.getItem("leafCategoryId");
        return savedLeafCategoryId ? Number(savedLeafCategoryId) : null;
    });

    useEffect(() => {
        if (leafCategoryId === null) {
            localStorage.removeItem("leafCategoryId");
        } else {
            localStorage.setItem(
                "leafCategoryId",
                leafCategoryId
            );
        }
    }, [leafCategoryId]);

    return (

        <CategoryStateContext.Provider value={{
            offcanvasCategorieenOpen,
            setOffcanvasCategorieenOpen,
            branchCategories,
            setBranchCategories,
            leafCategoryId,
            setLeafCategoryId
        }}>
            {children}
        </CategoryStateContext.Provider>

    );
}

export function useCategoryState() {
    return useContext(CategoryStateContext);
}
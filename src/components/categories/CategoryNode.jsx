/*
    CategoryNode

    doet:
    - toont naam
    - opent/sluit kinderen
    - navigeert naar categorie
    - meldt dat mobile menu mag sluiten
*/

import {useNavigate} from "react-router-dom";
import {useCategoryState} from "../../context/CategoryStateContext.jsx";

export default function CategoryNode({node, depth = 0}) {

    const navigate = useNavigate();

    /*
        CategoryNode gebruikt gedeelde categorie UI state:
        - branchCategories bepaalt welke nodes opengeklapt zijn
        - offcanvasCategorieenOpen wordt gesloten na selectie op mobile
    */
    const {
        setOffcanvasCategorieenOpen,
        branchCategories,
        setBranchCategories,
        leafCategoryId,
        setLeafCategoryId
    } = useCategoryState();

    /*
        Nieuwe categorieën bestaan niet automatisch in branchCategories.
        Daarom standaard gesloten wanneer er geen state aanwezig is.
    */
    const branchOpen = branchCategories[node.categorieId] ?? false;
    const leafOpen = leafCategoryId === node.categorieId;

    return (

        <li className="
         p-0
         m-0
         m-1"
        >

            <span className={`
                 p-0
                 m-0
                 px-2
                 category-title
                 depth-${depth}
                 ${branchOpen ? "parentCategory-active" : "parentCategory-inactive"}
                 ${leafOpen ? "activeLeaf" : "inactiveLeaf"}
                 `}

                  onClick={() => { // toggle branch open/close

                      if (node.children.length > 0) {
                          setBranchCategories({
                              ...branchCategories, // Copy the old fields
                              [node.categorieId]: !branchOpen //update the value
                          });
                      } else { // leaf categorie

                          setLeafCategoryId(node.categorieId);

                          /*
                            Categorie pagina:
                            gebruiker gaat naar de categoriepagina.
                            Op mobile sluiten we daarna het menu.
                          */

                          navigate(`/categorie/${node.categorieId}`);

                          setOffcanvasCategorieenOpen(false);
                      }
                  }}
            >

                {node.naam}

            </span>

            {node.children.length > 0 && (
                <ul className="
                    p-0
                    m-0
                    px-2"

                    style={{display: branchOpen ? "block" : "none"}}>
                    {
                        node.children.map(child => (
                            <CategoryNode
                                key={child.categorieId}
                                node={child} depth={depth + 1}
                            />
                        ))
                    }
                </ul>
            )}
        </li>
    );
}
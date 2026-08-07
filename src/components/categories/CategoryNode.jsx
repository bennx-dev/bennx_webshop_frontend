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
        - expandedCategories bepaalt welke nodes opengeklapt zijn
        - offcanvasCategorieenOpen wordt gesloten na selectie op mobile
    */
    const {
        setOffcanvasCategorieenOpen,
        expandedCategories,
        setExpandedCategories
    } = useCategoryState();

    /*
        Nieuwe categorieën bestaan niet automatisch in expandedCategories.
        Daarom standaard gesloten wanneer er geen state aanwezig is.
    */
    const open = expandedCategories[node.categorieId] ?? false;

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
                 category-title depth-${depth}
                 `}

                  onClick={() => {

                      /*
                        Parent categorie:
                        alleen de UI state wijzigen zodat kinderen
                        zichtbaar of verborgen worden.
                    */
                      if (node.children.length > 0) {
                          setExpandedCategories({
                              ...expandedCategories,
                              [node.categorieId]: !open
                          });
                      } else {

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

                    style={{display: open ? "block" : "none"}}>
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
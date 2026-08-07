import SearchBar from "../components/search/SearchBar.jsx";
import {useParams} from "react-router-dom";
import ArticlesContainer from "../components/articles/ArticlesContainer.jsx";
import Categories from "../components/categories/Categories.jsx";

export default function HomePage() {

    /*
        HomePage combineert de hoofdonderdelen van de pagina:
        - zoeken
        - categorie navigatie
        - artikelweergave
    */

    const {categoryId} = useParams();

    return (

        <main className="container-fluid">

            {/* Product zoeken */}
            <SearchBar/>

            {/*
                Hoofdindeling:
                categorie navigatie links,
                artikelen rechts.
            */}
            <div className="
            d-flex
            flex-row
            gap-3"
            >
                    <Categories/>

                    {/*
                        key zorgt ervoor dat de container opnieuw initialiseert
                        wanneer de geselecteerde categorie verandert.
                    */}
                    <ArticlesContainer key={categoryId || "all"}/>

            </div>
        </main>
    );
}
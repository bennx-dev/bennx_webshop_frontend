import ProductsGrid from "./ProductsGrid.jsx";
import useArticles from "../../hooks/useArticles.jsx";

export default function ArticlesContainer() {
    const {
        products,
        totalPages,
        page,
        setPage
    } = useArticles();

    return (
        <ProductsGrid
            products={products}
            totalPages={totalPages}
            page={page}
            setPage={setPage}
        />
    );
}
import {Routes, Route} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import NotFound from "./pages/ErrorFallbackPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="categorie/:categoryId" element={<HomePage/>}/>
                <Route path="product/:productId" element={<ProductDetailPage/>}/>

                {/* fallback MUST be last */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
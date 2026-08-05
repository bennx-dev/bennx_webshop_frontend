import Pagination from "./Pagination.jsx";
import {Link} from "react-router-dom";

export default function ProductsGrid({products, totalPages, setPage}) {

    return (
        <div className="container">

            <div className="
             row
             align-items-start
             justify-content-start
             gy-3
             gx-3
             row-cols-1
             row-cols-sm-3
             row-cols-md-3
             row-cols-lg-4
             row-cols-xl-6
             mb-4"
            >

                {products.map(product => (
                    <div key={product.artikelId} className="col">

                        <Link
                            to={`/product/${product.artikelId}`}
                            className="
                            d-flex
                            flex-column
                            artikel
                            w-100
                            h-100
                            p-2
                            text-decoration-none
                            text-dark"
                        >

                            <img
                                className="
                                    img-fluid"

                                src={`${import.meta.env.BASE_URL}/images/products/${product.artikelId}.jpg`}
                                alt={product.naam}
                            />

                            <h3 className="
                                 beschrijving
                                 mb-0"
                            >
                                {product.naam}
                            </h3>

                            <div className="
                                 mt-auto"
                            >

                                <p className="
                                     categorie
                                     mb-1"
                                >
                                    {product.categorieNamen?.length
                                        ? product.categorieNamen.join(", ")
                                        : "Geen categorie"}
                                </p>

                                <p className="
                                     stock
                                     mb-1"
                                >
                                    {product.stockLabel}
                                </p>

                                <p className="
                                     price
                                     mb-0"
                                >
                                    € {product.prijs} (incl. btw)
                                </p>

                            </div>

                        </Link>

                    </div>
                ))}

            </div>

            <Pagination
                totalPages={totalPages}
                setPage={setPage}
            />

        </div>
    );
}
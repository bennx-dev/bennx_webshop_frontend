import {savePage} from "../../utils/pagination.js";

export default function Pagination({totalPages, page, setPage}) {

    function loadPage(pageNumber) {
        window.scroll({top: 0, left: 0, behavior: "instant",});
        setPage(pageNumber);
        savePage(pageNumber);
    }

    const buttons = [];

    for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {

        const currentPage = pageNumber + 1;

        buttons.push(
            <button
                key={pageNumber}
                onClick={() => loadPage(currentPage)}
                className={`
                paginationButtons
                m-1
                ${currentPage === page ? "currentPage" : ""}
                `}
            >
                {currentPage}
            </button>
        );
    }
    return <div className="my-4">{buttons}</div>;
}
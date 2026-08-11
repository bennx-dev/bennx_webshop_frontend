import { useCategoryState } from "../../context/CategoryStateContext.jsx";

export default function ResetCategories() {

    const {
        setBranchCategories,
        setLeafCategoryId
    } = useCategoryState();

    return (
        <button className="resetCategories px-1 mb-1"
            onClick={() => {
                setBranchCategories({});
                setLeafCategoryId(null);
            }}
        >
            Reset
        </button>
    );
}
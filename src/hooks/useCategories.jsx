import {useEffect, useState} from "react";

export default function useCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch("/api/categorieen");
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                }
            } catch (error) {
                console.error("Fout bij ophalen categorieën:", error);
            }
        }

        fetchCategories();
    }, []);

    return categories;
}
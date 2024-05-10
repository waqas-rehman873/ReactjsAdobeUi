import React from "react";
import LeftCategories from "./comp/LeftCategories";
import { useCategoriesContext } from "../../context/CategoriesContext";
const LeftSide = () => {
    const { categoriesData } = useCategoriesContext();

    return (
        <aside className="leftSide">
            {categoriesData.map(({ category, links }) => (
                <div key={category} className="leftApps">
                    <h4>{category}</h4>
                    <LeftCategories links={links} />
                </div>
            ))}
        </aside>
    );
};

export default LeftSide;

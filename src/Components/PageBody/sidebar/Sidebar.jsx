import Allapps from "./links/Allapps";
import Categories from "./links/Categories";
import Fonts from "./links/Fonts";
import ResourcesLinks from "./links/ResourcesLinks";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Allapps />
            <Categories />
            <Fonts />
            <ResourcesLinks />
        </aside>
    );
};

export default Sidebar;

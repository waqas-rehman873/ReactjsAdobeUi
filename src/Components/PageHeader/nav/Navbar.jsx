import SearchTab from "./searchTab/SearchTab";
import NavLinks from "./navLinks/NavLinks";
import SocialIcons from "./socialicons/SocialIcons";
const Navbar = () => {
    return (
        <nav className="pageNav">
            <span className="circleDesign"></span>
            <NavLinks />
            <SearchTab />
            <SocialIcons />
        </nav>
    );
};

export default Navbar;

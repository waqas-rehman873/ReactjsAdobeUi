import { CategoriesProvider } from "./context/CategoriesContext";
import Header from "./Components/PageHeader/Header";
import "./App.scss";
import BgVideoComp from "./Components/bgVideoComp/BgVideoComp";
import DarkMode from "./Components/darkMode/DarkMode";
import { Route, Routes } from "react-router-dom";
import YourWork from "./Components/pages/YourWork";
import Discover from "./Components/pages/Discover";
import BodyComp from "./Components/BodyComp";
import AdobeAds from "./Components/RightSide/rightChildBody/adobeAds/AdobeAds";
import AdobeInDesign from "./Components/RightSide/rightChildBody/adobeAds/AdobeIndesign";
import Market from "./Components/pages/Market";
const App = () => {
    return (
        <CategoriesProvider>
            <main className="App">
                <BgVideoComp />
                <DarkMode />
                <section className="contentApp">
                    <Header />
                    <Routes>
                        <Route path="/apps" element={<BodyComp />} />
                        <Route path="/" element={<BodyComp />} />
                        <Route path="/yourwork" element={<YourWork />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/market" element={<Market />} />
                        <Route path="/adobe-ads" element={<AdobeAds />} />
                        <Route path="/graphic-design" element={<AdobeInDesign />} />
                    </Routes>
                </section>
            </main>
        </CategoriesProvider>
    );
};
export default App;

import { CategoriesProvider } from "./context/CategoriesContext";
import LeftSide from "./Components/Left/LeftSide";
import Header from "./Components/PageHeader/Header";
import RightSide from "./Components/RightSide/RightSide";
import "./App.scss";
import BgVideoComp from "./Components/bgVideoComp/BgVideoComp";
import DarkMode from "./Components/darkMode/DarkMode";
const App = () => {
    return (
        <CategoriesProvider>
            <main className="App">
                <BgVideoComp />
                <DarkMode />
                <section className="contentApp">
                    <Header />
                    <div className="pageBody">
                        <LeftSide />
                        <RightSide />
                    </div>
                </section>
            </main>
        </CategoriesProvider>
    );
};

export default App;

import React from "react";
import { CategoriesProvider } from "../context/CategoriesContext";
import BgVideoComp from "../Components/bgVideoComp/BgVideoComp";
import DarkMode from "../Components/darkMode/DarkMode";
import Header from "../Components/PageHeader/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <CategoriesProvider>
            <main className="App">
                <BgVideoComp />
                <DarkMode />
                <section className="contentApp">
                    <Header />
                    <Outlet />
                </section>
            </main>
        </CategoriesProvider>
    );
};

export default Layout;

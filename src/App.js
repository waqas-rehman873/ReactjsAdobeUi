import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.scss";
import "./Components/PageBody/Main/Main.scss";

import BodyComp from "./Components/PageBody/BodyComp.jsx";
import AdobeAds from "./Components/PageBody/Main/mainBody/adobeAds/AdobeAds.jsx";
import AdobeInDesign from "./Components/PageBody/Main/mainBody/adobeAds/AdobeIndesign.jsx";
import YourWork from "./Components/pages/YourWork";
import Discover from "./Components/pages/Discover";
import Market from "./Components/pages/Market";
import Layout from "./Layout/Layout.jsx";
import Main from "./Components/PageBody/Main/Main.js";
import AfterEffects from "./Components/PageBody/Main/mainBody/adobeAds/AfterEffects.jsx";
import AppsPlan from "./Components/PageBody/Main/mainBody/appsPlan/AppsPlan.jsx";
import Softwares from "./Components/PageBody/Main/mainBody/softwares/Softwares.jsx";
import ErrorPage from "./Components/pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/apps",
                element: <BodyComp />,
                children: [
                    { path: "", element: <Main /> },
                    {
                        path: "/apps/all-updates",
                        element: (
                            <h1
                                style={{
                                    color: "white",
                                    alignSelf: "center",
                                    marginInline: "auto",
                                }}
                            >
                                updates will be show there
                            </h1>
                        ),
                    },
                    { path: "/apps/adobe", element: <AdobeAds style={{}} /> },
                    { path: "/apps/graphic", element: <AdobeInDesign /> },
                    { path: "/apps/after-effects", element: <AfterEffects /> },
                    { path: "/apps/appsPlan", element: <AppsPlan /> },
                    { path: "/apps/software", element: <Softwares /> },
                    { path: "/apps/*", element: <ErrorPage /> },
                ],
            },
            { path: "/", element: <Navigate to="/apps" /> },
            { path: "yourwork", element: <YourWork /> },
            { path: "discover", element: <Discover /> },
            { path: "market", element: <Market /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;

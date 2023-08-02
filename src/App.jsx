import React from "react";
import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <AppRoutes></AppRoutes>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;

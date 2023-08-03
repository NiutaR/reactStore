import React, { useEffect } from "react";
import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "./features/categories/categoriesSlice";
import { getProducts } from "./features/products/productsSlice";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);
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

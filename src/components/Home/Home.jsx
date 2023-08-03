import React from "react";
import Poster from "../Poster/Poster";
import { useSelector } from "react-redux";
import Products from "../Products/Products";


const Home = () => {
    const { list } = useSelector(({products}) => products); 
    return (
        <>
            <Poster></Poster>
            <Products products={list} amount={5} title="Trending"></Products>
        </>
    );
}

export default Home;
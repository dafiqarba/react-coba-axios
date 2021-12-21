import React, {useState} from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Recipes from '../Components/Recipes'
import LayoutStyles from './LayoutStyle'
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import Rother from "../Components/Rother";
import {CssBaseline} from "@mui/material";
import AppHello from "../AppHello";

//Halaman base untuk layout
const Base = ({match}) => {
    const classes = LayoutStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        // console.log("this")
        setOpen(!open);
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header toggleDrawer={toggleDrawer} open={open}/>
            <Sidebar toggleDrawer={toggleDrawer} open={open}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Routes>
                    <Route path={`/recipes`} element={<Recipes/>}/>
                    <Route path={`/rother`} element={<Rother/>}/>
                </Routes>
                <Footer/>
            </main>
        </div>
    )
};

export default Base;

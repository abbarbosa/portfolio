import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Identity from "../Pages/Identity";
import SocialMedia from "../Pages/SocialMedia";
import Extras from "../Pages/Extras";
import NotFound from "../Pages/NotFound";
import Develop from "../Pages/Develop";
import { Home } from "../Pages/Home/Index";

const AppRoute = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/sobre-mim" />} />
                <Route path="*" element={<Navigate to="/not-found" /> }/>

                <Route path="/identidade-visual" element={<Identity />} />
                <Route path="/sobre-mim" element={<AboutMe/>} />
                <Route path="/social-media" element={<SocialMedia/>} />
                <Route path="/extras" element={<Extras/>} />
                <Route path="/desenvolvimento" element={<Develop/>}/>
                <Route path="/not-found" element={<NotFound />} />
                <Route  path="/home" element={<Home/>}/>

            </Routes>
        </Router>
    )

}

export default AppRoute;
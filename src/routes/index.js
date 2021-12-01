import React, {useEffect} from "react";
import {BrowserRouter as Router,Route, Routes , Navigate} from "react-router-dom";
import HomePage from '../pages/Home';
import MoviesPage from '../pages/Movies';
import TVShowsPage from '../pages/TVShows';

const Routespath = ({})=>{
    return (
        <Router >
            <Routes>
                <Route path="/" element={<Navigate to="/tvShows" />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/movies" element={<MoviesPage />} />
                <Route exact path="/tvShows" element={<TVShowsPage />} />
            </Routes>
        </Router >
    );
};

export default Routespath;
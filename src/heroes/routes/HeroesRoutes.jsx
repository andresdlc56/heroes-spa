import { Navigate, Route, Routes } from "react-router-dom";


import { Navbar } from "../../ui"
import { DCPage, MarvelPages, SearchPage, HeroePage } from "../pages";


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
        
            <div className="container">
                <Routes>
                    <Route path="marvel" element={ <MarvelPages /> } />
                    <Route path="dc" element={ <DCPage /> } />
                    <Route path="search" element={ <SearchPage /> } />
                    <Route path="heroe/:heroeId" element={ <HeroePage /> } />


                    <Route path="/*" element={ <Navigate to="marvel" /> } />
                </Routes>
            </div>
        </>
    )
}

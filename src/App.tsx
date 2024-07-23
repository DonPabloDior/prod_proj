import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useState } from "react";
import './styles/index.scss'
import { classNames } from "./helpers/classnames/classNames";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}



const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    
    }
    return (
        <div className={classNames('app', {}, [theme, 'cls1'])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'About'}>О нас</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/About' element={<AboutPageAsync />}/>
                        <Route path='/' element={<MainPageAsync />}/>
                    </Routes>
                </Suspense>
        </div>
    )
}

export default App
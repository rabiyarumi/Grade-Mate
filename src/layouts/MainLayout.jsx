import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const MainLayout = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
        // document.getElementsByClassName("theme").setAttribute("data-theme", localTheme);

    } , [theme])
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar theme={theme} setTheme={setTheme}/>
            <div className='flex-grow'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
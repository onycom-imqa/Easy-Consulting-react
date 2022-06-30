import React from 'react';
import NavBar from '../../Shared/Navbar/Navbar';
import './Header.css'
import Hero from '../Hero/Hero';
import {useIMQA} from "imqa-react-sdk";

const Header = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <section className="header">
            <NavBar/>
            <Hero/>
        </section>
        </div>
    );
};

export default Header;

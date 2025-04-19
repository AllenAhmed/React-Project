import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import TopHeader from './Components/TopHeader';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Hero02 from './Components/Hero02';
import Hero03 from './Components/Hero03';
import Hero04 from './Components/Hero04';
import Hero05 from './Components/Hero05';
import Hero06 from './Components/Hero06';
import Hero07 from './Components/Hero07';
import Hero08 from './Components/Hero08';
import Hero09 from './Components/Hero09';

const Root = () => {
    return (
        <div>
           <TopHeader></TopHeader>
           <Header></Header>
           <Hero></Hero>
           <Hero02></Hero02>
           <Hero03></Hero03>
           <Hero04></Hero04>
           <Hero05></Hero05>
           <Hero06></Hero06>
           <Hero07></Hero07>
           <Hero08></Hero08>
           <Hero09></Hero09>
           <NavBar></NavBar>
           
        </div>
    );
};

export default Root;
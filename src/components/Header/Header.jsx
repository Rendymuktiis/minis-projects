import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find the best books here.</h2><br />
                <p className='header-text fs-20 fw-3'>This apps makes you find the best book, only type your preference. Then system will show the best books for you</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
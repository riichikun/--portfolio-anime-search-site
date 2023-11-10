
import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {useState} from 'react'
import logo from "../img/logo.png";
import DropdownMenu from './Dropdown Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


  export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  const handleClick = () => {
    setIsActive(current => !current);
  };
  const bothHandler = (e: any) => {
    console.log(e.target.value)
    setSearchValue(e.target.value);
    if(e.target.value != '') {
      document.querySelector('label')?.classList.add('hidden')
    }
    if(e.target.value == '' && document.querySelector('label')?.classList.contains('hidden')) {
      document.querySelector('label')?.classList.remove('hidden')
    }
  }
  return (
    <header className='fixed lg:static w-[100%] z-[2] top-0'>
        <div className="navbar flex justify-between items-center h-[70px] max-w-[100%] w-[100%] px-[20px] py-[9px] bg-[#000]">
            <a href="/">
              <img src={logo} alt="" className='w-[50px] h-[50px]' />
            </a>
            <div className="burger__container lg:hidden flex flex-col mt-[4px] hover:cursor-pointer" onClick={handleClick}>
              <div className={`burger ${isActive ? 'active' : ''}`} >
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
              <p className={`text-[#fff] transition duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>Menu</p>
            </div> 
            <nav className="lg-nav hidden lg:flex justify-between items-center w-[90%]">
              <div className='left-nav flex gap-[37px]'>
                <a className='text-[20px] xl:text-[24px]' href="/top">Top</a>
                <a className='text-[20px] xl:text-[24px]' href="/airing">Airing now</a>
                <a className='text-[20px] xl:text-[24px]' href="/genres">Genres</a>
                <a className='text-[20px] xl:text-[24px]' href="/news">News</a>
                <a className='text-[20px] xl:text-[24px]' href="/about">About us</a>
              </div>
              <div className="right-nav flex items-center gap-[20px]">
                <div className="lg-search relative">
                <form action={`/search/${searchValue}`}>
                  <a href={`/search/${searchValue}`} className='absolute z-[6] t-[0px] l-[0px] mt-[12px] ml-[12px]' onClick={(e) => {

                    localStorage.setItem('Search value', searchValue)
                  }
                    }>
                    <FontAwesomeIcon icon="magnifying-glass" className='text-[#fff]' />
                  </a>
                    <input id='LgSearch' type="text" className='relative z-[5] w-[100%] h-[48px] bg-[#232229e6] text-[#fff] pl-[40px]' onChange={(e) => bothHandler(e)}/>
                    <label className='absolute top-[12px] left-[40px] text-[#fff]' htmlFor="#LgSearch">Search</label>
                  </form>
                </div>
              
                <a className='text-[20px] xl:text-[24px] min-w-fit' href="/sign-in">Sign in</a>
              </div>
            </nav>
        </div>
        {isActive && <DropdownMenu />}


    </header>
  )
  }


  /*             <div className="search">
              <a href={`/search/${searchValue}`} onClick={handleInputChange} className='absolute t-[0px] l-[0px] mt-[12px] ml-[12px]'>
                <FontAwesomeIcon icon="magnifying-glass" className='text-[#fff]' />
              </a>
              <input id='Search' type="text" className='w-[100%] h-[48px] bg-[#232229] text-[#fff]' onChange={(e) => bothHandler(e)} />
              <label className='absolute t-[12px] text-[#4E4C5E]' htmlFor="#Search">Search</label>
            </div>
  
*/
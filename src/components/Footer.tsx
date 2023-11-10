import React from 'react'
import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const toggleNav = (e: any) => {
    document.querySelector(`#${e.target.id}Toggled`)?.classList.toggle('active')
  }
  return (
    <footer className='lg:flex lg:flex-row-reverse lg:justify-between pt-[54px] px-[20px] lg:px-[3.5%] bg-[#191919]'>
      <div className="nav__section lg:flex lg:gap-[8%] lg:w-[34%]">
        <div id='FooterGenres' className='nav__block flex flex-col lg:w-[50%]' onClick={(e) => toggleNav(e)}>
          <div className="footer-nav-header flex items-center justify-between border-y-solid border-y-[#262626] border-y-[1px] lg:border-none py-[12px] pointer-events-none">
            <h3 className='text-[20px] xl:text-[24px] font-[700]'>Genres</h3>
            <FontAwesomeIcon className='lg:hidden text-[#fff]' icon={faChevronDown} />
          </div>
          <div id='FooterGenresToggled' className="toggled h-[0px] flex flex-col gap-[12px] px-[15px] py-[15px] lg:py-[0]">
            <a className='text-[20px] xl:text-[24px]' href="/action">Action</a>
            <a className='text-[20px] xl:text-[24px]' href="/comedy">Comedy</a>
            <a className='text-[20px] xl:text-[24px]' href="/adventure">Adventure</a>
            <a className='text-[20px] xl:text-[24px]' href="/drama">Drama</a>
            <a className='text-[20px] xl:text-[24px]' href="/fantasy">Fantasy</a>
            <a className='text-[20px] xl:text-[24px]' href="/romance">Romance</a>
            <a className='text-[20px] xl:text-[24px]' href="/scifi">Sci-Fi</a>
            <a className='text-[20px] xl:text-[24px]' href="/all">All genres</a>
          </div>
        </div>
        <div id='FooterNavigation' className="nav__block flex flex-col lg:w-[50%]" onClick={(e) => toggleNav(e)}>
          <div className="footer-nav-header flex items-center justify-between border-y-solid border-y-[#262626] border-y-[1px] lg:border-none py-[12px] pointer-events-none">
            <h3 className='text-[20px] xl:text-[24px] font-[700]'> Navigation</h3>
            <FontAwesomeIcon className='lg:hidden text-[#fff]' icon={faChevronDown} />
          </div>
          <nav id='FooterNavigationToggled' className='toggled h-[0px] flex flex-col gap-[12px] px-[15px] py-[15px] lg:py-[0]'>
            <a className='text-[20px] xl:text-[24px]' href="/">Top</a>
            <a className='text-[20px] xl:text-[24px]' href="/">Airing now</a>
            <a className='text-[20px] xl:text-[24px]' href="/">News</a>
            <a className='text-[20px] xl:text-[24px]' href="/">About us</a>
          </nav>
        </div>
      </div>
      <div className="credit__section flex flex-col items-center gap-[30px] pt-[58px] lg:pt-[0] pb-[80px] lg:w-[15%]">
            <a className='block w-fit' href="/">
              <img src={logo} alt="" className='w-[50px] h-[50px]' />
            </a>
            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae dolores ea voluptatibus dicta porro tempora esse qui laudantium officia!</p>
            <div className="icons flex gap-[45px] border-y-solid border-y-[#262626] border-y-[1px] py-[15px]">
              <FontAwesomeIcon className='text-[#fff] rounded-[100px] border-solid border-white border-[1px] p-[13px]' icon={faDiscord} />
              <FontAwesomeIcon className='text-[#fff] rounded-[100px] border-solid border-white border-[1px] p-[13px]' icon={faXTwitter} />
              <FontAwesomeIcon className='text-[#fff] rounded-[100px] border-solid border-white border-[1px] p-[13px]' icon={faTelegram} />
            </div>
            <div className="links flex gap-[10px]">
              <a className='' href="/terms">Terms of Use</a>
              <a className='' href="/privacy">Privacy Police</a>
              <a className='' href="/map">Site Map</a>
            </div>
      </div>
    </footer>
  )
}

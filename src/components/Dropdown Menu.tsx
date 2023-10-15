import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface DropdownMenuState {
  searchValue: string;
}



export default class DropdownMenu extends Component<{}, DropdownMenuState> {
  constructor(props: any) {
    super(props)
    this.state = {
      searchValue: ''
    }
    //this.handleInputChange = this.handleInputChange.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
  }
  
   setSearchValue(inputValue: any) {
    this.setState({searchValue: inputValue.target.value});
    //this.props.setRequest(inputValue.target.value)
  }
  /*handleInputChange(e: any) {
    this.props.setRequest(e.target.value)
    };*/
    bothHandler(e: any) {
      this.setSearchValue(e);
      if(e.target.value != '') {
        document.querySelector('#SearchLabel')?.classList.add('hidden')
      }
      if(e.target.value == '' && document.querySelector('#SearchLabel')?.classList.contains('hidden')) {
        document.querySelector('#SearchLabel')?.classList.remove('hidden')
      }
    }
  render() {
    return (
      <div className="dropdown fixed t-[70px] z-[3] w-[100%] h-[100%] px-[20px] bg-[#000000e6] lg:hidden">
        <form action={`/search/${this.state.searchValue}`} className="search relative">
          <a href={`/search/${this.state.searchValue}`} className='absolute z-[6] t-[0px] l-[0px] mt-[12px] ml-[12px]'>
            <FontAwesomeIcon icon="magnifying-glass" className='text-[#fff]' />
          </a>
          <input id='Search' type="text" className='z-[5] w-[100%] h-[48px] pl-[50px] bg-[#232229e6] text-[#fff]' onChange={(e) => this.bothHandler(e)}/>
          <label id='SearchLabel' className='absolute top-[12px] left-[50px] text-[#4E4C5E]' htmlFor="#Search">Search</label>
        </form>
        <nav className='flex flex-col gap-[37px] mt-[24px]'>
          <a className='text-[20px]' href="/">Top</a>
          <a className='text-[20px]' href="/">Airing now</a>
          <a className='text-[20px]' href="/">Genres</a>
          <a className='text-[20px]' href="/">News</a>
          <a className='text-[20px]' href="/">About us</a>
          <a className='text-[20px] mt-[30px]' href="">Sign in</a>
        </nav>
      </div>

      
    )
  }
}

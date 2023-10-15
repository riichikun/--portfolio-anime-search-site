import React, { Component } from 'react';
import {Header}  from './components/Header';
import Main from './pages/Main';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from './pages/Search';
import TitlePage from './pages/Title Page';
import './index.css';
import { Footer } from './components/Footer';

library.add(faMagnifyingGlass);


export class App extends Component {

    /*render*/
  render() {
    return (
      <div className='container pt-[70px] lg:pt-0'>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Main />}   />
            <Route path="/search/:request" element={<Search /> } />
            <Route path="/title/:id" element={<TitlePage />} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    ) 
  }


}

export default App


/*
            <Route path="/search/:query" element={<Search request={this.state.request} /> } />

*/
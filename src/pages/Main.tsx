import React, { Component } from 'react'
import TopTitles from '../components/Top Titles'
import NewTitles from '../components/New Titles'
import axios from 'axios';

interface MainState {
  topAnime: any; 
  newAnime: any;
  topIsLoaded: boolean;
  newIsLoaded: boolean;
  request: string;
}


export default class Main extends Component<{}, MainState> {
  constructor(props: any) {
    super(props)
    /* state */
    this.state = {
      topAnime: [],
      newAnime: [],
      topIsLoaded: false,
      newIsLoaded: false,
      request: ''
    };
    /* other props*/
    this.getAnime = this.getAnime.bind(this);
    this.setRequest = this.setRequest.bind(this);
  }

  getAnime = async ()  => {
    const topAnime = await axios.get(`https://api.jikan.moe/v4/top/anime`)//.catch((e) => {if(e.response.status == 429)  setTimeout((e) => window.location.reload(), 3000)})
    //const anime = await axios.get(`https://api.jikan.moe/v4/anime?genres=28`)

    this.setState({topAnime: topAnime});
    this.setState({topIsLoaded: true});
    const newAnime = await axios.get(`https://api.jikan.moe/v4/seasons/now`)//.catch((e) => {if(e.response.status == 429)  setTimeout((e) => window.location.reload(), 3000)})
    console.log(newAnime)
    this.setState({newAnime: newAnime});
    this.setState({newIsLoaded: true});
    //console.log(this.state.newAnime)
    }
    componentDidMount(): void {
      setTimeout(() => {
      this.getAnime();        
      }, 800);

    }

  setRequest = async (request:any) => {
    this.setState({request: request})

  }

  render() {
    return (
    <main className='lg:pt-0'>
      {this.state.newIsLoaded == true ?  
          <div className="container">
            <TopTitles anime={this.state.topAnime} />
            <NewTitles anime={this.state.newAnime} />
          </div>
       : 
<p className='top-[0px] l-0 bg-[#000] p-[20px]  w-[100%] h-[1000px] z-[100]'>loading</p>}
       </main>
    )
  }
}


/*
{this.state.newIsLoaded == true ?  
          <div className="container">
            <TopTitles anime={this.state.topAnime} />
            <NewTitles anime={this.state.newAnime} />
          </div>
       : 

       */
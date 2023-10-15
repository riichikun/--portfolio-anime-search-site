import React, { Component } from 'react'
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchTitles from '../components/Search Results'
import SearchResults from '../components/Search Results';
import { StringDecoder } from 'string_decoder';




interface SearchState {
    requestedAnime: any;
    request: string;
    requestedIsLoaded: boolean;
  }



export default class Search extends Component<{}, SearchState> {
    constructor(props: any) {
        super(props)
        /* state */
        this.state = {
            requestedAnime: [],
            requestedIsLoaded: false,
            request: '',
        };
        /* other props*/
        this.getRequest = this.getRequest.bind(this);
      }
    getRequest = async ()  => {
        const request = window.location.pathname.slice(8)
        const topAnime = await axios.get(`https://api.jikan.moe/v4/anime?q=${request}&cat=anime&min_score=4&start_date=1970-01-01&sfw=true`)
        this.setState({requestedAnime: topAnime});
        this.setState({requestedIsLoaded: true});
        this.setState({request: request});
        }
        componentDidMount(): void {
          setTimeout(() => {
            this.getRequest();   
          }, 200);
        }
    render() {
    return (
        <main className="search h-fit-content ">
            {this.state.requestedIsLoaded == true ? <SearchResults anime={this.state.requestedAnime.data.data} request={this.state.request} /> : <p className='top-[0px] l-0 bg-[#000] p-[20px] w-[100%] h-[1000px] z-[100]'>loading</p>}
           
        </main>
    )
  }
}


import React, { Component } from 'react'
import axios from 'axios'
import TitleCard from '../components/Title Card';




interface SearchState {
    anime: any;
    id: string;
    requestedIsLoaded: boolean;
  }

export default class TitlePage extends Component<{}, SearchState> {
    constructor(props: any) {
        super(props)
        /* state */
        this.state = {
            anime: {},
            requestedIsLoaded: false,
            id: '',
        };
        /* other props*/
        this.getRequest = this.getRequest.bind(this);
      }
      getGenres() {
        let genres = '';
       for(let i = 0; (i < this.state.anime.data.data.genres.length - 1); i++) {
         genres = genres + this.state.anime.data.data.genres[i].name + ' / '
       }
       if(this.state.anime.data.data.genres.length > 1) genres = genres + this.state.anime.data.data.genres[this.state.anime.data.data.genres.length - 1].name
       return genres
     }
    getRequest = async ()  => {
        const id = window.location.pathname.slice(7)
        const thisAnime = await axios.get(`https://api.jikan.moe/v4/anime/${id}`).catch((e) => {if(e.response.status == 429)  setTimeout((e) => window.location.reload(), 3000)})
        this.setState({anime: thisAnime});
        this.setState({requestedIsLoaded: true});
        this.setState({id: id});
        }
        componentDidMount(): void {
          setTimeout(() => {
            this.getRequest();            
          }, 300);
        }
  render() {
    return (
        <main className="title-page">
            {this.state.requestedIsLoaded && this.state.anime.data != undefined ? 



            <div className="title-info flex flex-col-reverse sm:flex-row sm:justify-between gap-[20px] sm:gap-[10%] px-[11%] sm:px-[3.15%] py-[30px]">
              <div className="title-description flex flex-col sm:w-[75%] gap-[10px]">
                <h2 className='text-[36px] font-[700] lg:text-[72px] mx-auto sm:mx-0 '>{this.state.anime.data.data.title} {this.state.anime.data.data.year != undefined ? `(${this.state.anime.data.data.year})` : ''}</h2>
                <div className="common mb-[10px]  ">
                  <p className='text-[#A7A7A7]'>{this.state.anime.data.data.type}</p>
                  {this.state.anime.data.data.episodes!=1 ? <p className='text-[#A7A7A7]'>Episodes: {this.state.anime.data.data.episodes}</p> : ''}
                  <p className='text-[#A7A7A7]'>{this.getGenres()}</p>
                </div>
                <p className='lg:text-[24px] '>{this.state.anime.data.data.synopsis}</p>
              </div>
              <div className="img__container relative faded faded-bottom ">
                <img className='object-cover mx-auto sm:mx-unset sm:w-[500px] sm:h-[600px] lg:mt-[25%]' src={this.state.anime.data.data.images.jpg.large_image_url} alt="" />
                <div className="img-filter absolute"></div>
              </div>
            </div>
            
            
            
            : <p className='top-[0px] l-0 bg-[#000] p-[20px] w-[100%] h-[1000px] z-[100]'>Loading</p>}
        </main>
    )
  }
}


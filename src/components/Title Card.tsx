import React, { Component } from 'react'

interface TitleCardProps {
    title: string;
    image: string;
    genres: any;
    id: string;
  }

export default class TitleCard extends Component<TitleCardProps, {}> {
  getGenres() {
     let genres = '';
    for(let i = 0; (i < 2) && (i < this.props.genres.length - 1); i++) {
      genres = genres + this.props.genres[i].name + ' / '
    }
    if(this.props.genres.length > 1) genres = genres + this.props.genres[this.props.genres.length - 1].name
    return genres
  }
  render() {
   
    return (
      <div className="title-card relative flex flex-col justify-between gap-[6%] w-[106px] w-[19%] lg:w-[19%] lg:max-w-[250px] md:min-w-0 h-fit min-h-[180px] lg:h-[250px] py-[20px]">
          <div className="container">
              <a href={`/title/${this.props.id}`}>
                <img src={this.props.image} alt="" className='w-[100%] h-[106.6px] lg:h-[250px]  lg:max-w-[250px] lg:min-h-[250px] rounded-[10px] object-cover' />
              </a>
              <div className="description w-[100%] px-[15px] py-[22px]">
                <p className="text-[10px] lg:text-[20px] lg:hidden">{this.props.title}</p>
                <p className="text-[10px] lg:text-[20px] text-[#969696] lg:hidden">{this.getGenres()} </p>
              </div>
          </div>
      </div>
    )
  }
}

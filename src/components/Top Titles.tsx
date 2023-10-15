import React, { Component } from 'react'
import TitleCard from './Title Card'


interface TopTitlesProps {
  anime: any,
}

export class TopTitles extends Component<TopTitlesProps, {}> {
  
  render() {
    let anime = this.props.anime.data.data.slice(0, 5)
    return (
      <div className='top-titles h-fit-content  pt-[20px] mx-auto max-w-[1320px]'>
        <h2 className='lg:text-[32px] py-[15px] pl-[15px]'>Top anime</h2>
        <div className="items__block  flex flex-unwrap overflow-x-auto lg:overflow-x-visible gap-[16px] h-[300px] lg:h-[350px] lg:w-[100%] lg:max-w-[1320px] mx-auto px-[15px]">
          {anime.map((e: any) => (
            <TitleCard title={e.title} image={e.images.jpg.large_image_url} genres={e.genres} id={e.mal_id}/>
          ))}
        </div>
      </div>
    )
  }
}

export default TopTitles


/*

*/
import React, { Component } from 'react'
import TitleCard from './Title Card'

interface NewTitlesProps {
  anime: any,
}

export class NewTitles extends Component<NewTitlesProps, {}> {
  
  render() {
    let anime = this.props.anime.data.data.slice(0, 5)
    return (
      <div className='new-titles h-fit-content  pt-[20px] mx-auto max-w-[1320px]'>
        <h2 className='lg:text-[32px] py-[15px] pl-[15px]'>Airing now</h2>
        <div className="items__block  flex flex-unwrap overflow-x-auto lg:overflow-x-visible gap-[17px] h-[300px] lg:h-[350px] lg:w-[100%] lg:max-w-[1320px] mx-auto px-[15px]">
          {anime.map((e: any) => (
            <TitleCard id={e.mal_id} title={e.title} image={e.images.jpg.large_image_url} genres={e.genres}/>
          ))}
        </div>
      </div>
    )
  }
}

export default NewTitles


/*

*/
import React, { Component } from 'react'
import TitleCard from './Title Card'

interface SearchResultsProps {
  anime: any,
  request: string;
}

export class SearchResults extends Component<SearchResultsProps, {}> {
  
  render() {
    let anime = this.props.anime
    return (
      <div className='search-results h-fit-content  pt-[20px] px-[15px] mx-auto max-w-[1320px] '>
        <h2 className='lg:text-[32px]'> Found "{decodeURI(this.props.request)}" results</h2>
        <div className="items__block flex flex-wrap gap-[1%] lg:gap-[10px] pb-[80px]">
          {anime.map((e: any) => (
            <TitleCard id={e.mal_id} title={e.title} image={e.images.jpg.large_image_url} genres={e.genres}/>
          ))}
        </div>
      </div>
    )
  }
}

export default SearchResults


/*

*/
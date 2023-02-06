import React from 'react'
import { useParams } from 'react-router-dom';
import SearchMovie from './SearchMovie';
import SearchSeries from './SearchSeries';

export default function SearchComponent() {
  const { searchtext } = useParams();
  // console.log(props);
  return (
    <section className="pt-24 min-h-screen">
      <SearchMovie searchtext={searchtext} />
      <SearchSeries searchtext={searchtext} />
    </section>
  )
}

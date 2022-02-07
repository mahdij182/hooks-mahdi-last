import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesList({moviListe , search}) {
  return (
  <div style={{display: 'flex', flexWrap: 'wrap'}} className='movielistContainer' >
{moviListe
.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()) )
.map((el, key)=> (
<MovieCard movie={el} key={el.id}    /> 
))}
  </div>
  )
}

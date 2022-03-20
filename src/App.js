import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Movie from './components/Movie';

function App() {

  const [popular,setPopular] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [activeGenre,setActiveGenre] = useState(0);

  const getApi = async()=>{

    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=64014009529ae1a36b4c632c5fc149e4&language=en-US&page=1');
    const movies = await response.data.results;
    setPopular(movies);
    setFiltered(movies);
    
  }
  
  useEffect(()=>{
    getApi();
    
  },[])
  

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className='popular-movies'>
        {filtered.map((movie)=>(
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;

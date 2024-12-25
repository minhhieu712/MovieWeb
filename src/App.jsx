import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch';
import { MovieProvider } from './context/MovieProvider';
function App() {
  const [movie, setMoive] = useState([]);
  const [movieRate, setMoiveRate] = useState([]);
  const [movieSearch, setMoiveSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMoiveSearch([])
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMoiveSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ])

      const data1 = await res1.json();
      const data2 = await res2.json();


      setMoive(data1.results);
      setMoiveRate(data2.results);
    }

    fechMovie();
  }, [])
  return (
    <>
      <MovieProvider>
        <div className='bg-black pb-10'>
          <Header onSearch={handleSearch} />
          {movieSearch.length > 0 ? <MovieSearch title={'ket qua tim kiem'} data={movieSearch} /> : (<>
            <Banner />
            <MovieList title={'Phim Hot'} data={movie} />
            <MovieList title={'Phim De Cu'} data={movieRate} />
          </>
          )}

        </div>
      </MovieProvider>

    </>
  )
}

export default App

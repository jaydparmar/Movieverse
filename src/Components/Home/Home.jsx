import React, { useEffect, useState } from 'react'
import "./Home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineRadiusBottomright } from 'react-icons/ai'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// const ApiKey = "b344471bf864db8656c45f955ac375fe"
const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=b344471bf864db8656c45f955ac375fe"
const url1 = "https://api.themoviedb.org/3/movie/popular?api_key=b344471bf864db8656c45f955ac375fe"
const url2 = "https://api.themoviedb.org/3/movie/now_playing?api_key=b344471bf864db8656c45f955ac375fe"
const url3 = "https://api.themoviedb.org/3/movie/top_rated?api_key=b344471bf864db8656c45f955ac375fe"
const url4="https://api.themoviedb.org/3/genre/movie/list?api_key=b344471bf864db8656c45f955ac375fe"

const imgurl = "https://image.tmdb.org/t/p/original"


let x = -1;
const Home = () => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },

  };
  const [upcomingmovies, setupcomingmovies] = useState([])
  const [popularmovies, setpopularmovies] = useState([])
  const [nowplayingmovies, setnowplayingmovies] = useState([])
  const [topratedmovies, settopratedmovies] = useState([])
  const [genre, setGenre] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  const handleClick = (movie) => {
    // console.log(movie);
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie ? movie.title : "")
        .then((url) => {
          // console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error))
    }
  };

  useEffect(() => {
    const FetchUpcoming = async () => {
      const data = await axios.get(url);
      setupcomingmovies(data.data.results);
      // console.log(data);
    };
    FetchUpcoming();
    const FetchPopular = async () => {
      const data= await axios.get(url1);
      setpopularmovies(data.data.results);
      x = Math.floor(Math.random() * (data.data.results.length-1));
      // console.log(data);
    };
    FetchPopular()

    const FetchNowPlaying = async () => {
      const data = await axios.get(url2);
      setnowplayingmovies(data.data.results);
      // console.log(data);
    };
    FetchNowPlaying()
    const Fetchtoprated = async () => {
      const data = await axios.get(url3);
      settopratedmovies(data.data.results);
      // console.log(data);
    };
    Fetchtoprated()
    const getAllGenre = async () => {
      const data = await axios.get(url4);
      setGenre(data.data.genres);
      // console.log(data);
    };

    getAllGenre();

  }, [])
  const Row = ({ title, arr = [] }) => (
    <div className='row'>
      <h2>{title}</h2>
      <div>
        {
          arr.map((item, index) => (
            <img className='card' key={index} onClick={() => handleClick(item)} src={`${imgurl}/${item.poster_path}`} alt="cover" />
          ))
        }
      </div>
    </div>
  )
  return (
    <section className = 'home' >
    <>
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: (x !== -1) ? `url(${`${imgurl}/${popularmovies[x].backdrop_path}`})` : 'rgb(16,16,16)',
            backgroundPosition: "center center"

          }}
        >
          {x !== -1 && <h1>{popularmovies[x].original_title}</h1>}
          {x !== -1 && <p>{popularmovies[x].overview}</p>}

          <div>
            <button><BiPlay /> Play </button>
            <button>My List <AiOutlinePlus /> </button>
          </div>
        </div>
      </>
      {trailerUrl && <Youtube style={{zIndex:"10000"}}className='trailer' videoId={trailerUrl} opts={opts} />}
        {upcomingmovies.length > 0 && <Row title={"Upcoming movies"} arr={upcomingmovies} />}
        {popularmovies.length > 0 && <Row title={"Popular Movies"} arr={popularmovies} />}
        {nowplayingmovies.length>0 && <Row title={"Now Playing Movies"} arr={nowplayingmovies} />}
        {topratedmovies.length > 0 && <Row title={"Top Rated Movies"} arr={topratedmovies} />} 
          <div className="takegenre">
        {genre.length>0 && genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        ))}
  </div>
  </section>
  )
}
export default Home

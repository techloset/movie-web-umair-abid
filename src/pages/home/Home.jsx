import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link} from 'react-router-dom';

const Home = () => {
    const [showResults, setShowResults] = useState([]);
 
 
  


    useEffect(() => {
        const apiKey = '3ab693af211e14968c3769990e2989fa';
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {


                setShowResults(data.results);
                console.log(data.results, 'results');
            })

    }, [])


    return (
        <div className="movie-list" >
            {showResults.map((data, index) => (
                <div className="movie-card" key={index}>
                    <Link to={`/detail/${encodeURIComponent(data.id)}`}>
                        <div className="movie-header">
                            <img
                                className="movie-poster"
                                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                                alt={data.title}
                            />
                        </div>
                    </Link>
                    <div className="movie-details">
                        <h2 className="movie-title">{data.title}</h2>
                     
                        <p className="movie-popularity"> <span className='span'>Id: </span> {data.id}</p>
                        <p className="movie-popularity"> <span className='span'>Popularity: </span> {data.popularity}</p>
                        <p className="movie-release"><span className='span'> Release Date: </span>{data.release_date}</p>
                
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home

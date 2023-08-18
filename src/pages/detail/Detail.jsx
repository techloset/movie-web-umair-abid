
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
const Detail = () => {
    const params = useParams()
    const { id } = params

  
    const [showResults, setShowResults] = useState({
        original_title: '', poster_path: '', homepage: '', release_date: '', revenue: Number,

        overview: '', popularity: '', status: '', tagline: '', budget: Number

    });
    const [language, setLanguage] = useState([])
    useEffect(() => {
        const apiKey = '3ab693af211e14968c3769990e2989fa';
        const movie_id = id

        const apiUrl = `  https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
        const reviewApi = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setLanguage(data.spoken_languages);
                console.log(data.spoken_languages[0].name
                    , 'results');
                setShowResults({
                    original_title: data.original_title, overview: data.overview, revenue: data.revenue, popularity: data.popularity,
                    poster_path: data.poster_path, homepage: data.homepage, release_date: data.release_date,
                    status: data.status, tagline: data.tagline, budget: data.budget,

                });

            })
       

    }, [id])
 
    return (
        <div className="movie-detail-container">
            <div className="movie-detail">
                <h2 className="detail-title">Movie Detail</h2>
                <div className="movie-info">
                    <div className="movie-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${showResults.poster_path}`}
                            alt={showResults.original_title}
                        />
                        <a className='hover:text-blue-400 underline ' href={showResults.homepage}>Home Page</a>
                    </div>
                    <div className="movie-details">
                        <div className='flexRow'>
                            <h3> Id:  </h3>  <h5 className='item'> {id}</h5>
                        </div>

                        <div className='flexRow'>
                            <h3> Title: </h3><h5 className='item'>{showResults.original_title}</h5>
                        </div>
                        <div className='flexRow'>
                            <div>

                                <h3> OverView: </h3><h5 className='item'>{showResults.overview}</h5>
                            </div>
                        </div>
                        <div className='flexRow'>
                            <h3> Release Date: </h3><h5 className='item'>{showResults.release_date}</h5>
                        </div>
                        <div className='flexRow'>
                            <h3> Revenue: $ </h3><h5 className='item'>{showResults.revenue}</h5>
                        </div>
                        <div className='flexRow'>
                            <h3> Budget: $</h3><h5 className='item'>{showResults.budget}</h5>
                        </div>
                        <div className='flexRow'>
                            <h3> Popularity: </h3><h5 className='item'>{showResults.popularity}</h5>
                        </div>
                        <div className='flexRow'>
                            <h3> Tagline: </h3><h5 className='item'>{showResults.tagline}</h5>
                        </div>
                        <div className='flexRow'>
                            <h3> Status: </h3><h5 className='item'>{showResults.status}</h5>
                        </div>
                        <div className='flexRow'>
                            {language.length >= 1 && (
                                <div className='flexRow'>
                                    <h3>Language:</h3>
                                    <h5 className='item'>{language[0].name}</h5>
                                </div>
                            )}
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail

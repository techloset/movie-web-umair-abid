


import React, { useState } from 'react'
import './SearchBar.css'
import { Link } from 'react-router-dom';
function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
        fetchSearchResults(event.target.value);
    };

    const fetchSearchResults = async query => {
        if (query) {
            const api_key = '3ab693af211e14968c3769990e2989fa'
            const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
            try {
                const response = await fetch(apiUrl)
                const data = await response.json()

                setSearchResults(data.results)




            } catch (error) {
                console.error('Error fetching search results:', error);
            }


        } else {
            setSearchResults([]);

        }
    }

    return (
        <div className="movie-list" >
            <input
                type="text"
                placeholder="Search movie..."
                className="py-2 px-3 rounded-md border-black border-2 flex flex-row justify-center focus:ring focus:ring-yellow-400"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="movie-list" >
                {searchResults.map((data, index) => (
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

        </div>
    )
}


export default SearchBar
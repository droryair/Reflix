import React, { Component } from 'react';
class MovieDetail extends Component{

    render(){
        const movie = this.props.movie
        return(
            <div>
                <img className="detail-movie-image" src={movie.img}  alt=".."></img>
                <div>Year: {movie.year}</div>
                <p className="descrShort" >{movie.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail;
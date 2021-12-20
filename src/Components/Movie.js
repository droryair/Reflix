import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {

    determineButton(m) {
        if (m.isRented) {
            return '-'
        } else {
            return '+'
        }
    }
    rentMovie(m) {
        this.props.rentMovie(m)
    }

    render() {
        const m = this.props.movie
        return (
            <div className="movie-container" key={m.id}>
                <button id={m.id} className="rent-movie" onClick={() => this.rentMovie(m)}>
                    {this.determineButton(m)}
                </button>
                <Link to={`/movies/${m.id}`}>
                    <img src={m.img} alt={m.title} className='movie-image'></img>
                </Link>
                <span>
                    {m.title}
                </span>
            </div>



        )
    }
}

export default Movie;
import React, { Component } from 'react';
import Movie from './Movie'

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            rentedCounter: 0,
            searchValue: "",
            budget: 10,
            rentingCost: 3
        }
    }

    handleRentedCounter = async () => {
        const rentedArr = this.props.movies.filter(m => m.isRented)
        await this.setState({ rentedCounter: rentedArr.length })
        await this.setState({ budget: 10 - (rentedArr.length * this.state.rentingCost) })
    }


    rentMovie = async (movie) => {
        if (!movie.isRented && this.state.budget - this.state.rentingCost > 0) {
            await this.props.rentMovie(movie.id)
            await this.handleRentedCounter()
        } else if (movie.isRented) {
            await this.props.rentMovie(movie.id)
            await this.handleRentedCounter()
        } else {
            alert("You don't have enough budget to rent more movies. Please return some movies to rent different ones.")
        }
    }

    searchMovies = (e) => {
        const inputValue = e.target.value.toLowerCase()
        if (inputValue) {
            this.setState({ searchValue: inputValue })
        } else {
            this.setState({ searchValue: "" })
        }
    }

    render() {
        const movies = this.props.movies
        return (
            <div>
                <div id='input'>
                    <input placeholder="What would you like to watch next?" onChange={this.searchMovies}></input>
                </div>
                <div id='budget'>
                    <span className="budget">Your Budget: {this.state.budget}</span>
                </div>
                {this.state.rentedCounter ?
                    <div >
                        <h3>Rented section</h3>
                        <div className="movies-container">
                            {movies.filter(m => m.isRented && m.title.toLowerCase().includes(this.state.searchValue)).map(m => {
                                return (
                                    <Movie key={m.id} movie={m} rentMovie={this.rentMovie} />
                                )

                            })}
                        </div>
                        <hr />
                    </div>
                    : null}
                <div className="movies-container">
                    {movies.filter(m => !m.isRented && m.title.toLowerCase().includes(this.state.searchValue)).map(m => {
                        return (
                            <Movie key={m.id} movie={m} rentMovie={this.rentMovie} />
                        )
                    })}
                </div>

            </div>
        )
    }
}


export default Catalog;
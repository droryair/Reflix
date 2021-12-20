import React, { Component } from 'react';
import Movie from './Movie'

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            rentedCounter: 0,
            searchValue: "",
            budget: 10,
            rentingCost: 1
            // username: ''
        }
    }

    /**
     * runs once when the component is first rendered.
     */
    componentDidMount(){
        this.getUserName()
    }


    /**
     * filters the rented movies, and updates the state's 'rented counter' and 'budget'.
     */
    handleRentedCounter = async () => {
        const rentedArr = this.props.movies.filter(m => m.isRented)
        await this.setState({ rentedCounter: rentedArr.length })
        await this.setState({ budget: 10 - (rentedArr.length * this.state.rentingCost) })
    }


    getUserName = () => {
        // walk-around for gettin the query param "id"
        const currentURL = window.location.href
        if (currentURL.includes('id')) {
            const id = currentURL.substring(currentURL.indexOf('=') + 1)
            const users = this.props.users
            const user = users.filter(u => u.id === id)
            this.props.getUsername(user)
        }
        else{
            this.props.getUsername('')
        }
    }



    /**
     * checks if the movie is rented
     * changes the state's "rented counter" and the movie's "is rented" properties accordingly.
     * @param {dict} movie movie to be rented
     */
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

    /**
     * updates the state's "search value" according to the event.
     * @param {*} e event
     */
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
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Routes } from 'react-router-dom'

import './App.css';
import Landing from './Components/Landing'
import Catalog from './Components/Catalog'
import MovieDetail from './Components/MovieDetail';
import ErrorPage from './Components/ErrorPage';
import u0_icon from '../src/Assets/users_icons/u_1.png'
import u1_icon from '../src/Assets/users_icons/u_2.png'
import u2_icon from '../src/Assets/users_icons/u_3.png'
import u3_icon from '../src/Assets/users_icons/u_4.png'
import u4_icon from '../src/Assets/users_icons/u_5.png'
import u5_icon from '../src/Assets/users_icons/u_6.png'

class App extends Component {
  constructor() {
    super()
    this.state =

    {
      users: [
        { id: "u0", name: 'David', budget: 10, imgUrl: u0_icon },
        { id: "u1", name: 'Anna', budget: 10, imgUrl: u1_icon },
        { id: "u2", name: 'She-ra', budget: 10, imgUrl: u2_icon },
        { id: "u3", name: 'Susan', budget: 10, imgUrl: u3_icon },
        { id: "u4", name: 'Susan', budget: 10, imgUrl: u4_icon },
        { id: "u5", name: 'Susan', budget: 10, imgUrl: u5_icon },
      ],
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
    }
  }

  rentMovie = async (movieId) => {
    const tempMovies = this.state.movies
    const rentedMovie = tempMovies.find(m => m.id === movieId)
    rentedMovie.isRented = !rentedMovie.isRented
    await this.setState({ movies: tempMovies })
  }


  render() {
    return (
      <Router>
        <div className="App">

          {/* <div className="font-tag"> <Link to='/'>Home</Link></div>
            <div className="font-tag"> <Link to='/catalog'>Catalog</Link></div> */}
          <h1 id="reflix">REFLIX</h1>

          <div>
            <Routes>

              <Route path="/" element={<Landing users={this.state.users} />}></Route>
              <Route path='/catalog' element={<Catalog users={this.state.users} movies={this.state.movies} rentMovie={this.rentMovie} />} />

              {this.state.movies.map(m => {
                return (
                  <Route key={m.id} path={`/movies/${m.id}`} element={<MovieDetail movie={m} />}></Route>
                )
              })}

              <Route path="*" element={<ErrorPage />} />

            </Routes>
          </div>

          <div className="nav-bar">
            <div id="buttons">
              <Link to='/'>Home</Link>
              <Link to='/catalog'>Catalog</Link>
            </div>
          </div>

        </div>
      </Router>
    );
  }

}


export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


class Landing extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                <div className='headline'>
                    <h2>Who's watching?</h2>
                </div>
                {/* <div id="users-container"> */}
                <div id='users-icons'>
                    {users.map(u => {
                        return (
                            // <div id="users-icons">
                                <div className="user-div" id={u.id} key={u.id} >
                                    <Link to={`/catalog/?id=${u.id}`}>
                                        <img src={u.imgUrl} alt={u.name}></img>
                                        {/* className="userImage" */}
                                        <p>{u.name}</p>
                                    </Link>
                                </div>
                            // </div>
                        )
                    })}
                {/* </div> */}
                </div>
            </div>

        )
        // return (
        //     <div>
        //         <h1>Who's Watching?</h1>
        //         <div id="users-container">
        //             {users.map(u => {
        //                 return (
        //                     <span className="user-info">
        //                         <div className="user-box" id={u.id} key={u.id} > <Link to={`/catalog/?id=${u.id}`}> <img className="userImage" src={u.imgUrl} alt=".."></img> </Link> {u.name} </div>
        //                     </span>
        //                 )
        //             })}
        //         </div>
        //     </div>

        // )
    }
}

export default Landing;
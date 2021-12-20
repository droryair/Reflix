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
                <div id='users-icons'>
                    {users.map(u => {
                        return (
                            <div className="user-div" id={u.id} key={u.id} >
                                {/* <Link to={`/catalog/?id=${u.id}`}> */}
                                <Link to={{
                                    pathname: `/catalog/?id=${u.id}`,
                                    state: {
                                        userid: u.id
                                    }
                                }}>
                                    <img src={u.imgUrl} alt={u.name}></img>
                                    <p>{u.name}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div >

        )
    }
}

export default Landing;
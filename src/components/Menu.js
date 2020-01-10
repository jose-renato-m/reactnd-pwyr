import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

class Menu extends Component {
    render() {
        const { users, authedUser } = this.props
        const { name, avatarURL } = users[authedUser]

        return (
            <div className='ui fixed inverted menu'>
                <div className='ui container'>
                    <div className='item' />
                    <NavLink
                        to='/'
                        exact
                        className='header item'
                        activeClassName='active'
                    >
                        <Image
                            src='/would-you-rather.png'
                            style={{ width: '50px', marginRight: '5px' }}
                         />
                         Home
                    </NavLink>
                    <NavLink to='/add' exact className='item' activeClassName='active'>
                        New Question
                    </NavLink>
                    <NavLink
                        to='leaderboard'
                        exact
                        className='item'
                        activeClassName='active'
                    >
                        Leader Board
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default connect()(Menu)
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Menu extends Component {
    render() {
        const { users, authedUser } = this.props
        const { name, avatarURL } = users[authedUser]

        return (
            <div className='ui fixed inverted menu'>
                <div className='ui container'>
                    <div className='item' />
                </div>
            </div>
        )
    }
}

export default connect()(Menu)
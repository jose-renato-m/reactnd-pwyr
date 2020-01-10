import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
    render() {
        const { users, authedUser } = this.props
        const { name, avatarURL } = users[authedUser]

        return (

        )
    }
}

export default connect()(Menu)
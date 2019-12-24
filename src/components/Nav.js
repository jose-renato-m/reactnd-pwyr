import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Menu,
    Responsive,
    Image,
    Grid,
    Button,
    Container,
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    handleLogout = e => {
        e.preventDefault()
        this.props.setAuthedUser(null)
    }

    render() {
        const { authedUser, users } = this.props

        return (
            <Container>
                <Responsive as={Menu} minWidth={651} pointing secondary>
                    <Menu.Item name='home' as={NavLink} to='/' exact />
                    <Menu.Item name='new poll' as={NavLink} to='/add' />
                    <Menu.Item name='leader board' as={NavLink} to='/leaderboard' />
                </Responsive>
            </Container>
        )
    }
}

export default connect()(Nav)
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
}

export default connect()(Nav)
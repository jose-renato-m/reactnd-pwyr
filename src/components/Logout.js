import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {
    componentDidMount() {
        this.props.setAuthedUser(null)
    }
}

export default connect()(Logout)
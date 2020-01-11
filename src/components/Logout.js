import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {
    componentDidMount() {

    }
}

export default connect()(Logout)
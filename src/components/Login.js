import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Grid,
    Header,
    Image,
    Form,
    Loader,
    Dimmer,
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

export class Login extends Component {
    state = {
        loading: false
    }
    handleLoading = () => {
        this.setState({ loading: true })
    }

    render() {
        return (
            <Fragment>
                <Segment.Group>
                    
                </Segment.Group>
            </Fragment>
        )
    }
}

export default Login
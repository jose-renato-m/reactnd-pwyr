import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Header,
    Grid,
    Divider,
    Form,
    Dimmer,
    Loader,
} from 'semantic-ui-react'
import { handleSaveQuestion } from '../actions/questions'

export class NewPoll extends Component {
    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        handleSaveQuestion: PropTypes.func.isRequired,
    }
    state = {
        validSubmit: false,
        isLoading: false,
        option1: '',
        option2: '',
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    } 
    handleSubmit = (e) => {
       e.preventDefault()
       const { authedUser, handleSaveQuestion }  = this.props
       const { option1, option2 } = this.state
    }
}

export default connect()(NewPoll)
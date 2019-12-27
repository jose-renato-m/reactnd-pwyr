import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/users'

export class PollQuestion extends Component {
    static propTypes = {
        authedUser: PropTypes.string.isRequired
        handleSaveQuestionAnswer: PropTypes.func.isRequired,
        question: PropTypes.object.isRequired,   
    }
    state = {
        value: ''
    }

    handleChange = (e, { value }) => this.setState({ value })

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.value !== '') {
            
        }
    }
}

export default connect()(PollQuestion)
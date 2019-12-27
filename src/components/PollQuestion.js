import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Header,
    Button,
    Form,
    Radio,
} from 'semantic-ui-react'
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
            const { authedUser, question, handleSaveQuestionAnswer } = this.props
            handleSaveQuestionAnswer(authedUser, question.id, this.state.value)
        }
    }

    render() {
        const { question } = this.props
        const disabled = this.state.value === '' ? true : false

        return (

        )
    }
}

export default connect()(PollQuestion)
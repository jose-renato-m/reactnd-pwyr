import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionView extends Component {
    state = { votedForOption: null, message: { hidden: true, content: '' }}

    handleChange = (e, data) => {
        this.setState({ votedForOption: data.value})
    }

    handleClick = () => {
        if (!this.state.votedForOption) {
            this.setState({
                message: {
                    hidden: false,
                    content: 'Please select an option'
                }
            })
            return
        } else {
            this.setState({
                message: {
                    hidden: true,
                    content: ''
                }
            })
        }
    }
}



export default connect()(QuestionView)
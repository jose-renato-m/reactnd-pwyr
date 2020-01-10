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

        const qid = this.props.match.params.question_id
        const answer = this.state.votedForOption
        const { authedUser, handleAnswerQuestion } = this.props
        handleAnswerQuestion({ authedUser, qid, answer })
    }

    questionResult = () => {
        const qid = this.props.match.params.question_id
        const { authedUser, questions, users } = this.props

        const question = questions[qid]
        if (!question) {
            return
        }
    }
}



export default connect()(QuestionView)
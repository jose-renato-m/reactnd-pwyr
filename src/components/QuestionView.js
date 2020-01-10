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

        const user = users[question.author]

        const votedForOptionOne = question.optionOne.votes.includes(authedUser)
        const votedForOptionTwo = question.optionTwo.votes.includes(authedUser)
        const voteCountOptionOne = question.optionOne.votes.length
        const voteCountOptionTwo = question.optionTwo.votes.length
        const totalVotes = voteCountOptionOne + voteCountOptionTwo
        const votePercentOptionOne =
            Math.round((voteCountOptionOne / totalVotes) * 10000) / 100
        const votePercentOptionTwo =
            Math.round((voteCountOptionTwo / totalVotes) * 10000) / 100
    }
}



export default connect()(QuestionView)
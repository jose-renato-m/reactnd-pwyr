import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionNew extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        message: { hidden: true, content: ''}
    }

    handleOnChange = (e, data) => {
        this.setState({ [data.id]: data.value })
    }

    handleClick = async () => {
        const { optionOne: optionOneText, optionTwo: optionTwoText } = this.state
        const { authedUser: author, history, resetActiveIndexToZero } = this.props

        if (!optionOneText || !optionTwoText) {
            this.setState({
                message: {
                    hidden: false,
                    content: 'Please enter both Option One Text and Option Two Text'
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

export default connect() (QuestionNew)
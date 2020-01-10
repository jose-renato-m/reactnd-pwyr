import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Card,
    Form,
    Image,
    Input,
    Message,
} from 'semantic-ui-react'
import { handleAddQuestion } from '../actions/questions'

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
        await this.props.handleAddQuestion({
            optionOneText,
            optionTwoText,
            author,
        })
        resetActiveIndexToZero()
        history.push('/')
    }

    render() {
        const { authedUser, users } = this.props
        const user = users[authedUser]
        const { message } = this.state

        return (
            <div>
                <Card.Group centered>
                    <Card style={{ width: '400px' }}>
                        <Card.Content>
                            <Image floated='right' size='tiny' src={user.avatarURL} />
                            <Card.Header>{user.name} asks</Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}

export default connect() (QuestionNew)
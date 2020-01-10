import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    Image,
    Segment,
    Label,
    Progress,
    Button,
    Form,
    Radio,
    Message,
} from 'semantic-ui-react'
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
        
        return (
            <Card key={qid} style={{ width: '400px'}}>
                <Card.Content>
                    <Image floated='right' size='tiny' src={user.avatarURL} />
                    <Card.Header>{user.name} asks</Card.Header>
                    <div>Would you rather</div>
                    <Card.Description>
                        <Segment>
                            {votedForOptionOne && (
                                <Label as='a' color='red' ribbon='right'>
                                    Your Vote
                                </Label>
                            )}
                            <p>{question.optionOne.text}</p>
                            <Progress percent={votePercentOptionOne} progress>
                                {voteCountOptionOne} out of {totalVotes} votes
                            </Progress>
                        </Segment>
                        <Segment>
                            {votedForOptionTwo && (
                                <Label color='red' ribbon='right'>
                                    Your Vote
                                </Label>
                            )}
                            <p>{question.optionTwo.text}</p>
                            <Progress percent={votePercentOptionTwo} progress>
                                {voteCountOptionTwo} out of {totalVotes} votes
                            </Progress>
                        </Segment>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

    questionAnswer = () => {
        const qid = this.props.match.params.question_id
        const { questions, users } = this.props

        const question = questions[qid]
        if (!question) {
            return
        }

        const user = users[question.author]
        const { message } = this.state

        return (
            <Card key={qid} style={{ width: '400px' }}>
                <Card.Content>
                    <Image floated='right' size='tiny' src={user.avatarURL} />
                    <Card.Header>{user.name} asks</Card.Header>
                </Card.Content>
            </Card>
        )
    }
}



export default connect()(QuestionView)
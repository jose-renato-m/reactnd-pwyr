import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Card,
    Image,
    Label,
    Menu,
    Tab,
} from 'semantic-ui-react'

class QuestionList extends Component {
    cardItemsPerRow = 2

    getCardsFromQuestions = (filterLogic) => {
        const { questions, users } = this.props
        const cards = Object.keys(questions)
            .filter(filterLogic)
            .map((qid) => {
                const question = questions[qid]
                const user = users[question.author]
                return (
                    <Card key={qid}>
                        <Card.Content>
                            <Image floated='right' size='tiny' src={user.avatarURL} />
                        </Card.Content>
                    </Card>
                )
            })        
    }
}

export default connect()(QuestionList)
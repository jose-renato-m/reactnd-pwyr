import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    Image,
    Label,
    Grid,
} from 'semantic-ui-react'

class Leaderboard extends Component {
    cardItemsPerRow = 3

    render() {
        const { users } = this.props

        const awardColors = ['red', 'orange', 'yellow']
        let rank = 0
        let rankSuffix = ['st', 'nd', 'rd']

        const usersWithScore = {}
        Object.keys(users).forEach((uid) =>{
            const user = users[uid]
            const answeredQuestions = Object.keys(user.answers).length
            const createdQuestions = user.questions.length
            user.score = answeredQuestions + createdQuestions
            usersWithScore[uid] = user
        })

        const usersWithScoreSorted = {}
        Object.keys(users)
            .map((uid) => users[uid])
            .sort((a, b) => b.score - a.score)
            .forEach((user) => {
                usersWithScoreSorted[user.id] = user
            })

        const userCards = Object.keys(usersWithScoreSorted).map((uid) => {
            const user = usersWithScoreSorted[uid]
            let label = null
            let awardColor = awardColors[rank++]
            if (awardColor) {
                label = {
                    as: 'div',
                    corner: 'left',
                    icon: 'trophy',
                    color: awardColor,
                }
            }
            const answeredQuestions = Object.keys(user.answers).length
            const createdQuestions = user.questions.length
            const score = answeredQuestions + createdQuestions            
        })
        return (
            <Card key={uid}>
                <Image src={user.avatarURL} label={label} />
                <Card.Content>
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta>
                        Rank &nbsp
                    </Card.Meta>
                </Card.Content>
            </Card>
        )
    }    
}

function mapStateToProps({ users }) {
    const leaderboardData = Object.values(users)
        .map((user) => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total)
        .reverse()
        .slice(0, 3)
    return {
        leaderboardData
    }
}

export default connect(mapStateToProps)(Leaderboard)
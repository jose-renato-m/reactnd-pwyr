import React, { Component, Fragment } from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Grid,
    Header,
    Image,
    Label,
    Divider,
} from 'semantic-ui-react'

const trophyColor = ['yellow', 'grey', 'orange']

export class Leaderboard extends Component {
    static propType = {
        leaderboardData: PropType.array.isRequired
    }
    render() {
        const { leaderboardData } = this.props

        return (
            <Fragment>
                {leaderboardData.map((user, idx) => (
                    <Segment.Group key={user.id}>
                        <Label corner='left' icon='trophy' color={trophyColor[idx]} />
                        <Grid divided padded>
                            <Grid.Row>
                                <Grid.Column width={4} verticalAlign='middle'>
                                    <Image src={user.avatarURL} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment.Group>
                ))}
            </Fragment>
        )
    }
}

export default connect()(Leaderboard)
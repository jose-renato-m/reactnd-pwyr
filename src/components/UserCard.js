import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Segment,
    Header,
    Grid,
    Image,
} from 'semantic-ui-react'
import PollQuestion from './PollQuestion'
import PollResult from './PollResult'
import PollTeaser from './PollTeaser'
import { colors } from '../utils/supports'

export class UserCard extends Component {
    static propTypes = {
        question: PropTypes.object,
        author: PropTypes.object,
        pollType: PropTypes.string,
        unanswered: PropTypes.bool,
        question_id: PropTypes.string,
    }
    render() {
        const {
            author,
            question,
            pollType,
            badPath,
            unanswered = null
        } = this.props

        if (badPath === true) {
          <Redirect to='/questions/bad_id' />  
        }

        const tabColor = unanswered === true ? colors.green : colors.blue
        const borderTop = unanswered === null ? `1px solid ${colors.grey}` : `2px solid ${tabColor.hex}`

        return (
            <Segment.Group>
                <Header
                    as='h5'
                    textAlign='left'
                    block
                    attached='top'
                    style={{ borderTop: borderTop }}
                >
                    {author.name} asks:
                </Header>

                <Grid divided padded>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Image src={author.avatarURL} />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment.Group>
        )
    }
}

export default connect()(UserCard)
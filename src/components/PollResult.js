import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Header,
    Segment,
    Progress,
    Label,
    Button,
    Icon,
} from 'semantic-ui-react'
import { styles } from '../utils/supports'

const yourVoteLabel = () => (
    <Label color='orange' ribbon='right' className='vote'>
        <Icon name='check circle outline' size='big' className='compact' />
        <div style={{ float: 'right' }}>
            Your
            <br />
            Vote
        </div>
    </Label>
)

export class PollResult extends Component {
    
}

export default withRouter(connect()(PollResult))
import React, { Component, Fragment } from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'

export class Leaderboard extends Component {
    static propType = {
        leaderboardData: PropType.array.isRequired
    }
    render() {
        const { leaderboardData } = this.props
        
        return (

        )
    }
}

export default connect()(Leaderboard)
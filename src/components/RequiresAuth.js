import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class RequiresAuth extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.boolean,
        redirect: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._checkAndRedirect()
    }

    componentDidUpdate() {
        this._checkAndRedirect()
    }

    _checkAndRedirect() {
        const { isAuthenticated, redirect } = this.props

        if (!isAuthenticated) {
            redirect()
        }
    }

}

return connect()(RequiresAuth)
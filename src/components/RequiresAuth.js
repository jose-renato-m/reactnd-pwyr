import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class RequiresAuth extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.boolean,
        redirect: PropTypes.func.isRequired
    }

}

return connect()(RequiresAuth)
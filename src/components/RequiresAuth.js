import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
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
    
        render() {
            return (
                <div>
                    { this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null }
                </div>
            )
        }
    
    }
    
    return connect()(RequiresAuth)
}
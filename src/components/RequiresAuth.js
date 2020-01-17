import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

export default function (ComposedComponent) {
    class RequiresAuth extends React.Component {
        static propTypes = {
            isAuthenticated: PropTypes.bool            
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated ? <ComposedComponent {...this.props} /> 
                    : <Redirect to={{ pathname: '/login', state: { referrer: window.location.pathname}}} />}
                </div>
            )
        }    
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.authedUser.isAuthenticated
        }
    }

    const mapDispatchToProps = dispatch => bindActionCreators({
        redirect: () => push('/login')
    }, dispatch)

    RequiresAuth.propTypes = PropTypes
    
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(RequiresAuth)
}
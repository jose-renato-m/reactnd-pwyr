import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

export default withRouter(connect()(PollResult))
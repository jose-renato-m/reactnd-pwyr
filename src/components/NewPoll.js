import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'

export default connect()(NewPoll)
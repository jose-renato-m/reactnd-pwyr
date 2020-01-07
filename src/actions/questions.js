import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { userAddedQuestion, userAnsweredQuestion } from './users'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function loadQuestions (questions) {
    return {
        type: LOAD_QUESTIONS,
        questions,
    }
}

export function addAnswerToQuestion(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            (question) => {
                dispatch(addQuestion(question))
                dispatch(addQuestionToUser(question))
            }   
        )
    }
}
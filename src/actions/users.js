import { saveQuestionAnswer } from '../utils/api'
import { addAnswerToQuestion } from './questions'

export const LOAD_USERS = 'LOAD_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function loadUsers (users) {
    return {
        type: LOAD_USERS,
        users,
    }
}

function addAnswerToUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer,
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    
}
import { saveQuestion } from '../utils/api'
import { addQuestionToUser } from './users'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function loadQuestions (questions) {
    return {
        type: LOAD_QUESTIONS,
        questions,
    }
}
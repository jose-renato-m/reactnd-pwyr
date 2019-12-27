import { saveQuestion } from '../utils/api'
import { addQuestionToUser } from './users'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'

export function loadQuestions (questions) {
    return {
        type: LOAD_QUESTIONS,
        questions,
    }
}
import { saveQuestion } from '../utils/api'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'

export function loadQuestions (questions) {
    return {
        type: LOAD_QUESTIONS,
        questions,
    }
}
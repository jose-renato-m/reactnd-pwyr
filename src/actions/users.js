import { saveQuestionAnswer } from '../utils/api'
import { addAnswerToQuestion } from './questions'

export const LOAD_USERS = 'LOAD_USERS'

export function loadUsers (users) {
    return {
        type: LOAD_USERS,
        users,
    }
}
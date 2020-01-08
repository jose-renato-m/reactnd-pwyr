import { 
    LOAD_USERS,
    USER_ADDED_QUESTION,
    USER_ASWERED_QUESTION,
} from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case LOAD_USERS:
            return {
                ...state,
                ...action.users
            }
        case USER_ADDED_QUESTION:            
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case ADD_QUESTION_TO_USER:
            const { id, author } = action

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            }
        default:
            return state
    }
}
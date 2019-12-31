import { 
    LOAD_USERS,
    ADD_ANSWER_TO_USER,
    ADD_QUESTION_TO_USER,
} from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case LOAD_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}
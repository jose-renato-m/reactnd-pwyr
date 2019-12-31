import { LOAD_QUESTIONS
         ADD_ANSWER_TO_QUESTION,
         ADD_QUESTION,
} from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case LOAD_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_ANSWER_TO_QUESTION:

            return {
                
            }
        default:
            return state
    }
}
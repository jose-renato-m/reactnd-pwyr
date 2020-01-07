export const LOAD_USERS = 'LOAD_USERS'
export const USER_ANSWERED_QUESTION = 'USER_ANSWERED_QUESTION'
export const USER_ADDED_QUESTION = 'USER_ADDED_QUESTION'

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
    return (dispatch) => {
        dispatch(addAnswerToUser(authedUser, qid, answer))
        dispatch(addAnswerToQuestion(authedUser, qid, answer))

        return saveQuestionAnswer(authedUser, qid, answer).catch((e) => {
            console.warn('Error in handleSaveQuestionAnswer: ', e)
        })
    }
}

export function addQuestionToUser({ id, author }) {
    return {
        type: ADD_QUESTION_TO_USER,
        id,
        author,
    }
}
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action)
    console.groupEnd()
}
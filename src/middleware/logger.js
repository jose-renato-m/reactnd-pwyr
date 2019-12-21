const logger = (store) => (next) => (action) => {
    console.group(action.type)

    console.groupEnd()
}
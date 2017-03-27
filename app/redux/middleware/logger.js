/* eslint-disable */
/**
 * Logs previous and current state for every action call
 * @param getState
 * @returns {Function}
 */
export default function logger({ getState }) {
    return next => (action) => {
        console.log('dispatching', action)
        const result = next(action)

        //console.log('next state', getState())
        return result
    }
}

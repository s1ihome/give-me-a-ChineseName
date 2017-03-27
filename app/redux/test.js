import {createAction, handleActions} from 'redux-actions'
import update from 'react-addons-update'
import dispatchReject from '../util/dispatchReject'
import skill from '../util/fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const CHINESE_SKILL_SECTION = 'CHINESE_SKILL_SECTION'

// ------------------------------------
// Actions
// ------------------------------------
export const receiveSection = createAction(CHINESE_SKILL_SECTION)

const fetchSection = payload => async (dispatch) => {
    try {
        const response = await skill.get('Teacher/Get?t=25', payload)
        dispatch(receiveSection(response))
        // code = 200
    } catch (e) {
        // code >= 400
        dispatchReject(e)
        console.log(e, 'reject');
    }
}

export const actions = {
    fetchSection
}

// ------------------------------------
// reducers
// ------------------------------------

export default handleActions({
    [CHINESE_SKILL_SECTION]: (state, {payload}) => {
        return update(state, {
            section: {$set: payload}
        })
    },
}, {
    section: {}
})

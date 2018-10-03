import { USER } from '../actions/types';

const INITIAL_STATE = {
    name: 'Daniel',
    location: {
        state: 'MG',
        city: 'BH',
    },
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER.VANILLA_UPDATE_DEEP:         
            return Object.assign({}, state, {
                location: Object.assign({}, state.location, {
                    state: payload
                })
            });
        case USER.VANILLA_SET_NAME:
            return { ...state, name: payload } 
        default:
            return state;
    }
};
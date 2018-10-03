import { fromJS } from 'immutable';
import { USER } from '../actions/types';

const INITIAL_STATE = fromJS({
    name: 'Daniel',
    location: {
        state: 'MG',
        city: 'BH',
    },
});

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER.IMMUTABLE_UPDATE_DEEP:
            return state.mergeIn(['location', 'state'], payload);
        case USER.IMMUTABLE_SET_NAME:
            return state.merge({ name: payload });
        default:
            return state;
    }
};

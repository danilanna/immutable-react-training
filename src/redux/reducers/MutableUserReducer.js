import { USER } from '../actions/types';

const INITIAL_STATE = {
    name: 'Daniel',
    location: 'Brazil',
    foo: {
        bar: 'bar',
        baz: 'baz',
    },
    list: [ 1, 2, 3, 4, 5 ]
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER.MUTABLE_UPDATE_DEEP:
            return {
                ...state,
                foo: {
                    ...state.foo,
                    bar: payload,
                }
            }
        case USER.MUTABLE_SET_NAME:
            return { ...state, name: payload }
        default:
            return state;
    }
};
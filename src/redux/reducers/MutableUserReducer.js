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
            // Crap! Only foo is copied, baz wont!
            // return Object.assign({}, state, {
            //     location: 'US',
            //     foo: {
            //         bar: payload
            //     }
            // });

            // All other interests are copied
            // Object.assign
            // return Object.assign({}, state, {
            //     foo: Object.assign({}, state.foo, {
            //         bar: payload
            //     })
            // });

            // SPREAD
            return {
                ...state,
                foo: {
                    ...state.foo,
                    bar: payload,
                }
            }
        case USER.MUTABLE_SET_NAME:
            // Object.assign
            // return Object.assign({}, state, {
            //     name: payload,
            // });

            // SPREAD
            return { ...state, name: payload }
        default:
            return state;
    }
};
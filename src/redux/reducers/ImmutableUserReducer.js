import { USER } from '../actions/types';
import * as Immutable from 'immutable';

const INITIAL_STATE = Immutable.fromJS({
    name: 'Daniel',
    location: 'Brazil',
    foo: {
        bar: 'bar',
        baz: 'baz',
    },
    list: [ 1, 2, 3, 4, 5 ]
});

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER.IMMUTABLE_UPDATE_DEEP:
            return state.mergeIn(['foo', 'bar'], payload);
        case USER.IMMUTABLE_SET_NAME:
            return state.merge({ name: payload });
        default:
            return state;
    }
};
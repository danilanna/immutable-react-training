import {fromJS} from 'immutable';
import { USER } from '../actions/types';

const INITIAL_STATE = fromJS({
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
            return state.setIn(['foo', 'bar'], payload);
        case USER.IMMUTABLE_SET_NAME:
            return state.set('name', payload);
        default:
            return state;
    }
};
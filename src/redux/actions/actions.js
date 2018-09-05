import { USER } from './types';

export const updateMutableDeep = payload => ({
    type: USER.MUTABLE_UPDATE_DEEP,
    payload
});

export const setMutableName = payload => ({
    type: USER.MUTABLE_SET_NAME,
    payload
});

export const updateImmutableDeep = payload => ({
    type: USER.IMMUTABLE_UPDATE_DEEP,
    payload
});

export const setImmutableName = payload => ({
    type: USER.IMMUTABLE_SET_NAME,
    payload
});
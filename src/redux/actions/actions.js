import { USER } from './types';

export const updateMutableDeep = payload => ({
    type: USER.MUTABLE_UPDATE_DEEP,
    payload
});

export const setMutableName = payload => ({
    type: USER.MUTABLE_SET_NAME,
    payload
});
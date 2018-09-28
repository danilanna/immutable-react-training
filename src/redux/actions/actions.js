import { USER } from './types';

export const updateVanillaDeep = payload => ({
    type: USER.VANILLA_UPDATE_DEEP,
    payload
});

export const setVanillaName = payload => ({
    type: USER.VANILLA_SET_NAME,
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
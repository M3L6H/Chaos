import * as RealmsUtil from "../util/realms_util";

export const RECEIVE_REALM = "RECEIVE_REALM";
export const REMOVE_REALM = "REMOVE_REALM";
export const RECEIVE_REALMS_ERRORS = "RECEIVE_REALMS_ERRORS";

const receiveRealm = ({ realm }) => ({
    type: RECEIVE_REALM,
    realm
});

const removeRealm = (realmId) => ({
    type: REMOVE_REALM,
    realmId
});

const receiveRealmsErrors = (errors) => ({
    type: RECEIVE_REALMS_ERRORS,
    realms: errors
});

export const fetchRealm = realmId => dispatch => (
    RealmsUtil.fetchRealm(realmId)
        .then(res => dispatch(receiveRealm(res)))
        .fail(jqXHR => receiveRealmsErrors(jqXHR.responseJSON))
);

export const createRealm = realm => dispatch => (
    RealmsUtil.createRealm(realm)
        .then(res => dispatch(receiveRealm(res)))
        .fail(jqXHR => receiveRealmsErrors(jqXHR.responseJSON))
);

export const deleteRealm = realmId => dispatch => (
    RealmsUtil.deleteRealm(realmId)
        .then(res => dispatch(removeRealm(res)))
        .fail(jqXHR => receiveRealmsErrors(jqXHR.responseJSON))
);

export const updateRealm = realm => dispatch => (
    RealmsUtil.updateRealm(realm)
        .then(res => dispatch(receiveRealm(res)))
        .fail(jqXHR => receiveRealmsErrors(jqXHR.responseJSON))
);

import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

export function makeAjaxRequest(requestObj) {
    const actionType = requestObj.actionType;
    axios.get(requestObj.url)
        .then((response) => successHandler(response, actionType))
        .catch((error) => failureHandler(error))
}

function successHandler(response, actionType) {
    dispatcher.dispatch({
        type: actionType,
        value: response
    });
}

function failureHandler(error) {
    dispatcher.dispatch({
        type: "RESPONSE_DATA_FAILURE",
        value: error
    });
}
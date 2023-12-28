// reducers/index.js
import { combineReducers } from 'redux';
import { UPDATE_FORM_DATA } from '../actions/formActions';

const initialFormState = {
    step: 1,
    formData: {}, // Ensure formData is initialized as an empty object
};

const formReducer = (state = initialFormState, action) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return { ...state, formData: { ...state.formData, ...action.payload } };
        default:
            return state;
    }
};

export default combineReducers({
    form: formReducer,
});

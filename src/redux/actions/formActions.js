// actions/index.js
import Cookies from 'js-cookie';

export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export const updateFormData = (data) => (dispatch, getState) => {
    const currentState = getState();
    console.log('Current State:', currentState); // Log the current state to the console

    const { formData } = currentState.datas.form;
    const updatedData = { ...formData, ...data };

    // Store the updated data in cookies
    Cookies.set('formData', JSON.stringify(updatedData));

    // Dispatch the action with the updated data
    dispatch({
        type: UPDATE_FORM_DATA,
        payload: updatedData,
    });
};

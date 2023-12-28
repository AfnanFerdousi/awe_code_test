
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formReducer';

const store = configureStore({
    reducer: {
        datas: formReducer,
    },
});

export default store;
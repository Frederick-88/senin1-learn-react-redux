import React from 'react';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import Reducer from "./Reducer";

import ProjectIncrement from "./components/ProjectIncrement/index"

const store = createStore(Reducer);

export default () => {
    return(
        <Provider store={store}>
            <ProjectIncrement/>
        </Provider>
    )
}
import React from 'react';
import { render } from '@testing-library/react';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store/reducers';

// eslint-disable-next-line no-undef
test('renders without crashing', () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    const { baseElement } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    // eslint-disable-next-line no-undef
    expect(baseElement).toBeDefined();
});

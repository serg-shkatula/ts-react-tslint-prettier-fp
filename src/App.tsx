import React from 'react';
import AppFrame from './components/AppFrame';
import AppContent from './components/AppContent';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { quote, ui, user } from './store/reducers';
import { defaultUiState, defaultQuoteState } from './store/defaults';
import './App.css';

const store = createStore(
    combineReducers({ user, ui, quote }),
    { user: {}, ui: defaultUiState, quote: defaultQuoteState },
    applyMiddleware(thunk)
);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AppFrame>
                    <AppContent />
                </AppFrame>
            </Provider>
        </div>
    );
}

export default App;

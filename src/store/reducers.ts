import { QuoteReducerType, UiReducerType, UserReducerType } from '../types';
import { defaultQuoteState, defaultUiState } from './defaults';

export const user: UserReducerType = (state = {}, action) => {
    // switch (action.type) {
    //     case :
    //         return {
    //             ...state,
    //             //
    //         }
    //
    // }

    // console.log(state);

    return state;
};

export const ui: UiReducerType = (state = defaultUiState, action) => {
    switch (action.type) {
        case 'UI_SELECT_PROJECT':
            return {
                ...state,
                selectedProjectIndex: action.index,
            };
        case 'UI_SELECT_SYSTEM':
            return {
                ...state,
                selectedSystemIndex: action.index,
            };
    }

    return state;
};

export const quote: QuoteReducerType = (state = defaultQuoteState, action) => {
    switch (action.type) {
        case 'QUOTE_ADD_EMPTY_PROJECT':
            return {
                ...state,
                projects: [...state.projects, { systems: [] }],
            };
        case 'QUOTE_ADD_EMPTY_SYSTEM':
            const { projects } = state;
            const updatedProjects = [...projects];
            const selectedProject = updatedProjects[action.projectIndex];
            selectedProject.systems = [...selectedProject.systems, {}];

            // console.log(updatedProjects);

            return {
                ...state,
                projects: updatedProjects,
            };
    }

    return state;
};

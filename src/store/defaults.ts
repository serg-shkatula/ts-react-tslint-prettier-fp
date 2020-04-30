import { QuoteStateType, UiStateType } from '../types';
import uiElementTypes from '../components/ui/uiElementTypes';
import { addEmptyProjectAction, addEmptySystemAction } from './actions';

export const defaultUiState: UiStateType = {
    menu: [
        {
            type: uiElementTypes.group,
            props: { label: 'project' },
            children: [
                {
                    type: uiElementTypes.button,
                    props: {
                        label: 'add project',
                        clickAction: addEmptyProjectAction,
                    },
                },
            ],
        },
        {
            type: uiElementTypes.group,
            props: {
                label: 'image',
                enabledStateCheck: (state) =>
                    state.ui.selectedProjectIndex !== undefined,
            },
            children: [
                {
                    type: uiElementTypes.button,
                    props: {
                        label: 'add image',
                        // clickAction: addEmptySystemAction,
                    },
                },
            ],
        },
        {
            type: uiElementTypes.group,
            props: {
                label: 'system',
                enabledStateCheck: (state) =>
                    state.ui.selectedProjectIndex !== undefined,
            },
            children: [
                {
                    type: uiElementTypes.button,
                    props: {
                        label: 'add system',
                        clickAction: addEmptySystemAction,
                    },
                },
            ],
        },
    ],
};

export const defaultQuoteState: QuoteStateType = {
    projects: [],
};

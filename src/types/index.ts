import { Action, Reducer } from 'redux';
import uiElementTypes from '../components/ui/uiElementTypes';
import { QuoteActionType, UiActionType } from '../store/actionTypes';

export type UserStateType = {
    isLoggedIn?: boolean;
};
export type UserActionType = 'user_log_in' | 'user_log_out';
export type UserReducerType = Reducer<UserStateType, Action<UserActionType>>;

export type UiElementType = {
    type: uiElementTypes;
    props?: any;
    children?: UiElementType[];
};

export type UiStateType = {
    selectedProjectIndex?: number;
    selectedSystemIndex?: number;
    menu: UiElementType[];
};

interface UiAction<T> extends Action<T> {
    index: number;
}

export type UiReducerType = Reducer<UiStateType, UiAction<UiActionType>>;

export type ProjectType = { systems: {}[] };

export type QuoteStateType = {
    projects: ProjectType[];
};

interface QuoteAction<T> extends Action<T> {
    projectIndex: string;
    id: string;
}

export type QuoteReducerType = Reducer<
    QuoteStateType,
    QuoteAction<QuoteActionType>
>;

export type StateType = {
    user: object;
    ui: UiStateType;
    quote: QuoteStateType;
};

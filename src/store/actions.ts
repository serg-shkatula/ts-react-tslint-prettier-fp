export const addEmptyProjectAction = (dispatch, getState) => {
    const { quote } = getState();
    const index = Object.keys(quote.projects).length;
    dispatch({
        type: 'QUOTE_ADD_EMPTY_PROJECT',
    });
    dispatch({
        type: 'UI_SELECT_PROJECT',
        index,
    });
    // dispatch({
    //     type: "ADD_EMPTY_PROJECT",
    //     id: Object.keys(quote.projects).length.toString()
    // })
};

export const addEmptySystemAction = (dispatch, getState) => {
    const { ui, quote } = getState();
    const { selectedProjectIndex } = ui;
    const index = Object.keys(
        (quote.projects[selectedProjectIndex] || {}).systems
    ).length;

    dispatch({
        type: 'QUOTE_ADD_EMPTY_SYSTEM',
        projectIndex: selectedProjectIndex,
    });
    dispatch({
        type: 'UI_SELECT_SYSTEM',
        index,
    });
    // dispatch({
    //     type: "ADD_EMPTY_PROJECT",
    //     id: Object.keys(quote.projects).length.toString()
    // })
};

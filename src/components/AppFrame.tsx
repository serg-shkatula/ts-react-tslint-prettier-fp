import React, {
    CSSProperties,
    FunctionComponent,
    PropsWithChildren,
} from 'react';
import { useSelector } from 'react-redux';
import { StateType, UiElementType } from '../types';
import UiRenderer from './ui/UiRenderer';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

interface Props extends PropsWithChildren<any> {
    style?: CSSProperties;
    className?: string;
}

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
    },
    menu: {
        display: 'flex',
        padding: 12,
        marginBottom: 12,
        '&>*:not(:last-child)': {
            marginRight: 12,
        },
    },
});

const AppFrame: FunctionComponent<Props> = ({ children }) => {
    const menu = useSelector<StateType, UiElementType[]>(
        (state) => state.ui.menu
    );
    const classes = useStyles();

    // console.log(menu)
    return (
        <div className={classes.root}>
            <Paper elevation={6} className={classes.menu}>
                <UiRenderer list={menu} />
            </Paper>
            {children}
        </div>
    );
};

export default AppFrame;

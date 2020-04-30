import React, { CSSProperties, FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import Systems from './Systems';
import { ProjectType, StateType } from '../types';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { compose } from 'redux';

type Props = {
    style?: CSSProperties;
    className?: string;
    descriptor: ProjectType;
};

const useStyles = makeStyles({
    root: {
        border: 'lightgrey solid',
        width: '100%',
        height: '100%',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
    },
});

const Project: FunctionComponent<Props> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

const withTitle = (title) => (Component) => {
    return (props) => (
        <Component {...props}>
            {props.children}
            <Typography>{title}</Typography>
        </Component>
    );
};

const withSystems = () => (Component) => {
    return (props) => {
        const selectedSystemIndex = useSelector<StateType, number | undefined>(
            (state) => state.ui.selectedSystemIndex
        );
        return (
            <Component {...props}>
                {props.children}
                <Systems
                    list={props.descriptor.systems}
                    selectedIndex={selectedSystemIndex}
                />
            </Component>
        );
    };
};

const withImage = () => (Component) => {
    return (props) => (
        <Component {...props}>
            {props.children}
            {/*<Image />*/}
        </Component>
    );
};

export default compose<any>(
    withTitle('Project'),
    withSystems(),
    withImage()
)(Project);

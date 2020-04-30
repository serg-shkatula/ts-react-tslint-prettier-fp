import React, { CSSProperties, FunctionComponent } from 'react';
import UiRenderer from './UiRenderer';
import { UiElementType } from '../../types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

type GroupProps = {
    style?: CSSProperties;
    className?: string;
    descriptor: UiElementType;
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    disabled: {
        opacity: 0.3,
        pointerEvents: 'none',
    },
});

export const Group: FunctionComponent<GroupProps> = ({ descriptor }) => {
    const { children, props } = descriptor;
    const classes = useStyles();
    const enabled = useSelector(props.enabledStateCheck || (() => true));

    return (
        <div
            className={classNames([
                classes.root,
                { [classes.disabled]: !enabled },
            ])}
        >
            <Typography variant={'caption'}>{props.label}</Typography>
            {!!children && <UiRenderer list={children} />}
        </div>
    );
};

type ButtonProps = {
    style?: CSSProperties;
    className?: string;
    descriptor: UiElementType;
};

export const Button: FunctionComponent<ButtonProps> = ({ descriptor }) => {
    const { props } = descriptor;
    const { clickAction } = props;
    const dispatch = useDispatch();

    return (
        <MaterialButton
            size={'small'}
            variant={'outlined'}
            onClick={clickAction && (() => dispatch(clickAction))}
        >
            {props.label}
        </MaterialButton>
    );
};

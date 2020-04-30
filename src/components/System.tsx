import React, { CSSProperties, FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    style?: CSSProperties;
    className?: string;
};

const useStyles = makeStyles({
    root: {
        border: 'lightgrey solid',
        padding: 12,
    },
});

const System: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant={'caption'}>System</Typography>
        </div>
    );
};

export default System;

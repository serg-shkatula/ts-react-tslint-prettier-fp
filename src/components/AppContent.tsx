import React, { CSSProperties, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectEditor from './ProjectEditor';

type Props = {
    style?: CSSProperties;
    className?: string;
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AppContent: FunctionComponent<Props> = ({ className }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ProjectEditor />
        </div>
    );
};

export default AppContent;

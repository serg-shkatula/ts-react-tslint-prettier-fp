import React, { CSSProperties, FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ProjectType, StateType } from '../types';
import Systems from './Systems';
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project';

type Props = {
    style?: CSSProperties;
    className?: string;
};

const ProjectEditor: FunctionComponent<Props> = (props) => {
    const selectedProject = useSelector<StateType, ProjectType | undefined>(
        (state) => {
            const index = state.ui.selectedProjectIndex;
            return index !== undefined
                ? state.quote.projects[index]
                : undefined;
        }
    );

    return selectedProject ? (
        <Project descriptor={selectedProject} />
    ) : (
        <Typography>no project selected</Typography>
    );
};

export default ProjectEditor;

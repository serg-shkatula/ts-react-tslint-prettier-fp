import React, { CSSProperties, FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../types';
import System from './System';

type Props = {
    style?: CSSProperties;
    className?: string;
    selectedIndex?: number;
    list: {}[];
};

const Systems: FunctionComponent<Props> = ({ list, selectedIndex }) => {
    // console.log(list)

    return (
        <>
            {Object.keys(list).map((system) => (
                <System key={system} />
            ))}
        </>
    );
};

export default Systems;

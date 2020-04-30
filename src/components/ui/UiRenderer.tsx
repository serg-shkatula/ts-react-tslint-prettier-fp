import React, { CSSProperties, FunctionComponent } from 'react';
import { Button, Group } from './UiComponents';
import { UiElementType } from '../../types';
import uiElementTypes from './uiElementTypes';

type Props = {
    style?: CSSProperties;
    className?: string;
    list: UiElementType[];
};

const typeToComponent = {
    [uiElementTypes.group]: Group,
    [uiElementTypes.button]: Button,
};

const UiRenderer: FunctionComponent<Props> = ({ list }) => {
    return (
        <>
            {list.map((item, i) => {
                const { type } = item;
                const Component = typeToComponent[type];
                return <Component key={i.toString()} descriptor={item} />;
            })}
        </>
    );
};

export default UiRenderer;

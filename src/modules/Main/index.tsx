import * as React from 'react';
import { Title } from 'ui/Title';
import { TagNameTypes } from 'models/UIEnums';

const Main = () => {
    return <Title tagName={TagNameTypes.h1}>Main</Title>;
};

export { Main };

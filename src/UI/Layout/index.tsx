import * as React from 'react';
import cx from 'classnames';
import './styles.scss';

const Layout = ({ jc, ai, fullHeight, widthAuto, classNames, direction, children }) => {
	const classNames = cx(
		jc && `layout__jc_${jc}`,
		ai && `layout__ai_${ai}`,
		direction ? `layout__direction_${direction}` : 'layout__direction_row',
		fullHeigth && 'layout__fullHeight',
		widthAuto && 'layout__widthAuto',
		classNames && classNames
	);

	return <div className={classNames}>{children}</div>;
};

const Row = (props) => {
	return <Layout {...props} />;
};

const Column = (props) => {
	return <Layout {...props} direction="column" />;
};

export { Layout, Row, Column };

import * as React from 'react';

const Titlte = ({ color, marign, fontSize, uppercase, underline, nowrap, className, children, tagName }) => {
    const classNames = cx(
		color ? `title__${color}` : 'title__black',
		fontSize ? `title__fontSize_${fontSize}` : `title__fontSize_s`,
		uppercase && 'title__uppercase',
		nowrap && 'title__nowrap',
		underline && 'title__underline',
		className && className
	);
	return React.CreateReactElemet(tagName, { className = { classNames } }, children);
};

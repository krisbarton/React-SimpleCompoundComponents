import React from 'react';
import './articles.scss';

const Articles = ({ classes, children, ...restProps }) => {
    return (
        <div className={classes}{...restProps}>
            {children}
        </div>
    )
}

Articles.Img = ({ src, alt, classes, ...restProps }) => {
    return (
        <img src={src} alt={alt} className={classes}{...restProps} />
    )
}

Articles.Title = ({ classes, children, ...restProps }) => {
    return (
        <h2 className={classes}{...restProps}>{children}</h2>
    )
}

Articles.Text = ({ classes, children, ...restProps }) => {
    return (
        <div className={classes}{...restProps}>
            {children}
        </div>
    )
}

export default Articles;

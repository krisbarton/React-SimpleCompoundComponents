import React from 'react';
import './features.scss';

const Features = ({ classes, children, ...restProps }) => {
    return (
        <div className={classes}{...restProps}>
            {children}
        </div>
    )
}

Features.Img = ({ src, alt, classes, ...restProps }) => {
    return (
        <img src={src} alt={alt} className={classes}{...restProps} />
    )
}

Features.Title = ({ classes, children, ...restProps }) => {
    return (
        <h2 className={classes}{...restProps}>{children}</h2>
    )
}

Features.Text = ({ classes, children, ...restProps }) => {
    return (
        <div className={classes}{...restProps}>
            {children}
        </div>
    )
}

export default Features;
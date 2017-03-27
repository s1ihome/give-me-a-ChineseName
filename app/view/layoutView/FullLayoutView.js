import React, { Component } from 'react'

const FullLayoutView = ({children}) => {
    return (
        <div className="root">{children}</div>
    );
}

FullLayoutView.propTypes = {
    children: React.PropTypes.element
}

export default FullLayoutView

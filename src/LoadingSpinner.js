import React from 'react';

const LoadingSpinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.spinnerMessage}</div>
        </div>
    );
};

LoadingSpinner.defaultProps = {
    spinnerMessage: 'Loading...'
};
export default LoadingSpinner;
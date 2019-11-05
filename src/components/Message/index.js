import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const component = 'error-message';

function Message(props) {

    const { error } = props;
    
    return (
        <>
            {error.content && (
                <div className={`${component}`}>
                    <h4 className={`${component}__heading`}>Error:</h4>
                    <p className={`${component}__message`}>{error.content.message}</p>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => (
    { error: state.error }
);

export default connect(mapStateToProps)(Message);
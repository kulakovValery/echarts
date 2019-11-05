import React from 'react';
import { connect } from 'react-redux';

import { setTitle } from './../../helpers';

function PageNotFound(props) {
    
    setTitle('Page Not Found (404 error)', props.pageTitle.title, props.dispatch);
    
    return (
        <h2>How did you get here?</h2>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);

export default connect(mapStateToProps)(PageNotFound);
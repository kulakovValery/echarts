import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PersonView from './../../components/PersonView';
import { setTitle } from './../../helpers';

function PageViewSingle(props) {
    
    const { name, surname } = props.person;
    name && setTitle(`Person: ${name} ${surname}`, props.pageTitle.title, props.dispatch);
    
    return (
        <>
            <Link to='/list'>&#8592; to the list</Link>
            <PersonView />
        </>
    )
}

const mapStateToProps = state => ({
    person: state.person,
    pageTitle: state.pageTitle
});

export default connect(mapStateToProps)(PageViewSingle);
import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import './style.css';

const component = 'person-card';

class PersonView extends React.Component {
    
    componentDidMount() {
        const id = this.props.match && this.props.match.params.id;
        
        id && this.props.dispatch({
            type: "GET_SINGLE_PERSON",
            payload: id
        });
    }
    
    render() {
        const { id, name, surname, age } = this.props.person;
        return (
            <section className={component}>
                {id &&  <h2 className={`${component}__heading`}>{name} {surname}</h2>}
                {id &&  <p className={`${component}__content`}>
                            <b className={`${component}__name`}>{name} {surname}</b>, <span className={`${component}__age`}>{age}</span> years old
                        </p>}
                {id && <small className={`${component}__db-key`}>DB key: {id}</small>}
            </section>
        )
    }
}

const mapStateToProps = state => (
    { person: state.person }
);

export default connect(mapStateToProps)(withRouter(PersonView));
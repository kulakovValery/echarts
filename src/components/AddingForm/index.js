import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './style.css';

const component = 'adding-form';


const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is required!';
    }
    if (!values.surname) {
        errors.surname = 'Surname is required!';
    }
    if (!values.age) {
        errors.age = 'Age is required!';
    } else if (values.age < 0 || values.age > 100) {
        errors.age = 'Incorrect age (must be between 0 and 100)!';
    }
    return errors;
}


const renderField = (props) => {
    const { input, type, placeholder, meta: { touched, error } } = props;
    return (
        <>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span className={`${component}__message`}>{error}</span>))}
        </>
    )
}


class AddingForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(values) {
        const { reset } = this.props;
        this.props.dispatch({
            type: 'POST_PERSON',
            payload: values
        });
        reset();
    }
    
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className={component}>
                <Field
                    name="name"
                    type="text"
                    placeholder='Name*'
                    component={renderField}
                />
                <Field
                    name="surname"
                    type="text"
                    placeholder='Surname*'
                    component={renderField}
                />
                <Field
                    name="age"
                    type="number"
                    placeholder='Age*'
                    component={renderField}
                />
                <button type='submit' disabled={pristine || submitting}>Add</button>
                <button type='button' disabled={pristine || submitting} onClick={reset}>Clear form</button>
            </form>
        );
    }
}


export default reduxForm ({
    form: 'adding_person',
    validate
})(AddingForm);
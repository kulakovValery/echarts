import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './style.css';

const component = 'adding-form';

class AddingForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(values) {
        const { reset } = this.props;
        
        if (values.name &&
            values.surname &&
            values.age &&
            !isNaN(values.age)) {
            if (values.age > 0 && values.age <100) {
                this.setState({valid: true, message: 'Data is being sent...'});
                this.props.dispatch({
                    type: 'POST_PERSON',
                    payload: values
                });
                reset();
            } else {
                this.setState({valid: false, message: 'Incorrect age!'});
            }
        } else {
            this.setState({valid: false, message: 'All fields required!'});
        }
    }
    
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const { valid, message } = this.state;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className={component}>
                <Field
                    name='name'
                    component='input'
                    type='text'
                    placeholder='Name*'
                />
                <Field
                    name='surname'
                    component='input'
                    type='text'
                    placeholder='Surname*'
                />
                <Field
                    name='age'
                    component='input'
                    type='number'
                    placeholder='Age*'
                />
                <button type='submit' disabled={pristine || submitting}>Add</button>
                <button type='button' disabled={pristine || submitting} onClick={reset}>Clear form</button>
                {!valid && <div className={`${component}__message`}>{message}</div>}
            </form>
        );
    }
}

export default reduxForm ({
    form: 'adding_person'
})(AddingForm);
import React from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import {addTask} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd:title => dispatch(addTask(title))
    }
}

const FormContainer = connect(null,mapDispatchToProps)(Form) 

export default FormContainer;
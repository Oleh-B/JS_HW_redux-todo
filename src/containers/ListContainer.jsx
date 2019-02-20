import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import {deleteTask,doneTask,resolveEdit,editTask} from '../actions';

const mapStateToProps = (state) => { //for matching state with props and further transfer data to update state
    return {                         
        data:state
    }
}
const mapDispatchToProps = (dispatch) => { // for matching 'presentation' components events with actions that change state
   return {
       onDelete:id => dispatch(deleteTask(id)),
       onDone:id => dispatch(doneTask(id)),
       resolveEdit:id =>  dispatch(resolveEdit(id)),
       onEdit:(id,title) =>  dispatch(editTask(id,title))
   }
}

const ListContainer = connect(mapStateToProps,mapDispatchToProps)(List)

export default ListContainer

import React from 'react';
import Button from './Button';

class Todo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.title.value;
        this.props.onEdit(this.props.id,title)
    }
    render() {
        const {id,title,editing,done,resolveEdit,onDone,onDelete} = this.props;
        let classNames = `todo-title`;
        if(done) {
        classNames += ` done`
        }
        return (
            !editing 
            ?
            <div className='todo'>
                <span onClick={() => onDone(id)} className={classNames}>
                    {title}
                </span>
                <Button onClick={() => resolveEdit(id)} className="edit">Edit</Button>
                <Button onClick={() => onDelete(id)} className="delete">Del</Button>
            </div>
            :
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
               <input type="text" ref={input => this.title = input} defaultValue={title}/>
               <Button className="save">Save</Button>
            </form>
        )
    }
} 
    

export default Todo;
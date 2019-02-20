import React from 'react';
import Button from './Button';

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.title.value;
        if(title) {
            this.props.onAdd(title);
        }
        this.title.value = '';
    }
    render() {
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
              <input ref={input => this.title = input} type="text" placeholder="Add new task"/>
              <Button type="submit" className="add">Add</Button>
            </form>
        )
    }
}

export default Form;
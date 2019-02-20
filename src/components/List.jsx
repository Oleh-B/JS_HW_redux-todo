import React from 'react';
import Todo from './Todo';

const List = ({data,onEdit,resolveEdit,onDone,onDelete}) => {
    return (
      <section className="todo-list">
           {
               data.map(todo => {
                   const {id,title,editing,done} = todo;
                   return (
                      <Todo onEdit={onEdit}
                            onDone={onDone}
                            onDelete={onDelete}
                            resolveEdit={resolveEdit}
                            key={id}
                            id={id}
                            title={title} 
                            done={done}
                            editing={editing}
                       />
                   )
               })
           }
      </section>
    )
}

export default List;
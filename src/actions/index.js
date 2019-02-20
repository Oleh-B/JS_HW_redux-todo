let _id = 4;
export const addTask = (title) => {
    return {
        type:'ADD_TODO',
        id: _id++,
        title
    }
}

export const deleteTask = (id) => {
    return {
        type:'DELETE_TODO',
        id
    }
}

export const doneTask = (id) => {
    return {
        type:'DONE_TODO',
        id
    }
}

export const resolveEdit = (id) => {
    return {
        type:'RESOLVE_TODO',
        id
    }
}

export const editTask = (id,title) => {
    return {
        type:'EDIT_TODO',
        id,
        title
    }
}
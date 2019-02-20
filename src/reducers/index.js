const reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
           const newTask = {
                id:action.id,
                title:action.title,
                done:false,
                editing:false
            };
        return [...state,newTask];

        case 'DELETE_TODO': 
           const newData = state.filter(item => item.id !== action.id);
           return newData;

        case 'DONE_TODO': 
            return state.map(item => {
                if(item.id !== action.id) {
                    return item
                } 
                return Object.assign({},item,{   // {...item,done:!item.done}
                    done:!item.done
                })
            })

        case 'RESOLVE_TODO': 
            return state.map(item => {
                if(item.id !== action.id) { 
                    return item
                } 
                return Object.assign({},item,{
                    editing:!item.editing
                })
            })

        case 'EDIT_TODO': 
            return state.map(item => {
                if(item.id !== action.id) {
                    return item
                }
                return Object.assign({},item,{ 
                    title:action.title,
                    editing:!item.editing
                }) 
           })

        default: 
           return state
    }
}

export default reducer;
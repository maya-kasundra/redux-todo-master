// import { addTodo } from "../actions";

const initialData ={
    list:[]
}
const todoReducer = (state=initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {id, data}= action.payload;
            return  {
                ...state,
                list    :[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            
        //     break;
    
        default:
            return state;
    }

}

export default todoReducer;

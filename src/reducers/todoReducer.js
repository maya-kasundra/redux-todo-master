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

            // delete todo
            case "DELETE_TODO":
                // const {id, data}= action.payload;
              
                   const newList = state.list.filter((ele)=> ele.id !== action.id)
                    return {
                        ...state, 
                        list: newList
                    }

                    case 'REMOVE_TODO':
                        return  {
                            ...state,
                            list:[]
                         
                        }
                      
                   
                    
    
        default:
            return state;
    }

}

export default todoReducer;

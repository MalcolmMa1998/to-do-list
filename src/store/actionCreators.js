import {GET_INIT_LIST, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";
// import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

// Redux thunk
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/list.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action);
//         })
//     }
// }

export const getInitList = () => ({
    type: GET_INIT_LIST
})
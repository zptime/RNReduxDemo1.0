import  {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
} from './types'

let nextTodoId = 0;

/*
 * action 创建函数 就是生成 action 的方法
 */
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});
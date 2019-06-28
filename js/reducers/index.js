/*
 * reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state（上面两个文件可以看着两个reducer）
 * Reducers 指定了应用状态的变化如何响应 actions 并发送到 store
 * actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})
/*
 * 注意上面的写法和下面完全等价：
export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}
*/
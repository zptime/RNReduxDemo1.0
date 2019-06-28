import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import Todo from './Todo'
// prop-types在组件中进行类型检测
// PropTypes.arrayOf  一个某种类型的数组
// PropTypes.shape 一个特定形式的对象
// `isRequired' 链接任何一个，以确保在没有提供 prop 的情况下显示警告
export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo: PropTypes.func.isRequired
    };

    _renderItem = (data) => {
        let dataItem = data.item;
        let { id } = dataItem;
        let { toggleTodo } = this.props;
        return (
            <Todo
                {...dataItem}
                onClick={() => toggleTodo(id)}
            />
        )
    };

    render() {
        let { todos } = this.props;
        return (
            <FlatList
                data={todos}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={this._renderItem}
            />
        )
    }
}

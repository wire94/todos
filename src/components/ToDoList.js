import { Container } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remItem, comItem } from '../actions/todosActions';
import messages from '../data/messages.json';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            all: props.todos,
            active: this.filterTodos(props.todos, 'completed', false),
            completed: this.filterTodos(props.todos, 'completed', true),
            duplicate: props.duplicate
        };
        this.applyFilter = this.applyFilter.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            filter: props.todos.length === 0 ? 'all' : this.state.filter,
            all: props.todos,
            active: this.filterTodos(props.todos, 'completed', false),
            completed: this.filterTodos(props.todos, 'completed', true),
            duplicate: props.duplicate
        });
    }

    markComplete = e => {
        this.props.comItem(e.target.id);
    }

    removeItem = e => {
        this.props.remItem(e.target.getAttribute('tid'));
    }

    filterTodos = (todos, attr, val) => {
        return todos.filter(todo => {
            if (todo[attr] === val)
                return todo;
        });
    }

    applyFilter = e => {
        this.setState({
            filter: e.target.getAttribute('filter'),
            duplicate: !!0
        });
    }

    render() {
        const { filter } = this.state;
        let lists = this.state[filter].map(list => {
            return <p id={list.id} className={`todos-item ${list.completed ? 'todos-completed' : 'todos-active'}`} key={list.id} onClick={this.markComplete}>{list.text}<span className="todos-list-remove" tid={list.id} onClick={this.removeItem}>x</span></p>;
        }), isEmpty = lists.length === 0;
        return (
            <div>
                <Container id="todos-list-container" textAlign={`${isEmpty ? 'center' : 'left'}`}>
                    {this.state.duplicate && <p className="todos-fg-danger todos-align-center">{messages.todos.error.duplicate}</p>}
                    {!isEmpty ? lists : <p>{messages.todos.info.empty[filter]}</p>}
                </Container>
                {this.state.all.length > 0 &&
                    <Container textAlign="center" id="todos-filter-container">
                        <span className={`${filter === 'all' && 'todos-active-default'}`} filter="all" onClick={this.applyFilter}>All</span> | <span className={`${filter === 'active' && 'todos-active-default'}`} filter="active" onClick={this.applyFilter}>Active</span> | <span className={`${filter === 'completed' && 'todos-active-default'}`} filter="completed" onClick={this.applyFilter}>Completed</span>
                    </Container>
                }
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        duplicate: state.todoReducer.duplicate,
    }
};

export default connect(mapStateToProps, { remItem, comItem })(ToDoList);

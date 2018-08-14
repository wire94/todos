import { Container, Menu, Icon } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remItem, comItem } from '../actions/todosActions';

class ToDoList extends Component {
    markComplete = e => {
        this.props.comItem(e.target.id);
    }

    removeItem = e => {
        this.props.remItem(e.target.getAttribute('tid'));
    }

    render() {
        let lists = this.props.todos.map(list => {
            return <p id={list.id} className={`todos-item ${list.completed ? 'todos-completed' : 'todos-active'}`} key={list.id} onClick={this.markComplete}>{list.text}<span className="todos-list-remove" tid={list.id} onClick={this.removeItem}>x</span></p>;
        }), isEmpty = lists.length === 0;
        return (
            <Container id="todos-list-container" textAlign={`${isEmpty ? 'center' : 'left'}`}>
                {this.props.duplicate && <p className="todos-fg-danger todos-align-center">Psst, Duplicate Entry!</p>}
                {!isEmpty ? lists : <p>You don't have any ToDo's!</p>}
            </Container>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        duplicate: state.todoReducer.duplicate
    }
};

export default connect(mapStateToProps, { remItem, comItem })(ToDoList);

import { Grid, Segment, Input, Container } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/todosActions';
import ToDoList from './ToDoList';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }

    handleInput = e => {
        if (e.keyCode === 13 && this.state.item.length > 0)
            this.props.addItem(this.state.item);
        else
            this.setState({
                item: e.target.value
            });
    }

    render() {
        return (
            <Grid container className="todos-fg-default">
                <Grid.Row>
                    <Grid.Column>
                        <Segment stacked>
                            <Container>
                                <Input fluid placeholder='Your ToDo Items...' onKeyUp={this.handleInput} value={this.item} />
                            </Container>
                            <ToDoList />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos
    }
};

export default connect(mapStateToProps, { addItem })(ToDoForm);

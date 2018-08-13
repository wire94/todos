const short = require('short-uuid');
import { addItem as ai, remItem as ri, comItem as ci } from './todosActionCreators';

export const addItem = item => dispatch  => {
    dispatch(ai({
        id: short.uuid(),
        text: item,
        completed: false
    }));
};

export const remItem = id => dispatch  => {
    dispatch(ri(id));
};

export const comItem = id => dispatch  => {
    dispatch(ci(id));
};
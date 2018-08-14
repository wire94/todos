import { ADD_ITEM, REM_ITEM, COM_ITEM } from "./types";

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item,
        error: false
    }
};

export const remItem = item => {
    return {
        type: REM_ITEM,
        payload: item,
        error: false
    }
};

export const comItem = item => {
    return {
        type: COM_ITEM,
        payload: item,
        error: false
    }
};

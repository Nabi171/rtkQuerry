// const { DECREMENT, INCREMENT, DINCREMENT } = require("./actionTypes");

const { INCREMENT } = require("../counter/actionTypes");
const { DINCREMENT, DDECREMENT } = require("./actionTypes");

// initial state
const initialState = {
    count: 0,
};

// reducer
const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case DDECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        default:
            return state;
    }
};

module.exports = dynamicCounterReducer;

// const { DECREMENT, INCREMENT } = require("./actionTypes");

const { DINCREMENT, DDECREMENT } = require("./actionTypes");

const increment = () => {
    return {
        type: DINCREMENT,
    };
};

const decrement = () => {
    return {
        type: DDECREMENT,
    };
};

module.exports = {
    increment,
    decrement,
};

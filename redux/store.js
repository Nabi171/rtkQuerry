const { createStore, combineReducers } = require("redux");
const counterReducer = require("./counter/reducer");

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducer);

module.exports = store;
// const { increment } = require("./dynamicCounter/actions");
// const store = require("./store");

// store.subscribe(() => {
//     console.log(store.getState());
// })

// store.dispatch(increment())

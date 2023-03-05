const { applyMiddleware, createStore } = require("redux")
const { dispatch } = require("../rtk/app/store")
const thunkMiddleware = require("redux-thunk")
const { default: fetch } = require("node-fetch")
const initialState = {
    loading: false,
    posts: [],
    error: ''
}

const fetchPostRequested = () => {
    return {
        type: "posts/requested"
    }
}

const fetchPostSucceeded = (posts) => {
    return {
        type: "posts/succeeded",
        payload: posts
    }
}

const fetchPostFailed = (error) => {
    return {
        type: "posts/failed",
        payload: error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "posts/requested":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "posts/succeeded":
            return {
                ...state,
                loading: false,
                error: '',
                posts: action.payload
            };

        case "posts/failed":
            return {
                ...state,
                loading: false,
                error: action.payload.message,
                posts: []
            };

        default:
            break;
    }
}

const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostRequested());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const posts = await response.json();
            dispatch(fetchPostSucceeded(posts))
        }
        catch (err) {
            dispatch(fetchPostFailed(err));
        }
    }
}

//create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));


store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch(fetchPosts());
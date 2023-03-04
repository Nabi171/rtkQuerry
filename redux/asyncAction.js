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

const fetchPostError = (error) => {
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
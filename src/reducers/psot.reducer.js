const initState = {
    posts: [
        {id: 1, title: "Test 01", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 2, title: "Never say", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 3, title: "Using NGRX with angular", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    ]
}
const postReducer = (state = initState, {type, payload}) => {

    if(type === "DELETE_POST"){

        const newPosts = state.posts.filter(post => post.id !== payload);
        
        return {
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default postReducer;
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postData: [
        {id: 1, post: "Качeство как клифхэнгер", likes: 2},
        {id: 2, post: "Музло приносит деньги", likes: 4},
        {id: 3, post: "Причем так много", likes: 8},
        {id: 4, post: "Что ты мог подумать - это в тенге", likes: 16},
        {id: 5, post: "Проснись и пой, везёт, если тупой", likes: 32},
    ]
};

test('new post length update check ', () => {
    let action = addPostActionCreator("Hau Hi");

    let newState = profileReducer(state, action);

    expect (newState.postData.length).toBe(6);

});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("Hau Hi");

    let newState = profileReducer(state, action);

    expect (newState.postData[0].post).toBe("Hau Hi");
});

test ("after delete length of array should be decrement", () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect (newState.postData.length).toBe(4);
});

const initialState = [];

const bookStoreReducer = (state=initialState, action) => {
       switch (action) {
        case '/book/addBook':
            return state
        default:
            return state;
       }
}
export default bookStoreReducer;
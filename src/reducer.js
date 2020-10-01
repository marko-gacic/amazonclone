export const initialState = {
    cart: [],
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            //dodavanje itema u korpu
            break;
        case 'REMOVE_FROM_CART':
            //brisanje itema iz korpe
            break;
        default:
            return state;
    }
}

export default reducer
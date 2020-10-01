export const initialState = {
    cart: [],
    user: null,
}
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            //dodavanje itema u korpu
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case 'REMOVE_FROM_CART':
            //brisanje itema iz korpe


            //kloniranje korpe
            let newCart = [...state.cart]

            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

            if (index >= 0) {
                //item postoji u korpi, obrisati ga
                newCart.splice(index, 1)
            } else {
                console.warn(`Can't remove product(id: ${action.id} )`)
            }

            return {
                ...state,
                cart: newCart
            };

        default:
            return state;
    }
}

export default reducer
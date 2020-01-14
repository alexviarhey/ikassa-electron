const ADD_PRODUCT = 'productReducer/ADD_PRODUCT';
const DELETE_PRODUCT = 'productReducer/DELETE_PRODUCT';



const initialState = {
    products: [
        {id: 0, name: 'Хлеб', number: 1, sake: '10%', amount: '3,34 BYN'},
        {id: 1, name: 'Батон', number: 1, sake: '0%', amount: '2,89 BYN'},
        {id: 2, name: 'Виски', number: 1, sake: '0%', amount: '1,68 BYN'},
    ]
};


export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                ...action.product
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(p => p.id === action.productId)
            };
        default: return state
    }
};


export const addProduct = (product) => {
    return {type: ADD_PRODUCT, product}
};

export const deleteProduct = (productId) => {
    return {type: DELETE_PRODUCT, productId}
};




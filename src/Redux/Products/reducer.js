
const initState = {
    loading: false,
    error: false,
    products :[],
    currentProduct: {}
}


export const productRenderer = (state=initState, action) => {
    switch (action.type){
        case "IS_LOADING" :
            return {...state, loading : true}

            case "IS_ERROR" :
                return {...state, loading : false, error : true}

                case "STORE_DATA" :
                    return {...state, loading : false, error : false, products : action.payload}

                    
            default :
            return state;
    }
}

// export {productRenderer} 
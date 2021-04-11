import {
    START_CAT_BREEDS_LOADING,
    STOP_CAT_BREEDS_LOADING,
    CAT_BREEDS_LOADED,
    ERROR_CAT_BREEDS_LOADING,
} from "./actions-type";


const defaultValue = {
    catBreedsList: [],
    isLoading: false,
};

export function getCatBreeds(store = defaultValue, action) {
    switch (action.type) {
        case START_CAT_BREEDS_LOADING: {
            return {
                ...store,
                isLoading: true
            }
        }
        case CAT_BREEDS_LOADED: {
            return {
                ...store,
                catBreedsList: action.payload
            }
        }
        case STOP_CAT_BREEDS_LOADING: {
            return {
                ...store,
                isLoading: false
            }
        }
        case ERROR_CAT_BREEDS_LOADING: {
            return {
                ...store,
                error: action.payload
            }
        }

        default:
            return store;
    }
};


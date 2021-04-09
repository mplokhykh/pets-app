import {
    START_DOG_BREEDS_LOADING,
    STOP_DOG_BREEDS_LOADING,
    DOG_BREEDS_LOADED,
    ERROR_DOG_BREEDS_LOADING
} from "./actions-type";


const defaultValue = {
    dogBreedsList: [],
    isLoading: false,
};

export function getDogBreeds(store = defaultValue, action) {
    switch (action.type) {
        case START_DOG_BREEDS_LOADING: {
            return {
                ...store,
                isLoading: true
            }
        }
        case DOG_BREEDS_LOADED: {
            return {
                ...store,
                dogBreedsList: action.payload
            }
        }
        case STOP_DOG_BREEDS_LOADING: {
            return {
                ...store,
                isLoading: false
            }
        }
        case ERROR_DOG_BREEDS_LOADING: {
            return {
                ...store,
                error: action.payload
            }
        }

        default:
            return store;
    }
};


import {combineReducers} from "redux";

import {petsList} from "./pets-list/reducer"
import {getCatBreeds} from "./cat-breeds/reducer";
import {getDogBreeds} from "./dog-breeds/reducer";

export const createRootReducer = () => {
    return combineReducers({
        petsList,
        getCatBreeds,
        getDogBreeds
    });
};

import {
    START_CAT_BREEDS_LOADING,
    STOP_CAT_BREEDS_LOADING,
    CAT_BREEDS_LOADED,
    ERROR_CAT_BREEDS_LOADING,
} from "./actions-type";

export const getCatBreeds = () => {
    return (dispatch) => {
        dispatch(startLoadingCatBreeds());
        return fetch(`https://api.thecatapi.com/v1/breeds`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: CAT_BREEDS_LOADED,
                    payload: data,
                });
                dispatch(stopLoadingCatBreeds());
            })
            .catch((error) => {
                dispatch({
                    type: ERROR_CAT_BREEDS_LOADING,
                    payload: error,
                });
            });
    };
};

export const startLoadingCatBreeds = () => {
    return {
        type: START_CAT_BREEDS_LOADING,
    };
};

export const stopLoadingCatBreeds = () => {
    return {
        type: STOP_CAT_BREEDS_LOADING,
    };
};

import {
   START_DOG_BREEDS_LOADING,
    STOP_DOG_BREEDS_LOADING,
    DOG_BREEDS_LOADED,
    ERROR_DOG_BREEDS_LOADING
} from "./actions-type";

export const getDogBreeds = () => {
    return (dispatch) => {
        dispatch(startLoadingDogBreeds());
        return fetch(`https://api.thedogapi.com/v1/breeds`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: DOG_BREEDS_LOADED,
                    payload: data,
                });
                dispatch(stopLoadingDogBreeds());
            })
            .catch((error) => {
                dispatch({
                    type: ERROR_DOG_BREEDS_LOADING,
                    payload: error,
                });
            });
    };
};

export const startLoadingDogBreeds = () => {
    return {
        type: START_DOG_BREEDS_LOADING,
    };
};

export const stopLoadingDogBreeds = () => {
    return {
        type: STOP_DOG_BREEDS_LOADING,
    };
};

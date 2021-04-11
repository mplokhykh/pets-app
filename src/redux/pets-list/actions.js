import {ADD_PET, REMOVE_PET, REMOVE_ALL_PETS} from "./actions-type"


export const likePet = (urlPhoto) => {
    return {
        type: ADD_PET,
        payload: urlPhoto
    }
};

export const removePet = (urlPhoto) => {
    return {
        type: REMOVE_PET,
        payload: urlPhoto
    }
};

export const removeAllPets = () => {
    return {
        type: REMOVE_ALL_PETS
    }
};
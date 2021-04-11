import {ADD_PET, REMOVE_PET, REMOVE_ALL_PETS} from "./actions-type"

const defaultValue = {
    likedPets: []
};

export function petsList(store = defaultValue, action) {
    switch (action.type) {
        case ADD_PET: {
            const { likedPets } = store;
            return {
                likedPets: [...likedPets, action.payload]
            }
        }
        case REMOVE_PET: {
            const { likedPets } = store;
            return {
                likedPets: likedPets.filter(item => item !== action.payload)
            }
        }
        case REMOVE_ALL_PETS: {
            return {
                likedPets: []
            }
        }
        default:
            return store;
    }
};

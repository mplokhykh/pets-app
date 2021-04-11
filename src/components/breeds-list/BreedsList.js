import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Select} from "../select/Select";
import {BreedCard} from "../breed-card/BreedCard";
import './BreedsList.scss'


function BreedsList({ dogBreedsList, catBreedsList }) {
    let { breedId } = useParams();
    const [valueSelect, setValueSelect] = useState('')
    const [breedsList, setBreedsList] = useState('')

    useEffect(() => {
        setBreedsList(breedId === 'cat' ? catBreedsList : dogBreedsList);
    }, []);

    const handleChange = fieldName => fieldValue => {
        setValueSelect({ [fieldName]: fieldValue })
    }

    return <div>
        {!!breedsList && <div className='list'>
            <Select
                label='Breed:'
                list={breedsList}
                value={valueSelect.option}
                onChange={handleChange('option')}
            />
            {!!valueSelect && <BreedCard
                breedInfo={breedsList.find(breed => breed.name === valueSelect.option)}
            />
            }
        </div>}
    </div>
}

const mapStateToProps = (store) => {
    const { getDogBreeds, getCatBreeds } = store;
    return {
        dogBreedsList: getDogBreeds.dogBreedsList,
        catBreedsList: getCatBreeds.catBreedsList
    };
};

export default connect(mapStateToProps)(BreedsList);

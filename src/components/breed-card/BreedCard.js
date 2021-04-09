import React from "react";
import {Rating} from '@material-ui/lab';
import {useParams} from "react-router-dom";
import {PetPreview} from "../pet-preview/PetPreview";
import "./BreedCard.scss"


export function BreedCard({ breedInfo }) {
    let { breedId } = useParams();


    const catInfo = () => {
        const {
            name,
            description,
            temperament,
            adaptability,
            affection_level,
            child_friendly,
            dog_friendly,
            energy_level,
            grooming,
            health_issues,
            intelligence,
            shedding_level,
            social_needs,
            stranger_friendly,
            vocalisation
        } = breedInfo;


        const breed_features = [
            {
                name: "Affection Level",
                value: affection_level
            },
            {
                name: "Adaptability",
                value: adaptability
            },
            {
                name: "Child friendly",
                value: child_friendly
            },
            {
                name: "Dog friendly",
                value: dog_friendly
            },
            {
                name: "Energy level",
                value: energy_level,
            },
            {
                name: "Grooming",
                value: grooming,
            },
            {
                name: "Health issues",
                value: health_issues,
            },
            {
                name: "Intelligence",
                value: intelligence,
            },
            {
                name: "Shedding level",
                value: shedding_level,
            },
            {
                name: "Social needs",
                value: social_needs,
            },
            {
                name: "Stranger friendly",
                value: stranger_friendly,
            },
            {
                name: "Vocalisation",
                value: vocalisation,
            },
        ]
        return <div className="detail">
            <h2>{name}</h2>
            <div>{description}</div>
            <div className="detail-additional">{temperament}</div>
            <div>{breed_features.map(item => {
                return <div className="detail-rating">
                    <div>{item.name}</div>
                    <Rating name="read-only" value={item.value} readOnly/>
                </div>
            })}
            </div>

        </div>

    }


    const dogInfo = () => {
        const {name, temperament, bred_for } = breedInfo;

        return <div className="detail">
            <h2>{name}</h2>
            <div className="detail-additional">{temperament}</div>
            {!!bred_for && <div>Bred for: {bred_for}</div>}
        </div>
    }

    return <div className="card-wrapper">
        <PetPreview imageUrl={breedInfo.image.url}/>
        {breedId === 'cat' && catInfo()}
        {breedId === 'dog' && dogInfo()}

    </div>
}

import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {likePet} from "../../redux/pets-list/actions";
import {Button} from "../../components/button/Button";
import LikedPetsList from "../../components/liked-pets-list/LikedPetsList";
import PetPreview from "../../components/pet-preview/PetPreview";
import "../PetsPage.scss";

function CatsPage(props) {
    const { likedPets, likePet } = props;
    const [urlCat, setUrlCat] = useState("");
    // const [isModalOpened, setIsModalOpened] = useState(false);
    useEffect(() => {
        if (urlCat === "") {
            loadCat();
        }
    }, []);

    const loadCat = async () => {
        await fetch(`https://api.thecatapi.com/v1/images/search`)
            .then((response) => response.json())
            .then((data) => {
                setUrlCat(data[0].url);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //button methods
    const onLoadNewCat = () => {
        loadCat();
    };

    const onLikeCat = () => {
        if (!!urlCat && !likedPets.includes(urlCat)) {
            likePet && likePet(urlCat);
        }
    };

    return (
        <div className="page">
            <div className="page-container">
                <div></div>
                <div className="page-main">
                    <PetPreview imageUrl={urlCat}/>
                    <div className="page-main-btn-wrapper">
                        <Button
                            label="Load new cat"
                            onClick={onLoadNewCat}
                            className="round"
                        />
                        <Button label="Like cat" onClick={onLikeCat} className="round"/>
                        <Button
                            label="Show cat in modal"
                            onClick={onLoadNewCat}
                            className="round"
                        />
                    </div>
                </div>
                <LikedPetsList/>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    const { petsList } = store;
    return {
        likedPets: petsList.likedPets,
    };
};

const mapDispatchToProps = {
    likePet
};

export default connect(mapStateToProps, mapDispatchToProps)(CatsPage);

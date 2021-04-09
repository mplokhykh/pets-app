import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {
    likePet
} from "../../redux/pets-list/actions";
import {Button} from "../../components/button/Button";
import LikedPetsList from "../../components/liked-pets-list/LikedPetsList";
import {PetPreview} from "../../components/pet-preview/PetPreview";
import "../PetsPage.scss";
import {Modal} from "../../components/modal/Modal";

function DogsPage(props) {
    const { likedPets, likePet } = props;
    const [urlDog, setUrlDog] = useState("");
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (urlDog === "") {
            loadDog();
        }
    }, []);

    const loadDog = async () => {
        fetch(`https://api.thedogapi.com/v1/images/search`)
            .then((response) => response.json())
            .then((data) => {
                setUrlDog(data[0].url);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //button methods
    const onLoadNewDog = () => {
        loadDog();
    };

    const onLikeDog = () => {
        if (!!urlDog && !likedPets.includes(urlDog)) {
            likePet && likePet(urlDog);
        }
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="page">
            <div className="page-container">
                <Modal isOpen={modalOpen} handleModalToggle={toggleModal}>
                    <img src={urlDog} alt="liked-doggo"/>
                </Modal>
                <div></div>
                <div className="page-main">
                    <PetPreview imageUrl={urlDog}/>
                    <div className="page-main-btn-wrapper">
                        <Button label="Load new dog" onClick={onLoadNewDog} className="round"/>
                        <Button label="Like dog" onClick={onLikeDog} className="round"/>
                        <Button label="Show dog in modal" onClick={toggleModal} className="round"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DogsPage);

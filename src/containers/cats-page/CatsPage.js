import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {likePet} from "../../redux/pets-list/actions";
import {Button} from "../../components/button/Button";
import LikedPetsList from "../../components/liked-pets-list/LikedPetsList";
import {PetPreview} from "../../components/pet-preview/PetPreview";
import "../PetsPage.scss";
import {Modal} from "../../components/modal/Modal";

function CatsPage(props) {
    const { likedPets, likePet } = props;
    const [urlCat, setUrlCat] = useState("");
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (urlCat === "") {
            loadCat();
        }
    }, []);

    const loadCat = () => {
        fetch(`https://api.thecatapi.com/v1/images/search`)
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

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="page">
            <div className="page-container">
                <Modal isOpen={modalOpen} handleModalToggle={toggleModal}>
                    <img src={urlCat} alt="liked-doggo"/>
                </Modal>
                <div></div>
                <div className="page-main">
                    <PetPreview imageUrl={urlCat}/>
                    <div className="page-main-btn-wrapper">
                        <Button label="Load new cat" onClick={onLoadNewCat} className="round"/>
                        <Button label="Like cat" onClick={onLikeCat} className="round"/>
                        <Button label="Show cat in modal" onClick={toggleModal} className="round"/>
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

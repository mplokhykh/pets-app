import React from "react";
import { connect } from "react-redux";
import {
  removePet,
  removeAllPets,
} from "../../redux/pets-list/actions";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { Button } from "../button/Button";

import "./LikedPetsList.scss";

const CN = "liked-list";

function PetsListItem({ pet, onDelete }) {
  return (
    <div className={`${CN}-item`} key={pet}>
      <img src={pet} alt="pet" className="img" />
      <DeleteIcon
        data-target={pet}
        className={`${CN}-btn-delete`}
        onClick={onDelete}
      />
    </div>
  );
}

function LikedPetsList({ likedPets, removePet, removeAllPets }) {
  const deletePet = (id) => {
    return () => {
      removePet && removePet(id);
    };
  };

  const deleteAllPets = () => {
      removeAllPets && removeAllPets();
  };
  return (
    <div className={`${CN}`}>
      {!!likedPets.length && (
        <div>
          <Button
            label="clear liked list"
            onClick={deleteAllPets}
            className="ellipse"
          />
          {likedPets.map((pet) => (
          <PetsListItem pet={pet} key={pet} onDelete={deletePet(pet)} />
          ))}
        </div>
      )}
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
  removePet,
  removeAllPets,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikedPetsList);

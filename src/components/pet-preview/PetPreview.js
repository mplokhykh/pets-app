import React from 'react';
import './PetPreview.scss';

const CN = 'pet-preview';

export function PetPreview ({ imageUrl }) {

    return (
      <div className={CN}>
        {imageUrl && <img className={`${CN}-img`} src={imageUrl} alt=""/>}
      </div>
    );
}


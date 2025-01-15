import React from 'react';

const CharacterImage = ({ selectedCharacter }) => {
    const imagePath = `/images/character_images/Character_${selectedCharacter}.webp`;

    return (
        <div className="character-display">
            <img className="character-image" src={imagePath} alt={selectedCharacter} />
        </div>
    );
};

export default CharacterImage;
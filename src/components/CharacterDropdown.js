import React from 'react';

const CharacterDropdown = ({ selectedCharacter, setSelectedCharacter }) => {
    const handleChange = (event) => {
        setSelectedCharacter(event.target.value);
    };

    return (
        <div className="character-dropdown">
            <label htmlFor="character-select">Character:<br></br></label>
            <select id="character-select" value={selectedCharacter} onChange={handleChange}>
                <option value="Isaac">Isaac</option>
                <option value="Magdalene">Magdalene</option>
                <option value="Cain">Cain</option>
                <option value="Judas">Judas</option>
                <option value="???">???</option>
                <option value="Eve">Eve</option>
                <option value="Samson">Samson</option>
                <option value="Azazel">Azazel</option>
                <option value="Lazarus">Lazarus</option>
                <option value="Eden">Eden</option>
                <option value="The Lost">The Lost</option>
                <option value="Lilith">Lilith</option>
                <option value="Keeper">Keeper</option>
                <option value="Apollyon">Apollyon</option>
                <option value="The Forgotten">The Forgotten</option>
                <option value="Bethany">Bethany</option>
                <option value="Jacob">Jacob</option>
                <option value="Esau">Esau</option>
            </select>
        </div>
    );
};

export default CharacterDropdown;
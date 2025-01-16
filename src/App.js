import React, { useState } from 'react';
import CharacterImage from './components/CharacterImage';
import CharacterDropdown from './components/CharacterDropdown';
import StatsDisplay from './components/StatsDisplay';
import CharacterBaseStats from './components/CharacterBaseStats';
import SelectedItems from './components/SelectedItems';
import AllItems from './components/AllItems';
import './styles/main.css';

const App = () => {
    const [selectedCharacter, setSelectedCharacter] = useState("Isaac");
    const [stats, setStats] = useState(CharacterBaseStats["Isaac"]);
    
    const handleCharacterChange = (character) => {
        setSelectedCharacter(character);
        setStats(CharacterBaseStats[character] || {});
    };

    return (
        <div className="app">
            <header className="header">
                <h1>The Binding of Isaac: Rebirth</h1>
            </header>
            <main className="container">
                <section className="character-section">
                    <div className="character-display">
                        <CharacterImage selectedCharacter={selectedCharacter} />
                        <CharacterDropdown
                            selectedCharacter={selectedCharacter}
                            setSelectedCharacter={handleCharacterChange}
                        />
                    </div>
                </section>
                <section className="stats-section">
                    <div className="stats-display">
                        <StatsDisplay stats={stats} character={selectedCharacter} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
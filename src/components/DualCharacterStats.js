import React from 'react';

const DualCharacterStats = ({ characterStats, labels }) => (
    <div className="dual-character-display">
        {Object.keys(characterStats).map(([key, stats]) => (
            <div key={key} className="character-stats">
                <h3>{labels[key]}</h3>
                {Object.keys(stats).map((statKey) => (
                    <div className="stat" key={statKey}>
                        <label>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}:</label>
                        <span>{stats[statKey]}</span>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default DualCharacterStats;
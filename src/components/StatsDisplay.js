import React from 'react';

const StatsDisplay = ({ stats }) => {
    return (
        <div className="stats-display">
            {Object.keys(stats).map((statKey) => (
                <div className="stat" key={statKey}>
                    <label>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}:</label>
                    <span>{stats[statKey]}</span>
                </div>
            ))}
        </div>
    );
};

export default StatsDisplay;
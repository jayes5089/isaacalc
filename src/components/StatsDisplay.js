import React from 'react';

const StatsDisplay = ({ stats }) => {
    const statIcons = {
        speed: require('../assets/ui_images/speed_stat_ui.png'),
        fireRate: require('../assets/ui_images/fireRate_stat_ui.png'),
        damage: require('../assets/ui_images/damage_stat_ui.png'),
        range: require('../assets/ui_images/range_stat_ui.png'),
        shotSpeed: require('../assets/ui_images/shotSpeed_stat_ui.png'),
        luck: require('../assets/ui_images/luck_stat_ui.png'),
    };

    return (
        <div className="stats-display">
            {Object.keys(stats).map((statKey) => (
                <div className="stat" key={statKey}>
                    <img
                        src={statIcons[statKey]}
                        alt={`${statKey} icon`}
                        className="stat-icon"
                    />
                    <label>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}:</label>
                    <span>{stats[statKey]}</span>
                </div>
            ))}
        </div>
    );
};

export default StatsDisplay;
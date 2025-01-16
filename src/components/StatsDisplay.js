import React from 'react';
import speedIcon from '../assets/stat_icon/speed_stat_ui.png';
import tearsIcon from '../assets/stat_icon/tears_stat_ui.png';
import damageIcon from '../assets/stat_icon/damage_stat_ui.png';
import rangeIcon from '../assets/stat_icon/range_stat_ui.png';
import shotSpeedIcon from '../assets/stat_icon/shotSpeed_stat_ui.png'
import luckIcon from '../assets/stat_icon/luck_stat_ui.png';

const StatsDisplay = ({ stats }) => {
    const statIcons = {
        speed: speedIcon,
        tears: tearsIcon,
        damage: damageIcon,
        range: rangeIcon,
        shotSpeed: shotSpeedIcon,
        luck: luckIcon,
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
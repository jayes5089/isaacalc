import React from 'react';
import speedIcon from '../assets/stat_icon/speed_stat_ui.png';
import tearsIcon from '../assets/stat_icon/tears_stat_ui.png';
import damageIcon from '../assets/stat_icon/damage_stat_ui.png';
import rangeIcon from '../assets/stat_icon/range_stat_ui.png';
import shotSpeedIcon from '../assets/stat_icon/shotSpeed_stat_ui.png'
import luckIcon from '../assets/stat_icon/luck_stat_ui.png';
import EditableStats from './EditableStats';
import DualCharacterStats from './DualCharacterStats';

const StatsDisplay = ({ stats }) => {
    const statIcons = {
        speed: speedIcon,
        tears: tearsIcon,
        damage: damageIcon,
        range: rangeIcon,
        shotSpeed: shotSpeedIcon,
        luck: luckIcon,
    };


    if (character === "eden") {
        return (
            <EditableStats
                stats={stats}
                onChange={(statKey, value) => console.log(`${statKey}: ${value}`)}
            />
        );
    };

    if (character === "forgotten") {
        return (
            <DualCharacterStats
                characterStats={stats.forgotten}
                labels={{ melee: "The Forgotten (Melee)", soul: "The Forgotten (Soul)" }}
            />
        );
    };

    if (character === "jacobEsau") {
        return (
            <DualCharacterStats
                characterStats={stats.jacobEsau}
                labels={{ jacob: "Jacob", esau: "Esau" }}
            />
        );
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
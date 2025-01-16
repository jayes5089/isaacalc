import React from 'react';

const EditableStats = ({ stats, onChange }) => (
    <div className="editable-stats">
        {Object.keys(stats).map((statKey) => (
            <div className="stat" key={statKey}>
                <label>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}:</label>
                <input
                    type="number"
                    value={stats[statKey]}
                    onChange={(e) => onChange(statKey, parseFloat(e.target.value))}
                />
            </div>
        ))}
    </div>
);

export default EditableStats;